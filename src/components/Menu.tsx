import { useState } from 'react';
import { Leaf, Flame } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import clsx from 'clsx';
import { MENU_DATA } from '../data/menu';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>(MENU_DATA[0]?.id || '');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const categories = MENU_DATA;
  const activeCategory = categories.find((cat) => cat.id === selectedCategory);
  const displayItems = activeCategory?.items || [];

  const toggleItemDescription = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <SectionWrapper id="menu" className="bg-white relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4 text-primary">Our Menu</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-serif italic">
            Discover the flavors of the Himalayas
          </p>
        </div>

        {categories.length > 0 && (
          <>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={clsx(
                    "px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-transparent",
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-cream text-gray-600 hover:text-primary hover:border-primary/40'
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {displayItems.map((item) => {
                const isExpanded = expandedItems.has(item.id);

                return (
                  <div key={item.id} className="rounded-lg p-6 group hover:scale-[1.02] duration-500 overflow-hidden bg-cream/50 hover:bg-cream transition-colors">
                    <div className="relative overflow-hidden h-56 mb-6 rounded-lg">
                      <img
                        src={item.image_url || "/images/samosa.png"}
                        alt={item.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/samosa.png";
                          target.onerror = null; // Prevent infinite loop
                        }}
                      />
                      {/* Number Badge Overlay - Clickable */}
                      <button
                        onClick={() => toggleItemDescription(item.id)}
                        className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                        aria-label={`Toggle description for ${item.name}`}
                      >
                        <span className="text-2xl sm:text-3xl font-bold text-primary hover:text-white transition-colors">{item.number}</span>
                      </button>
                    </div>

                    <div>
                      <h4 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">
                        {item.name}
                      </h4>

                      <div className="flex justify-between items-baseline mb-3 border-b border-dashed border-gray-300 pb-3">
                        <span className="text-base sm:text-lg font-bold text-secondary">
                          {item.price} Ft
                        </span>
                      </div>

                      {/* Expandable Description */}
                      <div
                        className={clsx(
                          "transition-all duration-300 overflow-hidden",
                          isExpanded ? "max-h-96 opacity-100 mb-3" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {item.is_vegan && (
                          <span className="text-[10px] px-2 py-1 bg-green-100 text-green-700 border border-green-200 rounded uppercase tracking-wider font-bold flex items-center gap-1">
                            <Leaf size={10} /> Vegan
                          </span>
                        )}
                        {item.is_vegetarian && !item.is_vegan && (
                          <span className="text-[10px] px-2 py-1 bg-green-100 text-green-700 border border-green-200 rounded uppercase tracking-wider font-bold flex items-center gap-1">
                            <Leaf size={10} /> Veg
                          </span>
                        )}
                        {item.is_spicy && (
                          <span className="text-[10px] px-2 py-1 bg-red-100 text-red-700 border border-red-200 rounded uppercase tracking-wider font-bold flex items-center gap-1">
                            <Flame size={10} /> Spicy
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
