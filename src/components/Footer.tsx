import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 text-white py-16"
      style={{ backgroundColor: '#2C3E50' }}
    >
      <div className="container-max">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Everest</h3>
            <p className="text-gray-300">
              Bringing authentic Himalayan cuisine and warm hospitality to your table.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <p className="text-gray-300 text-sm">
              Monday - Thursday<br />
              5:00 PM - 10:00 PM<br />
              <br />
              Friday - Saturday<br />
              5:00 PM - 11:00 PM<br />
              <br />
              Sunday<br />
              4:00 PM - 9:00 PM
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>

            <h4 className="text-lg font-bold mb-2">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-3">Subscribe for updates and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-l-md bg-gray-800 text-white text-sm outline-none focus:bg-gray-700"
              />
              <button
                className="px-4 py-2 rounded-r-md font-semibold transition-colors"
                style={{ backgroundColor: '#E67E22' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D4775E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E67E22'}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Everest Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
