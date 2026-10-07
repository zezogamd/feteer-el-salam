import React from 'react';
import { Pizza, Bike, ShoppingBag, Armchair, Phone, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const QuickInfoBar: React.FC = () => {
  const infoItems = [
    {
      icon: Pizza,
      label: 'بيتزا وفطائر',
      sub: 'شرقي وإيطالي ومشلتت',
      color: 'text-amber-400',
    },
    {
      icon: Bike,
      label: 'خدمة توصيل',
      sub: 'توصيل سريع وبهتيم وشبرا',
      color: 'text-red-400',
    },
    {
      icon: ShoppingBag,
      label: 'طعام سفري',
      sub: 'جاهز وسريع بأعلى نظافة',
      color: 'text-orange-400',
    },
    {
      icon: Armchair,
      label: 'جلوس داخل المطعم',
      sub: 'صالة عائلية مريحة',
      color: 'text-amber-300',
    },
    {
      icon: Clock,
      label: 'مفتوح 24 ساعة',
      sub: 'جاهزين لخدمتك في أي وقت',
      color: 'text-emerald-400',
    },
  ];

  return (
    <div className="relative z-10 border-b border-zinc-800 bg-[#161618] py-4 shadow-inner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Quick info chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full lg:w-auto flex-1">
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-2.5 transition-colors hover:border-zinc-700"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800/80 ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-right overflow-hidden">
                    <p className="text-xs sm:text-sm font-bold text-zinc-100 truncate">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-zinc-400 truncate">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Call Callout Banner */}
          <div className="w-full lg:w-auto shrink-0 flex justify-end">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex w-full lg:w-auto items-center justify-center gap-2.5 rounded-xl border border-red-600/40 bg-gradient-to-r from-red-900/60 to-red-800/40 px-5 py-2.5 text-zinc-100 hover:border-red-500 hover:bg-red-800/60 transition-all shadow-sm"
              title="اتصال سريع بالهاتف"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-right">
                <span className="block text-[11px] font-semibold text-red-300">للحجز والطلبات المباشرة</span>
                <span className="block text-sm font-black font-mono tracking-wider text-white">
                  {RESTAURANT_INFO.phone}
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
