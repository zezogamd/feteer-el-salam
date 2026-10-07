import React from 'react';
import { Flame, CheckCircle2, ShoppingBag, ArrowLeft, Clock } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface OffersSectionProps {
  onAddOfferToCart: (item: MenuItem) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onAddOfferToCart }) => {
  const handleOrderOffer = (offer: typeof SPECIAL_OFFERS[0]) => {
    // Construct a MenuItem representation for the cart
    const offerMenuItem: MenuItem = {
      id: offer.id,
      name: offer.title,
      category: 'offers',
      description: offer.description,
      price: offer.price,
      originalPrice: offer.originalPrice,
      image: offer.image,
      badge: 'عرض خاص',
    };
    onAddOfferToCart(offerMenuItem);
  };

  return (
    <section id="offers" className="relative bg-[#121212] py-16 lg:py-24 border-b border-zinc-800">
      {/* Visual background ambient accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red-950/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="text-right space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-3.5 py-1 text-xs font-bold text-amber-300">
              <Flame className="h-4 w-4 text-amber-400 fill-amber-400" />
              <span>أقوى عروض التوفير</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              عروض حصرية تملى العين وتوفر في الجيب
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              وجبات توفير متكاملة ومجموعات مصممة للمة الصحاب والعيلة بأفضل أسعار وجودة في بهتيم.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 shrink-0">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>تحديث يومي للعروض</span>
          </div>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SPECIAL_OFFERS.map((offer, idx) => {
            const savings = offer.originalPrice - offer.price;
            const isFeatured = idx === 0;

            return (
              <div
                key={offer.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/30 ${
                  isFeatured
                    ? 'border-red-600/80 bg-gradient-to-b from-zinc-900 to-[#18181b] ring-1 ring-red-500/30'
                    : 'border-zinc-800 bg-zinc-900/80'
                }`}
              >
                {/* Visual Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/60" />

                  {/* Savings Ribbon */}
                  <div className="absolute top-3 right-3 rounded-xl bg-amber-400 px-3 py-1 text-xs font-black text-black shadow-md">
                    وفر {savings} ج.م
                  </div>

                  {offer.expiresIn && (
                    <div className="absolute bottom-3 right-3 text-[11px] font-bold text-amber-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {offer.expiresIn}
                    </div>
                  )}
                </div>

                {/* Offer Details */}
                <div className="p-6 space-y-4 flex-1">
                  <div>
                    <span className="text-xs font-bold text-red-400 block mb-1">
                      {offer.tagline}
                    </span>
                    <h3 className="text-xl font-black text-white">
                      {offer.title}
                    </h3>
                  </div>

                  <p className="text-xs leading-relaxed text-zinc-300">
                    {offer.description}
                  </p>

                  {/* Included items checkmark list */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                    <span className="text-[11px] font-semibold text-zinc-400 block">
                      محتويات العرض:
                    </span>
                    <ul className="space-y-1.5">
                      {offer.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="p-6 pt-0 border-t border-zinc-800/60 mt-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-zinc-400 block">سعر العرض</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-black text-white font-mono tabular-nums">
                        {offer.price}
                      </span>
                      <span className="text-xs font-bold text-amber-400">ج.م</span>
                      <span className="text-xs text-zinc-500 line-through font-mono">
                        {offer.originalPrice} ج.م
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOrderOffer(offer)}
                    className="flex items-center gap-2 rounded-xl bg-red-700 hover:bg-red-600 active:scale-95 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-red-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>اطلب العرض</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
