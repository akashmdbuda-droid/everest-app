import { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    party_size: '2',
    reservation_date: '',
    reservation_time: '19:00',
    special_requests: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      const { error } = await supabase.from('reservations').insert([
        {
          ...formData,
          party_size: parseInt(formData.party_size),
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        party_size: '2',
        reservation_date: '',
        reservation_time: '19:00',
        special_requests: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit reservation');
    } finally {
      setLoading(false);
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Make a Reservation</h2>
          <p className="text-lg text-gray-600">
            Secure your table at Everest
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2C3E50' }}>
              Reserve Your Perfect Evening
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Calendar size={24} style={{ color: '#E67E22' }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Flexible Timing</h4>
                  <p className="text-gray-600">
                    Choose from available time slots that work best for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users size={24} style={{ color: '#E67E22' }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Group Sizes</h4>
                  <p className="text-gray-600">
                    We accommodate parties of all sizes up to 20 guests.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} style={{ color: '#E67E22' }} className="flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Quick Confirmation</h4>
                  <p className="text-gray-600">
                    Instant confirmation of your reservation with us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            {submitted && (
              <div
                className="mb-6 p-4 rounded-lg text-white font-semibold text-center"
                style={{ backgroundColor: '#27AE60' }}
              >
                Reservation submitted! We'll confirm your booking shortly.
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
                  Full Name
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                    Date
                  </label>
                  <input
                    type="date"
                    name="reservation_date"
                    value={formData.reservation_date}
                    onChange={handleChange}
                    required
                    min={minDate}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                    Time
                  </label>
                  <input
                    type="time"
                    name="reservation_time"
                    value={formData.reservation_time}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  Party Size
                </label>
                <select
                  name="party_size"
                  value={formData.party_size}
                  onChange={handleChange}
                  className="w-full"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                    <option key={size} value={size}>
                      {size} {size === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="11+">11+ Guests (contact us)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  Special Requests
                </label>
                <textarea
                  name="special_requests"
                  value={formData.special_requests}
                  onChange={handleChange}
                  className="w-full resize-none h-24"
                  placeholder="Allergies, dietary restrictions, or special occasions..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? 'Submitting...' : 'Reserve Table'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
