import React from 'react';
import { Star, Phone, ArrowDown, Sparkles, Clock, MapPin, Bike } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import heroImg from '../assets/images/hero_pizza_feteer_1791395325788.jpg';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#121212] pt-8 pb-16 lg:py-20 border-b border-zinc-800/80">
      {/* Background warm radial gradients for cozy street food ambiance */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-red-900/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-amber-600/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Content Column (7 cols on lg) */}
          <div className="text-right lg:col-span-7 space-y-6">
            
            {/* Trust Pill / Status line */}
            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1.5 text-xs text-amber-200">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold">مفتوح الآن على مدار 24 ساعة</span>
              <span className="text-red-400/80">·</span>
              <span className="text-zinc-300">أسرع دليفري في شبرا الخيمة</span>
            </div>

            {/* Restaurant Name Tag */}
            <div className="flex items-center gap-2 text-red-500 font-bold text-sm tracking-wide">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>مطعم</span>
              <span className="text-white text-base font-extrabold">{RESTAURANT_INFO.name}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight text-balance">
              بيتزا وفطائر طازة <br />
              <span className="bg-gradient-to-l from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                بطعم تحبه من أول لقمة
              </span>
            </h1>

            {/* Short Description */}
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300">
              عجينة مخدومة بالسمن البلدي والخميرة الطبيعية، وتتبيلات بلدي مميزة. نخبز طلبك طازة فور اتصاله في أفراننا الحجرية الساخنة—سواء كنت تفضل البيتزا الشرقية أو الإيطالية، أو الفطير المشلتت والحادق والحلو.
            </p>

            {/* Rating Display ⭐ 4.4 / 5 */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#18181b]/90 px-4 py-2.5 shadow-sm">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="text-lg font-black text-white tabular-nums">{RESTAURANT_INFO.rating}</span>
                  <span className="text-xs text-zinc-400">/ 5</span>
                </div>
                <span className="text-zinc-600">|</span>
                <span className="text-xs font-semibold text-zinc-300">
                  بناءً على <strong className="text-white font-bold">{RESTAURANT_INFO.reviewCount} تقييم</strong> في جوجل
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="h-4 w-4 text-red-500 shrink-0" />
                <span>الهجان، بهتيم، شبرا الخيمة</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary: اطلب الآن */}
              <button
                onClick={onOrderClick}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-600 px-7 py-3.5 text-base font-extrabold text-white shadow-lg shadow-red-900/40 hover:from-red-600 hover:to-red-500 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                <Bike className="h-5 w-5 text-amber-300" />
                <span>اطلب الآن</span>
              </button>

              {/* Secondary: شوف المنيو */}
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/90 px-6 py-3.5 text-base font-bold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <span>شوف المنيو</span>
                <ArrowDown className="h-4 w-4 text-zinc-400" />
              </a>

              {/* Call directly */}
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-600/30 bg-amber-950/20 px-5 py-3.5 text-sm font-bold text-amber-300 hover:bg-amber-950/40 transition-colors"
                title="اتصال هاتفي مباشر"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="font-mono tabular-nums">{RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-zinc-400 border-t border-zinc-800/80">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-red-500" /> مفتوح 24/7 دون توقف
              </span>
              <span className="flex items-center gap-1.5">
                <Bike className="h-4 w-4 text-amber-400" /> دليفري سخن وسريع
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-red-400" /> سمن بلدي وخامات طازجة
              </span>
            </div>

          </div>

          {/* Image Column (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Ring Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-red-600/30 to-amber-600/30 blur-lg" />
              
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img
                  src={heroImg}
                  alt="بيتزا وفطائر طازة من بيتزا فطائر السلام"
                  className="h-[360px] sm:h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Visual Gradient scrim */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between rounded-xl bg-black/75 p-3 backdrop-blur-md border border-zinc-700/60">
                  <div className="text-right">
                    <p className="text-xs font-semibold text-amber-400">مخبوز بلحظتها</p>
                    <p className="text-sm font-bold text-white">بيتزا وفطير مشلتت وحادق</p>
                  </div>
                  <div className="rounded-lg bg-red-700/90 px-3 py-1.5 text-xs font-extrabold text-white">
                    24 ساعة
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
