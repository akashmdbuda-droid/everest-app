import { useState } from 'react';
import { Leaf, Flame, Info, Menu as MenuIcon, X } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import clsx from 'clsx';
import { MENU_DATA, MenuItem } from '../data/menu';
import Modal from './ui/Modal';
import { AnimatePresence, motion } from 'framer-motion';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>(MENU_DATA[0]?.id || '');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = MENU_DATA;
  const activeCategory = categories.find((cat) => cat.id === selectedCategory);
  const displayItems = activeCategory?.items || [];

  const handleCloseModal = () => setSelectedItem(null);

  // Helper to extract allergens from description
  const getAllergens = (description: string) => {
    const match = description.match(/\(Contains ([^)]+)\)/i);
    return match ? match[1].split(',').map(a => a.trim()) : [];
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsMobileMenuOpen(false);
    // Optional: scroll to top of menu if needed, but switching content is usually enough
  };

  return (
    <SectionWrapper id="menu" className="bg-white relative overflow-hidden">
      <div className="container-max relative z-10 pb-20 md:pb-0">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-heading mb-4 text-primary">Our Menu</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-serif italic">
            Discover the flavors of the Himalayas
          </p>
        </div>

        {categories.length > 0 && (
          <>
            {/* Desktop Category Navigation */}
            <div className="hidden md:flex flex-wrap gap-4 justify-center mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={clsx(
                    "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-transparent",
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-cream text-gray-600 hover:text-primary hover:border-primary/40'
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Mobile Category Trigger Button */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="bg-primary text-white shadow-2xl flex items-center gap-3 rounded-full px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                <MenuIcon size={20} />
                <span className="font-bold uppercase tracking-widest text-sm">Browse Menu</span>
              </button>
            </div>

            {/* Mobile Category Overlay */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: '100%' }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-0 z-[60] bg-white flex flex-col pt-12 px-6 pb-6"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-serif font-bold text-primary">Menu Categories</h3>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-primary transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={clsx(
                          "w-full text-left p-4 rounded-xl transition-all duration-200 flex justify-between items-center group",
                          selectedCategory === cat.id
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-gray-50 text-gray-600 hover:bg-cream'
                        )}
                      >
                        <span className="font-bold text-lg">{cat.name}</span>
                        {selectedCategory === cat.id && <div className="w-2 h-2 bg-white rounded-full" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Legends */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12 text-xs text-gray-500 font-medium px-4">
              <span className="flex items-center gap-1"><Leaf size={14} className="text-green-600" /> Vegetarian/Vegan</span>
              <span className="flex items-center gap-1"><Flame size={14} className="text-red-500" /> Spicy</span>
              <span className="flex items-center gap-1"><Info size={14} className="text-blue-500" /> Click 'View Details' for Allergens</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {displayItems.map((item) => (
                <div key={item.id} className="rounded-lg p-6 group hover:scale-[1.02] duration-500 overflow-hidden bg-cream/50 hover:bg-cream transition-colors flex flex-col h-full">
                  <div className="relative overflow-hidden h-56 mb-6 rounded-lg shrink-0">
                    <img
                      src={item.image_url || "/images/samosa.png"}
                      alt={item.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/samosa.png";
                        target.onerror = null;
                      }}
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-md">
                      <span className="text-lg font-bold text-primary">{item.number}</span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-serif font-bold text-primary">{item.name}</h4>
                      <span className="text-lg font-bold text-secondary whitespace-nowrap ml-4">{item.price} Ft</span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed font-light mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-2">
                        {(item.is_vegetarian || item.is_vegan) && <Leaf size={16} className="text-green-600" />}
                        {item.is_spicy && <Flame size={16} className="text-red-500" />}
                      </div>
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-1"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Modal isOpen={!!selectedItem} onClose={handleCloseModal} title={selectedItem?.name}>
        {selectedItem && (
          <div className="space-y-6">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
              <img
                src={selectedItem.image_url || "/images/samosa.png"}
                alt={selectedItem.name}
                className="h-full w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/samosa.png";
                  target.onerror = null;
                }}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold text-secondary">{selectedItem.price} Ft</span>
                <div className="flex gap-2">
                  {selectedItem.is_vegan && (
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 border border-green-200 rounded uppercase font-bold flex items-center gap-1">
                      <Leaf size={12} /> Vegan
                    </span>
                  )}
                  {selectedItem.is_vegetarian && !selectedItem.is_vegan && (
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 border border-green-200 rounded uppercase font-bold flex items-center gap-1">
                      <Leaf size={12} /> Vegetarian
                    </span>
                  )}
                  {selectedItem.is_spicy && (
                    <span className="text-xs px-2 py-1 bg-red-100 text-red-700 border border-red-200 rounded uppercase font-bold flex items-center gap-1">
                      <Flame size={12} /> Spicy
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{selectedItem.description}</p>
            </div>

            {getAllergens(selectedItem.description).length > 0 && (
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                  <Info size={16} /> Allergens
                </h4>
                <div className="flex flex-wrap gap-2">
                  {getAllergens(selectedItem.description).map((allergen, index) => (
                    <span key={index} className="px-3 py-1 bg-white text-orange-700 text-sm font-medium rounded-md shadow-sm border border-orange-100">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </SectionWrapper>
  );
}
