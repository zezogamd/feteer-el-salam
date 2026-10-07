import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import { CategoryId, MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, selectedSize?: string, notes?: string) => void;
  onOpenQuickOrder: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenQuickOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState<{ [key: string]: boolean }>({});
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectSize = (itemId: string, sizeName: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemId]: sizeName,
    }));
  };

  const handleAdd = (item: MenuItem) => {
    const chosenSize = selectedSizes[item.id] || (item.sizes ? item.sizes[0].name : undefined);
    onAddToCart(item, chosenSize);

    // Visual feedback
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="relative bg-[#141416] py-16 lg:py-24 border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-bold text-amber-300">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>منيو بيتزا وفطائر السلام</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            منيو شهي يجمع كل الأذواق
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            اكتشف تشكيلة البيتزا الإيطالية والشرقية الغنية بالجبنة، والفطير المشلتت بالسمن البلدي الفلاحي، والساندوتشات السريعة والعروض الخاصة.
          </p>
        </div>

        {/* Controls: Search and Categories */}
        <div className="mb-10 space-y-5">
          {/* Search bar */}
          <div className="relative mx-auto max-w-md">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-zinc-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن بيتزا، فطيرة، ساندوتش..."
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/90 py-3 pr-11 pl-4 text-sm text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-xs text-zinc-400 hover:text-white"
              >
                مسح
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as CategoryId)}
                  className={`rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
                    isActive
                      ? 'bg-red-700 text-white shadow-md shadow-red-950/50'
                      : 'border border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 p-12 text-center">
            <p className="text-base text-zinc-400">لا توجد أصناف مطابقة لبحثك "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 rounded-lg bg-zinc-800 px-4 py-2 text-xs font-bold text-white hover:bg-zinc-700"
            >
              عرض كل الأصناف
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds[item.id];
              const selectedSizeName =
                selectedSizes[item.id] || (item.sizes ? item.sizes[0].name : undefined);
              const currentPrice = item.sizes
                ? item.sizes.find((s) => s.name === selectedSizeName)?.price || item.price
                : item.price;

              return (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/70 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/50"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-950">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                      
                      {/* Badge if present */}
                      {item.badge && (
                        <span className="absolute top-3 right-3 rounded-lg bg-red-700/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-black text-white shadow-sm">
                          {item.badge}
                        </span>
                      )}

                      {/* Original Price cut tag */}
                      {item.originalPrice && (
                        <span className="absolute top-3 left-3 rounded-lg bg-amber-500/90 px-2.5 py-1 text-[11px] font-black text-black">
                          وفر {item.originalPrice - item.price} ج.م
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-xs leading-relaxed text-zinc-400 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Size Selector if available */}
                      {item.sizes && item.sizes.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[11px] font-semibold text-zinc-400 block">اختر الحجم:</span>
                          <div className="flex items-center gap-1.5">
                            {item.sizes.map((sz) => (
                              <button
                                key={sz.name}
                                type="button"
                                onClick={() => handleSelectSize(item.id, sz.name)}
                                className={`flex-1 rounded-lg py-1 px-2 text-[11px] font-bold transition-colors ${
                                  selectedSizeName === sz.name
                                    ? 'bg-amber-400 text-black shadow-sm'
                                    : 'border border-zinc-800 bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
                                }`}
                              >
                                {sz.name} ({sz.price} ج)
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Price & Order Action */}
                  <div className="p-5 pt-0 border-t border-zinc-800/60 mt-3 flex items-center justify-between gap-3">
                    <div className="text-right">
                      <span className="text-[11px] text-zinc-400 block">السعر</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-black text-white font-mono tabular-nums">
                          {currentPrice}
                        </span>
                        <span className="text-xs font-bold text-amber-400">ج.م</span>
                        {item.originalPrice && (
                          <span className="text-xs text-zinc-500 line-through mr-1 font-mono">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Details / Custom quick order */}
                      <button
                        type="button"
                        onClick={() => onOpenQuickOrder(item)}
                        className="rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs font-bold text-zinc-200 hover:bg-zinc-700 transition-colors"
                        title="طلب سريع مع تخصيص الملاحظات"
                      >
                        تخصيص
                      </button>

                      {/* Primary Order / Add */}
                      <button
                        type="button"
                        onClick={() => handleAdd(item)}
                        className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-red-700 text-white hover:bg-red-600 shadow-md shadow-red-950/40'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span>تمت الإضافة!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4" />
                            <span>اطلب الآن</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
