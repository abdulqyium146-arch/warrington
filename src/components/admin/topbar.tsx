'use client';
import { Bell, Search } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface TopbarProps {
  title: string;
  pendingCount?: number;
}

export function Topbar({ title, pendingCount = 0 }: TopbarProps) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/admin/bookings?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <header className="h-16 border-b border-brand-gray/50 bg-brand-darkgray/80 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between px-6">
      <h1 className="text-lg font-heading font-semibold text-brand-white">{title}</h1>

      <div className="flex items-center gap-4">
        <form onSubmit={handleSearch} className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search bookings..."
            className="pl-9 w-64 h-9 text-sm"
          />
        </form>

        <button className="relative p-2 text-gray-400 hover:text-brand-white transition-colors">
          <Bell className="h-5 w-5" />
          {pendingCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-brand-gold rounded-full text-[10px] font-bold text-brand-black flex items-center justify-center">
              {pendingCount > 9 ? '9+' : pendingCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
