import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Phone,
  ShoppingBag,
  ArrowRight,
  Bike,
  Building,
  Check,
} from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generateWhatsAppMessage = () => {
    let msg = `🍕 *طلب جديد من موقع بيتزا فطائر السلام*\n\n`;
    msg += `👤 *العميل:* ${customerName.trim() || 'زبون عبر الموقع'}\n`;
    if (customerPhone.trim()) {
      msg += `📞 *الهاتف:* ${customerPhone.trim()}\n`;
    }
    msg += `🛵 *نوع الطلب:* ${orderType === 'delivery' ? 'توصيل للمنزل (دليفري)' : 'استلام من المطعم (سفري)'}\n`;
    if (orderType === 'delivery' && deliveryAddress.trim()) {
      msg += `📍 *العنوان بالتفصيل:* ${deliveryAddress.trim()}\n`;
    }
    msg += `\n📋 *تفاصيل الطلب:*\n`;

    cart.forEach((item, index) => {
      msg += `${index + 1}. ${item.name}`;
      if (item.selectedSize) {
        msg += ` (${item.selectedSize})`;
      }
      msg += ` × ${item.quantity} = ${item.price * item.quantity} ج.م\n`;
      if (item.notes) {
        msg += `   └ ملاحظات: ${item.notes}\n`;
      }
    });

    msg += `\n💰 *الإجمالي المطلوب:* ${totalAmount} ج.م\n`;
    if (generalNotes.trim()) {
      msg += `\n✍️ *ملاحظات إضافية:* ${generalNotes.trim()}\n`;
    }
    msg += `\nيرجى تأكيد استلام الطلب والوقت المتوقع للتجهيز. شكراً لكم!`;

    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappPhone}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#161618] border-r border-zinc-800 text-right flex flex-col shadow-2xl animate-in slide-in-from-left duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 p-5 bg-[#121212]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-amber-400" />
              <h2 className="text-lg font-black text-white">سلة الطلبات</h2>
              <span className="rounded-full bg-red-700/80 px-2 py-0.5 text-xs font-bold text-white font-mono">
                {cart.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="إغلاق السلة"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-500">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <p className="text-base font-bold text-white">السلة فارغة حالياً</p>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  تصفح المنيو واختر البيتزا أو الفطائر المحببة إليك وسنقوم بتجهيزها طازجة فوراً.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 rounded-xl bg-red-700 px-5 py-2 text-xs font-bold text-white hover:bg-red-600"
                >
                  العودة للمنيو
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 text-xs text-zinc-400">
                  <span>الأصناف المحددة</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-400 hover:text-red-300 font-medium"
                  >
                    تفريغ السلة
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 p-3.5 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover shrink-0 border border-zinc-800"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">
                          {item.name}
                        </h4>
                        {item.selectedSize && (
                          <span className="text-[11px] text-amber-400 font-semibold block">
                            الحجم: {item.selectedSize}
                          </span>
                        )}
                        {item.notes && (
                          <p className="text-[11px] text-zinc-400 italic truncate">
                            ملاحظة: {item.notes}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-zinc-800/60">
                          <span className="text-xs font-black text-white font-mono tabular-nums">
                            {item.price * item.quantity} ج.م
                          </span>

                          {/* Stepper */}
                          <div className="flex items-center gap-1.5 bg-zinc-800/80 rounded-lg p-0.5 border border-zinc-700/60">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:text-red-400 text-zinc-300"
                              aria-label="تقليل الكمية"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-5 text-center text-xs font-bold text-white font-mono">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:text-emerald-400 text-zinc-300"
                              aria-label="زيادة الكمية"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-zinc-500 hover:text-red-400"
                        title="حذف الصنف"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-4 border-t border-zinc-800">
                  <span className="text-xs font-bold text-white block">
                    بيانات الاستلام والتوصيل:
                  </span>

                  {/* Order Type Toggle */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`flex items-center justify-center gap-1.5 rounded-xl py-2 px-3 text-xs font-bold transition-colors ${
                        orderType === 'delivery'
                          ? 'bg-red-700 text-white shadow-sm'
                          : 'border border-zinc-800 bg-zinc-900 text-zinc-300'
                      }`}
                    >
                      <Bike className="h-3.5 w-3.5" />
                      <span>توصيل للمنزل</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`flex items-center justify-center gap-1.5 rounded-xl py-2 px-3 text-xs font-bold transition-colors ${
                        orderType === 'takeaway'
                          ? 'bg-red-700 text-white shadow-sm'
                          : 'border border-zinc-800 bg-zinc-900 text-zinc-300'
                      }`}
                    >
                      <Building className="h-3.5 w-3.5" />
                      <span>استلام سفري</span>
                    </button>
                  </div>

                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="اسم العميل (اختياري)"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none"
                  />

                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="رقم هاتفك للتواصل والتأكيد"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none font-mono"
                  />

                  {orderType === 'delivery' && (
                    <textarea
                      rows={2}
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="عنوان التوصيل بالتفصيل (الشارع، رقم العمارة، علامة مميزة في بهتيم)..."
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none resize-none"
                    />
                  )}

                  <input
                    type="text"
                    value={generalNotes}
                    onChange={(e) => setGeneralNotes(e.target.value)}
                    placeholder="أي ملاحظات خاصة للفرن أو الشيف..."
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Actions */}
          {cart.length > 0 && (
            <div className="border-t border-zinc-800 bg-[#121212] p-5 space-y-3">
              {/* Total breakdown */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-300">الإجمالي النهائي:</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white font-mono tabular-nums">
                    {totalAmount}
                  </span>
                  <span className="text-xs font-bold text-amber-400">ج.م</span>
                </div>
              </div>

              {/* Primary Action 1: Send via WhatsApp */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-950/50 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                <span>إرسال الطلب عبر واتساب (فوري)</span>
              </button>

              {/* Action 2: Call directly */}
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-red-600/40 bg-zinc-900 hover:bg-zinc-800 py-3 text-xs font-bold text-zinc-200 transition-colors"
              >
                <Phone className="h-4 w-4 text-red-500" />
                <span>أو اطلب هاتفياً الآن: {RESTAURANT_INFO.phone}</span>
              </a>

              <p className="text-[11px] text-zinc-500 text-center">
                الدفع عند الاستلام (كاش أو إنستاباي أو محفظة إلكترونية)
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
