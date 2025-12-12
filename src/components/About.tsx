import { Mountain, Flame, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the heart of the Himalayas to your table
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/2284365/pexels-photo-2284365.jpeg?w=800&h=600&fit=crop"
              alt="Everest Restaurant Interior"
              className="rounded-lg shadow-lg w-full object-cover h-96"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C3E50' }}>
              A Journey Through Himalayan Tradition
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Everest Restaurant was born from a passion to share the authentic flavors and cultural richness of the Himalayan region. Our founder, inspired by years of travels through Nepal, Tibet, and Bhutan, envisioned a space where traditional recipes and warm hospitality meet contemporary culinary excellence.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every dish on our menu tells a story of mountain communities, seasonal harvests, and time-honored cooking techniques passed down through generations.
            </p>
            <button className="btn-secondary">Learn More About Us</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 card">
            <Mountain size={48} className="mx-auto mb-4" style={{ color: '#E67E22' }} />
            <h4 className="text-xl font-bold mb-3">Heritage</h4>
            <p className="text-gray-600">
              Rooted in authentic Himalayan culinary traditions dating back centuries.
            </p>
          </div>
          <div className="text-center p-8 card">
            <Flame size={48} className="mx-auto mb-4" style={{ color: '#E67E22' }} />
            <h4 className="text-xl font-bold mb-3">Quality</h4>
            <p className="text-gray-600">
              Fresh, premium ingredients sourced from trusted local and international suppliers.
            </p>
          </div>
          <div className="text-center p-8 card">
            <Users size={48} className="mx-auto mb-4" style={{ color: '#E67E22' }} />
            <h4 className="text-xl font-bold mb-3">Hospitality</h4>
            <p className="text-gray-600">
              Warm, welcoming service that makes every guest feel like family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
