import React, { useState } from 'react';
import { Phone, ShoppingBag, Menu, X, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onQuickOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onQuickOrder,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المنيو', href: '#menu' },
    { label: 'العروض', href: '#offers' },
    { label: 'لماذا نحن؟', href: '#why-us' },
    { label: 'آراء العملاء', href: '#reviews' },
    { label: 'موقعنا', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#121212]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single Wordmark Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-right font-black tracking-tight text-white transition-opacity hover:opacity-95"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white shadow-md shadow-red-950/40">
            <Flame className="h-5 w-5 text-amber-300" />
          </div>
          <span className="text-xl sm:text-2xl font-black text-white">
            {RESTAURANT_INFO.name}
          </span>
        </a>

        {/* Zone 2: Clean Text Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Call */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-3.5 py-2 text-xs font-bold text-zinc-100 hover:border-red-600 hover:text-red-400 transition-colors whitespace-nowrap"
            title="اتصل بالمطعم مباشرة"
          >
            <Phone className="h-3.5 w-3.5 text-red-500" />
            <span className="font-mono tabular-nums">{RESTAURANT_INFO.phone}</span>
          </a>

          {/* Cart / Order Trigger */}
          <button
            onClick={onOpenCart}
            type="button"
            className="relative flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-red-600 active:scale-95 transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            aria-label="عرض سلة الطلبات"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>الطلب</span>
            {cartCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white md:hidden"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-[#161618] px-4 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3 text-base font-semibold text-zinc-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-zinc-800/60 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-zinc-800 py-2.5 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4 text-red-500" />
                <span>اتصل بنا: {RESTAURANT_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuickOrder();
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-700 py-2.5 text-sm font-bold text-white"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>اطلب أونلاين الآن</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
