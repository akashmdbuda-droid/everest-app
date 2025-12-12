import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Leaf, Flame } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  is_vegetarian: boolean;
  is_vegan: boolean;
  is_spicy: boolean;
  image_url: string | null;
  category_id: string;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string | null;
  menu_items?: MenuItem[];
}

export default function Menu() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('menu_categories')
          .select('*')
          .order('display_order');

        if (categoriesError) throw categoriesError;

        const { data: itemsData, error: itemsError } = await supabase
          .from('menu_items')
          .select('*')
          .order('display_order');

        if (itemsError) throw itemsError;

        const categorizedMenu = (categoriesData || []).map((cat) => ({
          ...cat,
          menu_items: (itemsData || []).filter((item) => item.category_id === cat.id),
        }));

        setCategories(categorizedMenu);
        if (categorizedMenu.length > 0) {
          setSelectedCategory(categorizedMenu[0].id);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <p>Loading menu...</p>
        </div>
      </section>
    );
  }

  const activeCategory = categories.find((cat) => cat.id === selectedCategory);
  const displayItems = activeCategory?.menu_items || [];

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600">
            Discover the flavors of the Himalayas
          </p>
        </div>

        {categories.length > 0 && (
          <>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'text-white'
                      : 'bg-white border-2 text-gray-700'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === cat.id ? '#E67E22' : 'white',
                    borderColor: selectedCategory === cat.id ? '#E67E22' : '#DDD',
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayItems.map((item) => (
                <div key={item.id} className="card overflow-hidden">
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-800">
                        {item.name}
                      </h4>
                      <span className="text-xl font-bold" style={{ color: '#E67E22' }}>
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>

                    <div className="flex gap-3">
                      {item.is_vegan && (
                        <span
                          className="text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold"
                          style={{ backgroundColor: '#E8F5E9', color: '#27AE60' }}
                        >
                          <Leaf size={14} /> Vegan
                        </span>
                      )}
                      {item.is_vegetarian && !item.is_vegan && (
                        <span
                          className="text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold"
                          style={{ backgroundColor: '#E8F5E9', color: '#27AE60' }}
                        >
                          <Leaf size={14} /> Vegetarian
                        </span>
                      )}
                      {item.is_spicy && (
                        <span
                          className="text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold"
                          style={{ backgroundColor: '#FFEBEE', color: '#E67E22' }}
                        >
                          <Flame size={14} /> Spicy
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {categories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Menu items coming soon. Check back later!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
