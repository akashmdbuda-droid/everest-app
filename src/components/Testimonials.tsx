import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  customer_name: string;
  rating: number;
  comment: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    customer_name: 'Szabó Gábor',
    rating: 5,
    comment:
      'Finally, authentic Himalayan flavors in Budapest! The Biryani is fantastic and the service was incredibly warm and welcoming.',
  },
  {
    id: '2',
    customer_name: 'Nagy Péter',
    rating: 5,
    comment:
      'Amazing choice for team dinners! The food is tasty, affordable, and the portions are generous. Perfect for large groups.',
  },
  {
    id: '3',
    customer_name: 'Varga Katalin',
    rating: 5,
    comment:
      'Beautiful ambiance and incredible flavors. A perfect spot for a cozy dinner in the Corvin Quarter. Will definitely return.',
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('is_approved', true)
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) throw error;

        if (data && data.length > 0) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">What Our Guests Say</h2>
          <p className="text-lg text-gray-600">
            Experiences from our cherished visitors
          </p>
        </div>

        {!loading && testimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No testimonials yet. Be the first to share!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? 'fill-current' : ''}
                      style={{
                        color: i < testimonial.rating ? '#E67E22' : '#DDD',
                      }}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>

                <div>
                  <p className="font-bold" style={{ color: '#2C3E50' }}>
                    {testimonial.customer_name}
                  </p>
                  <p className="text-sm text-gray-500">Guest</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
