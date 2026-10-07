import React from 'react';
import {
  Sparkles,
  Flame,
  BadgePercent,
  Bike,
  ShoppingBag,
  Armchair,
  ShieldCheck,
} from 'lucide-react';
import { WHY_US_FEATURES } from '../data/restaurantData';

const iconMap = {
  Sparkles,
  Flame,
  BadgePercent,
  Bike,
  ShoppingBag,
  Armchair,
};

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="relative bg-[#161618] py-16 lg:py-24 border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-bold text-amber-300">
            <ShieldCheck className="h-3.5 w-3.5 text-red-400" />
            <span>معايير الجودة والطعم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            لماذا تختار بيتزا فطائر السلام؟
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            نهتم بأدق التفاصيل في العجين، الحشوات البلدية، وسرعة التوصيل لنقدم لك وجبة تفرحك وتثق فيها في كل مرة.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                {/* Index & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-950 to-zinc-900 border border-red-500/30 text-amber-400 group-hover:border-red-500/60 transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-600 group-hover:text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-black text-white">
              جاهز لتجربة الطعم الحقيقي؟
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              فرننا شغال 24 ساعة، اطلب الآن واستمتع ببيتزا وفطير بلدي سخن مولع.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#menu"
              className="rounded-xl bg-red-700 hover:bg-red-600 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all shadow-md shadow-red-950/40"
            >
              تصفح الأصناف
            </a>
            <a
              href="tel:01001539895"
              className="rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 px-5 py-3 text-xs sm:text-sm font-bold text-zinc-200 transition-all font-mono"
            >
              01001539895
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
