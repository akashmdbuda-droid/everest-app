import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'ambiance' | 'events';
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: `${import.meta.env.BASE_URL}images/gallery_naan.jpg`,
    alt: 'Freshly Baked Naan',
    category: 'food',
  },
  {
    id: '2',
    src: `${import.meta.env.BASE_URL}images/gallery_biryani.jpg`,
    alt: 'Aromatic Biryani',
    category: 'food',
  },
  {
    id: '3',
    src: `${import.meta.env.BASE_URL}images/gallery_saag.jpg`,
    alt: 'Palak Paneer',
    category: 'food',
  },
  {
    id: '4',
    src: `${import.meta.env.BASE_URL}images/gallery_interior_1.jpg`,
    alt: 'Modern Dining Space',
    category: 'ambiance',
  },
  {
    id: '5',
    src: `${import.meta.env.BASE_URL}images/gallery_interior_2.jpg`,
    alt: 'Bar & Lounge Area',
    category: 'ambiance',
  },
  {
    id: '6',
    src: `${import.meta.env.BASE_URL}images/gallery_exterior.jpg`,
    alt: 'Restaurant Exterior',
    category: 'ambiance',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4">Gallery</h2>
          <p className="text-lg text-gray-600">
            Visual journey through our culinary world
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['all', 'food', 'ambiance', 'events'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${activeFilter === filter
                ? 'text-white'
                : 'bg-gray-100 border-2 text-gray-700'
                }`}
              style={{
                backgroundColor: activeFilter === filter ? '#E67E22' : '#F0F0F0',
                borderColor: activeFilter === filter ? '#E67E22' : '#DDD',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full rounded-lg"
            />
            <p className="text-white mt-4 text-center text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
