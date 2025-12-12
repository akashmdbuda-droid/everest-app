import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.from('contact_submissions').insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#2C3E50' }}>
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin size={24} style={{ color: '#E67E22' }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-600">
                    1234 Mountain Peak Avenue<br />
                    Denver, Colorado 80202<br />
                    USA
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} style={{ color: '#E67E22' }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+13035551234" className="hover:text-orange-600">
                      +1 (303) 555-1234
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} style={{ color: '#E67E22' }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:hello@everestrestaurant.com" className="hover:text-orange-600">
                      hello@everestrestaurant.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} style={{ color: '#E67E22' }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Thursday: 5:00 PM - 10:00 PM<br />
                    Friday - Saturday: 5:00 PM - 11:00 PM<br />
                    Sunday: 4:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#FAF8F3' }}>
              <h4 className="font-bold mb-3">Special Events</h4>
              <p className="text-gray-600 text-sm">
                Private dining and events available. Contact us for more information about hosting your special celebration at Everest.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            {submitted && (
              <div
                className="mb-6 p-4 rounded-lg text-white font-semibold text-center"
                style={{ backgroundColor: '#27AE60' }}
              >
                Message sent! We'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-lg text-white font-semibold text-center bg-red-500">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none h-32"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
