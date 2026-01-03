import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../lib/scroll';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-cream/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-6"
    )}>
      <div className="container-max">
        <div className="flex justify-between items-center px-4">
          <a
            href="#home"
            className="flex items-center gap-2 no-underline group"
            onClick={(e) => scrollToSection(e, '#home', () => setIsOpen(false))}
          >
            <Mountain size={32} className={clsx("transition-colors", isScrolled ? "text-primary" : "text-white")} />
            <span className={clsx("text-2xl font-serif font-bold transition-colors", isScrolled ? "text-primary" : "text-white")}>Everest</span>
          </a>

          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-xs font-bold uppercase tracking-widest transition-colors hover:text-secondary",
                  isScrolled ? "text-primary" : "text-white/90"
                )}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <button
              className={clsx(
                "btn-primary bg-secondary text-white hover:bg-white hover:text-primary transition-all text-xs px-6 py-2",
                !isScrolled && "bg-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-md"
              )}
              onClick={(e) => scrollToSection(e, '#reservations')}
            >
              Reserve
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx("md:hidden p-2 transition-colors", isScrolled ? "text-primary" : "text-white")}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cream border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6 items-center">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                    onClick={(e) => scrollToSection(e, link.href, () => setIsOpen(false))}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  className="btn-primary w-full max-w-xs"
                  onClick={(e) => scrollToSection(e, '#reservations', () => setIsOpen(false))}
                >
                  Reserve Table
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
