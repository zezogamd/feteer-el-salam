import React, { useState } from 'react';
import { X, Plus, Minus, MessageCircle, Phone, ShoppingBag, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface QuickOrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, selectedSize?: string, notes?: string, quantity?: number) => void;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    item.sizes && item.sizes.length > 0 ? item.sizes[0].name : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const currentPrice = item.sizes && selectedSize
    ? item.sizes.find((s) => s.name === selectedSize)?.price || item.price
    : item.price;

  const total = currentPrice * quantity;

  const handleAdd = () => {
    onAddToCart(item, selectedSize || undefined, notes.trim() || undefined, quantity);
    onClose();
  };

  const handleInstantWhatsApp = () => {
    let msg = `🍕 *طلب فوري من موقع بيتزا فطائر السلام*\n\n`;
    msg += `الصنف: *${item.name}*\n`;
    if (selectedSize) {
      msg += `الحجم: *${selectedSize}*\n`;
    }
    msg += `الكمية: *${quantity}*\n`;
    msg += `السعر الإجمالي: *${total} ج.م*\n`;
    if (notes.trim()) {
      msg += `ملاحظات: ${notes.trim()}\n`;
    }
    msg += `\nيرجى تأكيد التوصيل والعنوان. شكراً!`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-800 bg-[#161618] text-right shadow-2xl animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 rounded-full bg-black/60 p-2 text-zinc-300 hover:text-white backdrop-blur-sm"
          aria-label="إغلاق"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-48 sm:h-56 w-full bg-zinc-950">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-400 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>مخبوز طازج حسب طلبك</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Sizes */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-zinc-300 block">اختر الحجم:</span>
              <div className="grid grid-cols-3 gap-2">
                {item.sizes.map((sz) => (
                  <button
                    key={sz.name}
                    type="button"
                    onClick={() => setSelectedSize(sz.name)}
                    className={`rounded-xl py-2.5 px-3 text-xs font-bold transition-all text-center ${
                      selectedSize === sz.name
                        ? 'bg-amber-400 text-black shadow-md'
                        : 'border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <div>{sz.name}</div>
                    <div className="text-[11px] font-mono mt-0.5">{sz.price} ج.م</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-bold text-zinc-300">الكمية المطلوبة:</span>
            <div className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-1.5">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-zinc-400 hover:text-white p-1"
                aria-label="إنقاص"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-base font-black text-white font-mono w-6 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="text-zinc-400 hover:text-white p-1"
                aria-label="زيادة"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Custom Notes */}
          <div>
            <label className="text-xs font-bold text-zinc-300 block mb-1.5">
              ملاحظات إضافية (اختياري):
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="مثال: بدون فلفل حار، زيادة كاتشب، تسوية مقرمشة..."
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none"
            />
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="w-full sm:w-auto text-right">
              <span className="text-[11px] text-zinc-400 block">الإجمالي:</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white font-mono">{total}</span>
                <span className="text-xs font-bold text-amber-400">ج.م</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleInstantWhatsApp}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 text-xs font-bold transition-colors"
                title="طلب فوري عبر واتساب"
              >
                <MessageCircle className="h-4 w-4" />
                <span>واتساب فوري</span>
              </button>

              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-xl bg-red-700 hover:bg-red-600 text-white px-5 py-3 text-xs font-bold transition-colors shadow-md shadow-red-950/40"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>إضافة للطلب</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
