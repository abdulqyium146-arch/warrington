'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { CalendarCheck, LogOut, ChevronLeft, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  userName?: string;
}

export function Sidebar({ userName }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const active = pathname.startsWith('/admin/bookings');

  return (
    <aside
      className={cn(
        'flex flex-col h-screen bg-brand-darkgray border-r border-brand-gray/50 transition-all duration-300 sticky top-0',
        collapsed ? 'w-16' : 'w-60'
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-brand-gray/50 h-16">
        {!collapsed && (
          <Link href="/admin/bookings" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-gold" />
            <span className="font-heading font-bold text-brand-white text-sm">WCD Admin</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            'p-1.5 rounded-md text-gray-400 hover:text-brand-white hover:bg-brand-gray/50 transition-colors',
            collapsed && 'mx-auto'
          )}
        >
          <ChevronLeft className={cn('h-4 w-4 transition-transform', collapsed && 'rotate-180')} />
        </button>
      </div>

      <nav className="flex-1 py-4 px-2">
        <Link
          href="/admin/bookings"
          className={cn(
            'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium',
            active
              ? 'bg-brand-gold/15 text-brand-gold'
              : 'text-gray-400 hover:text-brand-white hover:bg-brand-gray/40',
            collapsed && 'justify-center px-2'
          )}
          title={collapsed ? 'Bookings' : undefined}
        >
          <CalendarCheck className={cn('shrink-0', collapsed ? 'h-5 w-5' : 'h-4 w-4')} />
          {!collapsed && <span>Bookings</span>}
        </Link>
      </nav>

      <div className={cn('p-3 border-t border-brand-gray/50', collapsed && 'flex justify-center')}>
        {!collapsed && (
          <div className="mb-3 px-2">
            <p className="text-xs font-medium text-brand-white truncate">{userName ?? 'Admin'}</p>
          </div>
        )}
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className={cn(
            'flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm',
            collapsed && 'justify-center px-2'
          )}
          title={collapsed ? 'Sign out' : undefined}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Sign out</span>}
        </button>
      </div>
    </aside>
  );
}
