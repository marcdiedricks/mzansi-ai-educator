// Offline shell pilot. Keep this cache isolated from older deployed builds.
const CACHE_NAME = 'mzansi-ai-educator-shell-v3';
const BASE_PATH = new URL(self.registration.scope).pathname;
const SHELL_URLS = [BASE_PATH, `${BASE_PATH}manifest.json`, `${BASE_PATH}icon.svg`];

async function cacheShell() {
  const cache = await caches.open(CACHE_NAME);
  const response = await fetch(BASE_PATH, { cache: 'reload' });
  if (!response.ok) throw new Error('App shell unavailable');
  const html = await response.clone().text();
  await cache.put(BASE_PATH, response);

  // Vite embeds hashed entry scripts and CSS links in the built HTML.
  // Precache these files so a newly installed app can cold-start offline.
  const assetUrls = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
    .map((match) => new URL(match[1], self.location.origin + BASE_PATH))
    .filter((url) => url.origin === self.location.origin && url.pathname.startsWith(BASE_PATH))
    .map((url) => url.href);
  const urls = [...new Set([...SHELL_URLS.slice(1), ...assetUrls])];
  const results = await Promise.allSettled(urls.map(async (url) => {
    const resource = await fetch(url, { cache: 'reload' });
    if (!resource.ok) throw new Error(`Missing shell resource: ${url}`);
    await cache.put(url, resource);
  }));
  // Required JS/CSS must exist before taking control; optional icons may fail.
  const required = urls.filter((url) => /\.(?:js|css)(?:\?|$)/.test(url));
  for (const url of required) {
    if (!(await cache.match(url))) throw new Error(`Missing offline asset: ${url}`);
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(cacheShell().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith('mzansi-ai-educator-') && key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE_PATH)) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok && response.headers.get('content-type')?.includes('text/html')) {
          const cache = await caches.open(CACHE_NAME);
          // Keep the verified install shell as fallback; never replace it with
          // a newer HTML file whose hashed JS/CSS may not yet be cached.
          await cache.put(request, response.clone());
        }
        return response;
      } catch {
        return (await caches.match(request)) || (await caches.match(BASE_PATH)) ||
          new Response('Offline content is not yet available. Reconnect once to finish setup.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok && response.type !== 'opaque') {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  })());
});
