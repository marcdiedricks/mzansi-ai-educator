import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests/f12',
  retries: 0,
  use: { ...devices['Desktop Chrome'], viewport: { width: 390, height: 844 }, baseURL: 'http://127.0.0.1:3000/mzansi-ai-educator/' },
  webServer: { command: 'bun run dev -- --host 127.0.0.1', url: 'http://127.0.0.1:3000/mzansi-ai-educator/', reuseExistingServer: false, timeout: 120000 },
});
