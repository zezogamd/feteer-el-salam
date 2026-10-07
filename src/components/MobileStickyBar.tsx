import React from 'react';
import { Phone, Bike, Navigation, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileStickyBarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <aside
      aria-label="أزرار الطلب والاتصال السريع"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#121212]/95 backdrop-blur-lg border-t border-zinc-800 p-2.5 px-3 shadow-2xl safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* 1. 📞 اتصال */}
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-zinc-900 border border-zinc-700/80 py-2 px-1 text-zinc-100 active:scale-95 transition-transform"
          aria-label="اتصال هاتفي بالمطعم"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-950 text-red-400">
            <Phone className="h-4 w-4" />
          </div>
          <span className="text-[11px] font-black leading-none text-zinc-200">
            اتصال
          </span>
        </a>

        {/* 2. 🛵 اطلب الآن (Primary highlight) */}
        <button
          type="button"
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-red-700 to-red-600 py-2 px-1 text-white shadow-lg shadow-red-950/60 active:scale-95 transition-transform"
          aria-label="اطلب الآن وافتح السلة"
        >
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-black ring-2 ring-[#121212]">
              {cartCount}
            </span>
          )}
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-amber-300">
            <Bike className="h-4 w-4" />
          </div>
          <span className="text-[11px] font-black leading-none text-white">
            اطلب الآن
          </span>
        </button>

        {/* 3. 📍 الاتجاهات */}
        <a
          href={RESTAURANT_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-xl bg-zinc-900 border border-zinc-700/80 py-2 px-1 text-zinc-100 active:scale-95 transition-transform"
          aria-label="الاتجاهات على خرائط جوجل"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-950/80 text-amber-400">
            <Navigation className="h-4 w-4" />
          </div>
          <span className="text-[11px] font-black leading-none text-zinc-200">
            الاتجاهات
          </span>
        </a>

      </div>
    </aside>
  );
};
