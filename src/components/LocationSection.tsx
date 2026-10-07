import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  Compass,
  Bike,
  Building,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodeURIComponent(
    'السلام عليكم، أريد الاستفسار عن المنيو والطلب من بيتزا فطائر السلام.'
  )}`;

  return (
    <section id="location" className="relative bg-[#161618] py-16 lg:py-24 border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-bold text-amber-300">
            <Compass className="h-3.5 w-3.5 text-amber-400" />
            <span>العنوان والوصول</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            موقع المطعم وساعات العمل
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            يسعدنا تشريفكم في صالتنا، أو تواصلوا معنا لطلب الدليفري السريع حتى باب بيتك.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details & Actions Card (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 sm:p-8 space-y-6 shadow-xl">
              
              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-950/80 border border-red-500/30 text-red-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-right space-y-1">
                  <span className="text-xs font-bold text-zinc-400 block">عنوان المطعم:</span>
                  <p className="text-base font-extrabold text-white leading-snug">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-zinc-400">
                    قريب من جميع المحاور الحيوية في شبرا الخيمة وبهتيم.
                  </p>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-4 pt-4 border-t border-zinc-800">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-950/80 border border-amber-500/30 text-amber-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-right space-y-1">
                  <span className="text-xs font-bold text-zinc-400 block">رقم الدليفري والحجز:</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-xl font-black font-mono text-white hover:text-amber-400 transition-colors inline-block tabular-nums"
                  >
                    {RESTAURANT_INFO.phoneFormatted}
                  </a>
                  <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    متاح للرد والطلبات على مدار الساعة
                  </p>
                </div>
              </div>

              {/* Operating hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-zinc-800">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="text-right space-y-1">
                  <span className="text-xs font-bold text-zinc-400 block">مواعيد العمل:</span>
                  <p className="text-sm font-bold text-white">
                    {RESTAURANT_INFO.openingHours}
                  </p>
                  <p className="text-xs text-zinc-400">
                    صالة - دليفري - سفري بدون إجازات
                  </p>
                </div>
              </div>

              {/* Delivery coverage */}
              <div className="flex items-start gap-4 pt-4 border-t border-zinc-800">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-950/80 border border-blue-500/30 text-blue-400">
                  <Bike className="h-5 w-5" />
                </div>
                <div className="text-right space-y-1">
                  <span className="text-xs font-bold text-zinc-400 block">نطاق التوصيل:</span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    بهتيم، منطقة الهجان، مسطرد، مجمع المدارس، وأرجاء قسم ثان شبرا الخيمة.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Call */}
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 active:scale-95 py-3.5 px-4 text-xs sm:text-sm font-black text-white shadow-md shadow-red-950/40 transition-all text-center"
              >
                <Phone className="h-4 w-4" />
                <span>اتصل الآن</span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 active:scale-95 py-3.5 px-4 text-xs sm:text-sm font-black text-white shadow-md shadow-emerald-950/40 transition-all text-center"
              >
                <MessageCircle className="h-4 w-4" />
                <span>واتساب</span>
              </a>

              {/* Directions */}
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 active:scale-95 py-3.5 px-4 text-xs sm:text-sm font-black text-zinc-100 transition-all text-center"
              >
                <Navigation className="h-4 w-4 text-amber-400" />
                <span>الاتجاهات</span>
              </a>
            </div>

          </div>

          {/* Embedded Map Column (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
              
              {/* Map Top Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 bg-[#121212] px-5 py-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>موقع المطعم على خرائط Google</span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>فتح في تطبيق الخرائط</span>
                  <Navigation className="h-3 w-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative h-[380px] sm:h-[450px] w-full bg-zinc-950">
                <iframe
                  title="موقع بيتزا فطائر السلام على خرائط جوجل"
                  src={RESTAURANT_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-85 hover:opacity-100 transition-opacity"
                />

                {/* Floating Map Pin Card */}
                <div className="absolute top-4 right-4 rounded-xl border border-zinc-700/80 bg-black/85 p-3 backdrop-blur-md shadow-lg text-right max-w-xs">
                  <p className="text-xs font-black text-amber-400 mb-0.5">بيتزا فطائر السلام</p>
                  <p className="text-[11px] text-zinc-300">الهجان، بهتيم، شبرا الخيمة</p>
                  <a
                    href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-red-700 px-3 py-1 text-[11px] font-bold text-white hover:bg-red-600 transition-colors"
                  >
                    <Navigation className="h-3 w-3" />
                    احصل على الاتجاهات
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
