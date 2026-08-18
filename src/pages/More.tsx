import { Book, Download, Users, Accessibility, Database, Shield, Info, Settings2 } from 'lucide-react';

export function More() {
  const links = [
    { label: 'Glossary', icon: Book },
    { label: 'Downloads', icon: Download },
    { label: 'Facilitator Mode', icon: Users },
  ];

  const settings = [
    { label: 'Accessibility', icon: Accessibility },
    { label: 'Data Settings', icon: Database },
    { label: 'Privacy', icon: Shield },
    { label: 'Standard / Plain Language', icon: Settings2 },
  ];

  const about = [
    { label: 'About Mzansi AI Educator', icon: Info },
  ];

  const Section = ({ title, items }: { title: string, items: typeof links }) => (
    <div className="mb-6">
      <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">
        {title}
      </h3>
      <div className="bg-white border-2 border-[#E2E8F0] rounded-2xl overflow-hidden">
        <div className="divide-y-2 divide-[#E2E8F0]">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center p-4 hover:bg-[#F8F9FA] text-left transition-colors focus-visible:outline-none focus-visible:bg-[#F8F9FA] group"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#2D3E50] transition-colors mr-4" />
                <span className="flex-1 font-bold text-[#1A202C] group-hover:text-[#2D3E50] transition-colors">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 pb-12">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-[#2D3E50] mb-1">More</h1>
        <p className="text-sm font-medium text-gray-500">Resources and settings.</p>
      </header>

      <Section title="Resources" items={links} />
      <Section title="Settings" items={settings} />
      <Section title="App" items={about} />
    </div>
  );
}
