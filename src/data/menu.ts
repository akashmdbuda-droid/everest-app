export interface MenuItem {
    id: string;
    number: number;
    name: string;
    description: string;
    price: number;
    is_vegetarian: boolean;
    is_vegan: boolean;
    is_spicy: boolean;
    image_url: string | null;
    category_id: string;
}

export interface MenuCategory {
    id: string;
    name: string;
    description: string | null;
    items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
    {
        id: 'soups',
        name: 'Soups (Levesek)',
        description: 'Warm and comforting starters',
        items: [
            { id: 'chicken-soup', number: 1, name: 'Chicken Soup', description: 'Chicken soup with curry spice (without noodle) (Contains Gluten)', price: 2090, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: `${import.meta.env.BASE_URL}images/soups/chicken-soup.png`, category_id: 'soups' },
            { id: 'dal-soup', number: 2, name: 'Dal Soup', description: 'Curry based Lentil soup', price: 2090, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: `${import.meta.env.BASE_URL}images/soups/dal-soup.png`, category_id: 'soups' },
            { id: 'tomato-soup', number: 3, name: 'Tomato Soup', description: 'Spicy indian Tomato soup (without noodle) (Contains Gluten, Dairy)', price: 2090, is_vegetarian: true, is_vegan: false, is_spicy: true, image_url: `${import.meta.env.BASE_URL}images/soups/tomato-soup.png`, category_id: 'soups' },
            { id: 'garlic-soup', number: 4, name: 'Garlic Soup', description: 'Garlic soup with curry spice (Contains Gluten)', price: 2090, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: `${import.meta.env.BASE_URL}images/soups/garlic-soup.png`, category_id: 'soups' }
        ]
    },
    {
        id: 'starters',
        name: 'Appetizers (Előételek)',
        description: 'Crispy and savory appetizers',
        items: [
            { id: 'mixed-veg-pakora', number: 5, name: 'Mixed Veg. Pakora', description: 'Mixed vegetables fried in chickpea-flour batter. Served with minty yoghurt, and tamarind sauces', price: 2450, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'starters' },
            { id: 'royal-pakora', number: 6, name: 'Royal Pakora', description: 'Mixed vegetables fried in chickpea-flour batter (big portion)', price: 2750, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'starters' },
            { id: 'samosa', number: 7, name: 'Samosa', description: 'Traditional indian puff pastry, filled with cooked potato and green pea. Served with minty yoghurt, and tamarind sauces. (Contains Gluten)', price: 1590, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'starters' },
            { id: 'paneer-pakora', number: 8, name: 'Paneer Pakora', description: 'Indian cheese, fried in chickpea-flour batter', price: 1590, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'starters' },
            { id: 'chicken-pakora', number: 9, name: 'Chicken Pakora', description: 'Fried chicken breast, in chickpea-flour batter', price: 1990, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'starters' },
            { id: 'papaddum', number: 10, name: 'Papaddum', description: 'Thin, crispy snack', price: 1000, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'starters' }
        ]
    },
    {
        id: 'vegetarian-dishes',
        name: 'Vegetarian Mains (Vega Főételek)',
        description: 'Meat-free delights',
        items: [
            { id: 'mixed-vegetable-sabji', number: 11, name: 'Mixed vegetable sabji', description: 'Mixed vegetable pieces in spicy sauce (Contains Gluten)', price: 3020, is_vegetarian: true, is_vegan: true, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'aloo-gobi', number: 12, name: 'Aloo gobi', description: 'Cauliflower, cooked with potato, and cumin, in a light gravy (Contains Dairy)', price: 3020, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'baigan-bhartha', number: 13, name: 'Baigan bhartha', description: 'Oven-baked aubergine in spicy sauce (Contains Dairy)', price: 3020, is_vegetarian: true, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'kadai-veg', number: 14, name: 'Kadai veg', description: 'Pan-fried vegetables in spicy sauce (Contains Dairy)', price: 3030, is_vegetarian: true, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'palak-paneer', number: 15, name: 'Palak paneer', description: 'Spicy indian cheese cubes, in spinach curry (Contains Gluten, Dairy)', price: 3010, is_vegetarian: true, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'paneer-butter-masala', number: 16, name: 'Paneer butter masala', description: 'Indian cheese cubes, in buttery-tomato sauce (Contains Dairy)', price: 3790, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'paneer-tikka-masala', number: 17, name: 'Paneer tikka masala', description: 'Oven-baked, marinated indian cheese cubes, in tomato sauce (Contains Dairy)', price: 3790, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'navrattan-paneer', number: 18, name: 'Navrattan paneer', description: 'Indian cheese cubes in cashew sauce, garnished with dried fruits (Contains Dairy)', price: 4090, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'shahi-paneer', number: 19, name: 'Shahi paneer', description: 'Indian cheese cubes, cooked in creamy aromatic tomato sauce (Contains Dairy)', price: 3790, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'dal-makhni', number: 20, name: 'Dal makhni', description: 'Slow cooked black lentil creamy stew (Contains Dairy)', price: 3290, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'dal-tadka', number: 21, name: 'Dal tadka', description: 'Creamy yellow lentil dish, in traditional Punjabi style (Contains Dairy)', price: 3020, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'dal-fry', number: 22, name: 'Dal Fry', description: 'Spicy lentil, in Punjabi Dhaba style', price: 3500, is_vegetarian: true, is_vegan: true, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'punjabi-chole', number: 23, name: 'Punjabi chole', description: 'Chickpea in Punjabi tomato sauce (Contains Dairy)', price: 3010, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'everest-veg-thaly', number: 24, name: 'Everest Veg. thaly', description: 'Vegetarian platter: indian cheese cubes, lentil, raita, naan, rice, dessert (Contains Gluten, Dairy)', price: 4500, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'veg-jalfrezi', number: 25, name: 'Veg jalfrezi', description: 'Mixed vegetables, green chili, californian paprika, cooked in spicy sauce (Contains Dairy)', price: 3090, is_vegetarian: true, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'sarson-ka-saag', number: 26, name: 'Sarson ka saag', description: 'Traditional Punjabi green mustardleaf sauce (Contains Dairy)', price: 3090, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' },
            { id: 'matar-paneer', number: 27, name: 'Matar paneer', description: 'Punjabi cheese cubes with peas, in creamy tomato based curry sauce', price: 3020, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'vegetarian-dishes' }
        ]
    },
    {
        id: 'chicken-dishes',
        name: 'Chicken Dishes (Csirke Ételek)',
        description: 'Served with Basmati Rice',
        items: [
            { id: 'everest-chicken-thaly', number: 28, name: 'Everest Chicken thaly', description: 'Chicken platter: C. tikka masala, butter chicken, rice, naan, raita, dessert (Contains Gluten)', price: 6000, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'chicken-curry', number: 29, name: 'Chicken curry', description: 'Chicken breast cubes cooked in curry sauce (Contains Dairy)', price: 3290, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'chicken-korma', number: 30, name: 'Chicken korma', description: 'Chicken breast cubes, cooked in creamy yoghurt sauce with cashew and raisin (Contains Dairy)', price: 3790, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'chicken-jalfrezi', number: 31, name: 'Chicken jalfrezi', description: 'Tandoor-baked chicken breast, cooked with green chili (Contains Dairy)', price: 3790, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'chicken-tikka-masala', number: 32, name: 'Chicken tikka masala', description: 'Marinated chicken breast in spicy tomato sauce (Contains Dairy)', price: 3790, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'chicken-vindallo', number: 33, name: 'Chicken vindallo', description: 'Chicken breast, cooked in spicy southindian sauce (Contains Gluten, Dairy)', price: 3790, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'kadai-chicken', number: 34, name: 'Kadai chicken', description: 'Pan-fried chicken breast, in a thick, spicy tomato sauce (Contains Dairy)', price: 3790, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'butter-chicken', number: 35, name: 'Butter chicken', description: 'Chicken, cooked in buttery –tomato sauce (Contains Dairy)', price: 4090, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg', category_id: 'chicken-dishes' },
            { id: 'mango-chicken', number: 36, name: 'Mango chicken', description: 'Chicken pieces, cooked in a creamy mango sauce (Contains Dairy)', price: 4090, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'madras-chicken', number: 37, name: 'Madras chicken', description: 'Chicken cubes, cooked in South-indian spicy curry, with bird eye chili and coconut (Contains Dairy)', price: 3790, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' },
            { id: 'chicken-kolhapuri', number: 38, name: 'Chicken kolhapuri', description: 'Marinated chicken pieces, cooked in spicy onion-tomato based sauce with bird eye chili (Contains Dairy)', price: 3790, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'chicken-dishes' }
        ]
    },
    {
        id: 'house-specialities',
        name: 'House Specialities (Ház Specialitásai)',
        description: 'Chef\'s recommendations',
        items: [
            { id: 'chicken-khursani', number: 39, name: 'Chicken khursani', description: 'Oven-baked chicken breast, in spicy tomato sauce (Contains Dairy)', price: 4050, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'house-specialities' },
            { id: 'chicken-65', number: 40, name: 'Chicken 65', description: 'East-indian deep-fried, marinated chicken with green chili (Contains Gluten, Dairy)', price: 4050, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'house-specialities' },
            { id: 'chili-chicken', number: 41, name: 'Chili chicken', description: 'Chicken cubes, cooked with chili sauce (Contains Gluten, Dairy)', price: 4050, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'house-specialities' },
            { id: 'chicken-kali-mirch', number: 42, name: 'Chicken kali mirch', description: 'Marinated chicken breast curry, with black pepper (Contains Dairy)', price: 4050, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'house-specialities' },
            { id: 'chicken-momo', number: 43, name: 'Chicken momo', description: 'Minced-chicken dumpling, with special Nepali sauce (Contains Gluten)', price: 4050, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'house-specialities' }
        ]
    },
    {
        id: 'lamb-dishes',
        name: 'Lamb Dishes (Bárány)',
        description: 'Tender lamb specialties',
        items: [
            { id: 'rogan-josh', number: 44, name: 'Rogan josh', description: 'Kashmiri lamb curry, cooked with spicy tomato sauce (Contains Dairy)', price: 5900, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'lamb-dishes' },
            { id: 'lamb-tikka-masala', number: 45, name: 'Lamb tikka masala', description: 'Marinated lamb cubes, cooked in spicy tomato based curry (Contains Dairy)', price: 5900, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'lamb-dishes' },
            { id: 'lamb-vindallo', number: 46, name: 'Lamb vindallo', description: 'South-indian lamb dish, cooked with coconut milk (Contains Dairy)', price: 5900, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'lamb-dishes' },
            { id: 'lamb-madras', number: 47, name: 'Lamb madras', description: 'Lamb pieces, cooked in spicy madras curry', price: 5900, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'lamb-dishes' },
            { id: 'dal-gosht', number: 48, name: 'Dal gosht', description: 'North-indian, slow cooked lamb pieces with yellow lentil (Contains Dairy)', price: 5900, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'lamb-dishes' },
            { id: 'kadai-lamb', number: 49, name: 'Kadai lamb', description: 'Pan-fried lamb cubes, in spicy kadai masala (Contains Dairy)', price: 5900, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'lamb-dishes' },
            { id: 'lamb-kolhapuri', number: 50, name: 'Lamb kolhapuri', description: 'Marinated lamb curry, with bird eye chili (Contains Dairy)', price: 5900, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'lamb-dishes' }
        ]
    },
    {
        id: 'seafood',
        name: 'Seafood (Tengeri Ételek)',
        description: 'Fresh from the ocean',
        items: [
            { id: 'prawn-curry', number: 51, name: 'Prawn curry', description: 'Prawn curry, in onion sauce (Contains Dairy)', price: 5600, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'seafood' },
            { id: 'kadai-prawn', number: 52, name: 'Kadai prawn', description: 'Pan-fried prawn cubes (Contains Dairy)', price: 5600, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'seafood' },
            { id: 'prawn-vindallo', number: 53, name: 'Prawn vindallo', description: 'Prawn, cooked in South-indian spicy sauce (Contains Dairy)', price: 5600, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'seafood' },
            { id: 'prawn-tikka-masala', number: 54, name: 'Prawn tikka masala', description: 'Prawn, marinated in special sauces (Contains Dairy)', price: 5600, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'seafood' }
        ]
    },
    {
        id: 'oven-baked',
        name: 'Oven Baked (Kemencés)',
        description: 'Traditional Tandoori dishes',
        items: [
            { id: 'chicken-tikka', number: 55, name: 'Chicken tikka', description: 'Tandoor-baked, marinated chicken breast (Contains Dairy)', price: 3200, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'oven-baked' },
            { id: 'malai-tikka', number: 56, name: 'Malai tikka', description: 'Marinated chicken breast, in yoghurt sauce, with salad (Contains Dairy)', price: 3200, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'oven-baked' },
            { id: 'garlic-tikka', number: 57, name: 'Garlic tikka', description: 'Chicken, marinated with garlic (Contains Dairy)', price: 3200, is_vegetarian: false, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'oven-baked' }
        ]
    },
    {
        id: 'side-dishes',
        name: 'Side Dishes (Köretek)',
        description: 'Rice and Biryanis',
        items: [
            { id: 'steamed-rice', number: 58, name: 'Steamed rice', description: 'Steamed basmati rice', price: 1190, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' },
            { id: 'zeera-rice', number: 59, name: 'Zeera rice', description: 'Steamed rice with cumin', price: 1250, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' },
            { id: 'pulao-veg', number: 60, name: 'Pulao veg', description: 'Rice, steamed with turmeric, mixed with vegetables', price: 1490, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' },
            { id: 'kasmiri-pulao', number: 61, name: 'Kasmiri pulao', description: 'Steamed rice, mixed with dry fruits', price: 1550, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' },
            { id: 'veg-biryani', number: 62, name: 'Veg biryani', description: 'Spicy steamed rice mixed with vegetables', price: 3250, is_vegetarian: true, is_vegan: true, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' },
            { id: 'chicken-biryani', number: 63, name: 'Chicken biryani', description: 'Spicy chicken breast, mixed with steamed rice', price: 3890, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' },
            { id: 'lamb-biryani', number: 64, name: 'Lamb biryani', description: 'Lamb cubes, mixed with spicy steamed rice', price: 5000, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' },
            { id: 'prawn-biryani', number: 65, name: 'Prawn biryani', description: 'Prawn, mixed with spicy steamed rice', price: 5600, is_vegetarian: false, is_vegan: false, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' },
            { id: 'lemon-rice', number: 66, name: 'Lemon rice', description: 'Rice, steamed with turmeric, and lemon juice', price: 1200, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'side-dishes' }
        ]
    },
    {
        id: 'breads',
        name: 'Naan Breads (Indiai Kenyér)',
        description: 'Freshly baked in Tandoor',
        items: [
            { id: 'plain-naan', number: 67, name: 'Plain naan', description: 'Tandoor-baked indian flatbread', price: 850, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' },
            { id: 'butter-naan', number: 68, name: 'Butter naan', description: 'Tandoor-baked buttery indian flatbread', price: 975, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' },
            { id: 'garlic-naan', number: 69, name: 'Garlic naan', description: 'Tandoor-baked indian flatbread with garlic', price: 1000, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' },
            { id: 'aloo-naan', number: 70, name: 'Aloo naan', description: 'Tandoor-baked indian potato-filled flatbread', price: 999, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' },
            { id: 'roti', number: 71, name: 'Roti', description: 'Tandoor-baked whole wheat indian flatbread, with butter', price: 800, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' },
            { id: 'lacha-paratha', number: 72, name: 'Lacha paratha', description: 'Tandoor baked layered indian flatbread', price: 999, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' },
            { id: 'kashmiri-naan', number: 73, name: 'Kashmiri naan', description: 'Tandoor-baked indian flatbread filled with cashew, indian cheese, raisin', price: 1500, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' },
            { id: 'paneer-naan', number: 74, name: 'Paneer naan', description: 'Cheesy indian flatbread', price: 1499, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' },
            { id: 'flatbread-basket', number: 75, name: 'Flatbread basket', description: 'Roti, aloo naan, paneer naan, garlic naan', price: 3890, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'breads' }
        ]
    },
    {
        id: 'salads',
        name: 'Salads & Pickles (Saláták)',
        description: 'Fresh and spicy sides',
        items: [
            { id: 'mixed-vegetable-raita', number: 76, name: 'Mixed vegetable raita', description: 'Mix vegetable yoghurt salad', price: 1299, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'salads' },
            { id: 'mango-pickle', number: 77, name: 'Mango Pickle', description: 'Spicy mango pickle', price: 600, is_vegetarian: true, is_vegan: true, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'salads' },
            { id: 'kachumber-salad', number: 78, name: 'Kachumber salad', description: 'Spicy, cucumber, tomato, onion salad', price: 1299, is_vegetarian: true, is_vegan: true, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'salads' },
            { id: 'onion-salad', number: 79, name: 'Onion salad', description: 'Spicy onion salad', price: 900, is_vegetarian: true, is_vegan: true, is_spicy: true, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'salads' },
            { id: 'khera-garlic-raita', number: 80, name: 'Khera garlic raita', description: 'Cucumber salad, with garlic', price: 1299, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'salads' }
        ]
    },
    {
        id: 'desserts',
        name: 'Desserts (Desszertek)',
        description: 'Sweet finish',
        items: [
            { id: 'gulab-jamun', number: 81, name: 'Gulab jamun', description: 'Deep-fried milk-dough balls in sugar syrup', price: 1550, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'desserts' },
            { id: 'rasgulla', number: 82, name: 'Rasgulla', description: 'Indian cheese balls, in sugar syrup', price: 1550, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'desserts' }
        ]
    },
    {
        id: 'drinks',
        name: 'Drinks (Italok)',
        description: 'Refreshing beverages',
        items: [
            { id: 'mango-lassi', number: 83, name: 'Mango lassi', description: '0,4 l', price: 1290, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'salted-lassi', number: 84, name: 'Salted lassi', description: '0,4 l', price: 1200, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'sweet-lassi', number: 85, name: 'Sweet lassi', description: '0,4 l', price: 1200, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'masala-tea', number: 86, name: 'Masala tea', description: '0,2 l', price: 1200, is_vegetarian: true, is_vegan: false, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'sparkling-water', number: 87, name: 'Sparkling water', description: '0,5 l', price: 650, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'still-water', number: 88, name: 'Still water', description: '0,5 l', price: 650, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'coca-cola-products', number: 89, name: 'Coca Cola products', description: '0,5 l', price: 700, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'homemade-limonade', number: 90, name: 'Homemade limonade', description: '0,5 l', price: 1200, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'alcohol-free-beer', number: 91, name: 'Alcohol-free beer', description: '0,5 l', price: 800, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'heineken', number: 92, name: 'Heineken', description: '0,33 l', price: 800, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'borsodi', number: 93, name: 'Borsodi', description: '0,33 l', price: 800, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'dreher', number: 94, name: 'Dreher', description: '0,33 l', price: 800, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'cobra', number: 95, name: 'Cobra', description: 'Cobra beer (indian) 0,33 l', price: 1000, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' },
            { id: 'kama-sutra', number: 96, name: 'Kama Sutra', description: 'Kama Sutra beer (indian) 0,33 l', price: 1000, is_vegetarian: true, is_vegan: true, is_spicy: false, image_url: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg', category_id: 'drinks' }
        ]
    }
];
