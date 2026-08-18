import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';

export function AppShell() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F2F5] text-[#1A202C] font-sans antialiased">
      <main className="flex-1 w-full max-w-lg mx-auto bg-white min-h-screen pb-24 shadow-sm sm:border-x-2 sm:border-[#E2E8F0] flex flex-col">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
