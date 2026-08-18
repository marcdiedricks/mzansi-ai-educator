import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Brain, Book, Award } from 'lucide-react';

export function BottomNav() {
  const items = [
    { to: '/home', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/learn', label: 'Curriculum', icon: BookOpen },
    { to: '/practice', label: 'Unplugged Lab', icon: Brain },
    { to: '/glossary', label: 'Glossary', icon: Book },
    { to: '/certificates', label: 'Certificates', icon: Award },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#E2E8F0] z-50 safe-area-pb shadow-lg">
      <div className="w-full max-w-lg mx-auto flex items-center justify-around h-16 sm:h-20 px-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 py-1.5 px-0.5 transition-all rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3E50] ${
                  isActive
                    ? 'text-[#2D3E50] font-black'
                    : 'text-gray-400 hover:text-gray-600 font-medium'
                }`
              }
              aria-label={item.label}
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-orange-50 text-[#E67E22]' : ''}`}>
                    <Icon className="w-5 h-5 sm:w-5 sm:h-5" strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span
                    className={`text-[9px] sm:text-[10px] uppercase tracking-tighter text-center leading-none mt-1 whitespace-nowrap ${
                      isActive ? 'text-[#2D3E50] font-black' : 'text-gray-500'
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
