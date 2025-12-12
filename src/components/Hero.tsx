import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?w=1600&h=900&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4">
        <div className="mb-6 inline-block">
          <div className="text-6xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Everest
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-light mb-8 tracking-wide">
          Authentic Himalayan Cuisine
        </h2>

        <p className="text-lg md:text-xl mb-12 font-light leading-relaxed max-w-lg mx-auto">
          Experience the mountain's treasures through our carefully crafted dishes, blending traditional recipes with modern elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary">
            Reserve a Table
          </button>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-gray-800 transition-all"
          >
            View Menu
          </button>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
