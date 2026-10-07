import React from 'react';
import {
  Flame,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Heart,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0c0c0d] border-t border-zinc-800/80 text-zinc-400 pt-16 pb-24 md:pb-16 text-right">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 text-white shadow-md">
                <Flame className="h-5 w-5 text-amber-300" />
              </div>
              <span className="text-xl font-black text-white">
                {RESTAURANT_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
              {RESTAURANT_INFO.tagline}. نعتز بتقديم أجود أنواع البيتزا الشرقية والإيطالية والفطائر المشلتت والحاتي بخامات طازجة وعجين مخبوز لحظة طلبك.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-400">
              ⭐ تقييم 4.4 من 5 بناءً على 29 تقييم حقيقي في جوجل
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white">روابط سريعة</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  المنيو الكامل والأسعار
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-amber-400 transition-colors">
                  العروض الخاصة والتوفير
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  لماذا بيتزا فطائر السلام؟
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  آراء وتجارب الزبائن
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  الموقع وخريطة جوجل
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white">بيانات التواصل</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="font-mono hover:text-white font-bold"
                >
                  {RESTAURANT_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{RESTAURANT_INFO.openingHours}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-emerald-950/80 border border-emerald-700/60 px-3 py-1.5 text-xs font-bold text-emerald-300 hover:bg-emerald-900 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>واتساب مباشر</span>
              </a>
              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-1.5 text-xs font-bold text-zinc-200 hover:bg-zinc-700 transition-colors"
              >
                <Navigation className="h-3.5 w-3.5 text-amber-400" />
                <span>الاتجاهات</span>
              </a>
            </div>
          </div>

          {/* Col 4: Services & Guarantee */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white">خدماتنا المتاحة</h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>خدمة التوصيل السريع للمنازل والمحلات</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>طعام سفري وتجهيز مسبق عبر الهاتف</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>صالة جلوس مكيفة ومريحة</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>استعداد تام للعزومات وأعياد الميلاد والمناسبات</span>
              </li>
            </ul>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-xs text-zinc-400">
              طرق الدفع المتاحة: كاش عند الاستلام، إنستاباي، فودافون كاش ومحافظ إلكترونية.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} مطعم {RESTAURANT_INFO.name}. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            صُنع بحب لأهالي بهتيم وشبرا الخيمة
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
