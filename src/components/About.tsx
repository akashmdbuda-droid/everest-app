import { Mountain, Flame, Users } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif italic">
            From the heart of the Himalayas to your table
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
            <img
              src="https://images.pexels.com/photos/2284365/pexels-photo-2284365.jpeg?w=800&h=600&fit=crop"
              alt="Everest Restaurant Interior"
              className="rounded-lg shadow-xl w-full object-cover h-[500px] relative z-10"
            />
          </div>
          <div>
            <h3 className="text-3xl font-serif text-primary mb-6">
              A Journey Through Himalayan Tradition
            </h3>
            <p className="text-gray-700 mb-6 leading-loose font-light">
              Everest Restaurant was born from a passion to share the authentic flavors and cultural richness of the Himalayan region. Our founder, inspired by years of travels through Nepal, Tibet, and Bhutan, envisioned a space where traditional recipes and warm hospitality meet contemporary culinary excellence.
            </p>
            <p className="text-gray-700 mb-8 leading-loose font-light">
              Every dish on our menu tells a story of mountain communities, seasonal harvests, and time-honored cooking techniques passed down through generations.
            </p>
            <button className="btn-secondary">Learn More About Us</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 card border-none shadow-none bg-cream">
            <Mountain size={40} className="mx-auto mb-6 text-secondary" />
            <h4 className="text-xl font-serif text-primary mb-3">Heritage</h4>
            <p className="text-gray-600 font-light">
              Rooted in authentic Himalayan culinary traditions dating back centuries.
            </p>
          </div>
          <div className="text-center p-8 card border-none shadow-none bg-cream">
            <Flame size={40} className="mx-auto mb-6 text-secondary" />
            <h4 className="text-xl font-serif text-primary mb-3">Quality</h4>
            <p className="text-gray-600 font-light">
              Fresh, premium ingredients sourced from trusted local and international suppliers.
            </p>
          </div>
          <div className="text-center p-8 card border-none shadow-none bg-cream">
            <Users size={40} className="mx-auto mb-6 text-secondary" />
            <h4 className="text-xl font-serif text-primary mb-3">Hospitality</h4>
            <p className="text-gray-600 font-light">
              Warm, welcoming service that makes every guest feel like family.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
