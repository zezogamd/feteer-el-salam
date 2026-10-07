/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInfoBar } from './components/QuickInfoBar';
import { MenuSection } from './components/MenuSection';
import { OffersSection } from './components/OffersSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickOrderModal } from './components/QuickOrderModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CartItem, MenuItem } from './types';
import { CheckCircle2 } from 'lucide-react';

const CART_STORAGE_KEY = 'el_salam_pizza_cart';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (
    item: MenuItem,
    selectedSize?: string,
    notes?: string,
    quantity: number = 1
  ) => {
    const calculatedPrice = item.sizes && selectedSize
      ? item.sizes.find((s) => s.name === selectedSize)?.price || item.price
      : item.price;

    const cartItemId = `${item.id}-${selectedSize || 'default'}-${notes || 'none'}`;

    setCart((prev) => {
      const existing = prev.find((ci) => ci.id === cartItemId);
      if (existing) {
        return prev.map((ci) =>
          ci.id === cartItemId
            ? { ...ci, quantity: ci.quantity + quantity }
            : ci
        );
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            menuItemId: item.id,
            name: item.name,
            selectedSize,
            price: calculatedPrice,
            quantity,
            notes,
            image: item.image,
          },
        ];
      }
    });

    showToast(`تمت إضافة "${item.name}" إلى طلبك`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#121212] text-[#F8F6F0] flex flex-col font-['Cairo',sans-serif] selection:bg-red-800 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <CheckCircle2 className="h-4 w-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onQuickOrder={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOrderClick={() => setIsCartOpen(true)} />

        {/* 2. Quick Info Bar */}
        <QuickInfoBar />

        {/* 3. Menu Section */}
        <MenuSection
          onAddToCart={(item, size) => handleAddToCart(item, size)}
          onOpenQuickOrder={(item) => setCustomizingItem(item)}
        />

        {/* 4. Special Offers Section */}
        <OffersSection
          onAddOfferToCart={(item) => handleAddToCart(item)}
        />

        {/* 5. Why Choose Us Section */}
        <WhyUsSection />

        {/* 6. Customer Reviews Section */}
        <ReviewsSection />

        {/* 7 & 8. Location & Contact Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar (<15% viewport height) */}
      <MobileStickyBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Item Customization / Quick Order Modal */}
      <QuickOrderModal
        item={customizingItem}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
