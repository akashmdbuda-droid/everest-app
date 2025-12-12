import { useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-max">
        <div className="flex justify-between items-center h-16 px-4">
          <a href="#home" className="flex items-center gap-2 no-underline">
            <Mountain size={32} style={{ color: '#2C3E50' }} />
            <span className="text-xl font-bold" style={{ color: '#2C3E50' }}>Everest</span>
          </a>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-orange-600 transition-colors"
                style={{ color: '#34495E' }}
              >
                {link.label}
              </a>
            ))}
            <button className="btn-primary text-sm">Reserve Table</button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-orange-600 transition-colors"
                  style={{ color: '#34495E' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-primary text-sm w-full">Reserve Table</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
