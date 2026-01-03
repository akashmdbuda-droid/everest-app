import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}mount-everest.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight">
            Everest
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-3xl font-light mb-10 tracking-widest uppercase text-cream/90"
        >
          Authentic Himalayan Cuisine
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl mb-12 font-light leading-relaxed max-w-lg mx-auto text-cream/80 font-serif italic"
        >
          Experience the mountain's treasures through our carefully crafted dishes, blending traditional recipes with modern elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            className="btn-primary bg-secondary hover:bg-white hover:text-primary text-primary font-bold px-10 py-4 text-sm tracking-[0.2em]"
            onClick={(e) => scrollToSection(e, '#reservations')}
          >
            Reserve Table
          </button>
          <button
            onClick={(e) => scrollToSection(e, '#menu')}
            className="px-10 py-4 border border-white text-white rounded-md font-bold hover:bg-white hover:text-primary transition-all uppercase text-xs tracking-[0.2em]"
          >
            View Menu
          </button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.a>
    </section>
  );
}
