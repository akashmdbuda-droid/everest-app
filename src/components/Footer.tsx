import { Facebook, Instagram, Twitter } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-20 px-4 md:px-8 border-t border-white/10">
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6 tracking-tight">Everest</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Bringing authentic Himalayan cuisine and warm hospitality to your table since establishment.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Reservations', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-secondary transition-colors font-light"
                    onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-secondary">Hours</h4>
            <p className="text-gray-300 font-light leading-relaxed">
              <strong className="text-white block mb-1">Tuesday</strong>
              <span className="text-secondary font-bold">Holiday (Closed)</span>
            </p>
            <div className="h-4"></div>
            <p className="text-gray-300 font-light leading-relaxed">
              <strong className="text-white block mb-1">Mon, Wed - Sun</strong>
              11:00 AM - 10:00 PM
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-secondary">Follow Us</h4>
            <div className="flex gap-4 mb-8">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-secondary">Newsletter</h4>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-none text-white text-sm outline-none focus:border-secondary transition-colors"
              />
              <button className="btn-secondary text-white border-white/20 hover:bg-white hover:text-primary w-full">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wider">
            &copy; {currentYear} Everest Restaurant. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-500 tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
