import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { GALLERY_ITEMS } from '../data/prusikData';
import { GalleryItem } from '../types';
import { ZoomIn, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import lugar1 from '../assets/images/ellugar_01.png';
import { FlechaLogo } from './FlechaLogo';

interface VenueCarouselProps {
  onOpenImageModal: (imgUrl: string, title: string) => void;
}

export default function VenueCarousel({ onOpenImageModal }: VenueCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start', 
    skipSnaps: false, 
    dragFree: true 
  });

  // Continuous auto-scroll loop
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="lugar" className="py-16 md:py-24 bg-gradient-to-b from-[#006bb3] via-[#005c9a] to-[#004e84] text-white relative overflow-hidden">
      {/* Background illustrated with estancia photo + blue overlay fading softly into borders */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src={lugar1} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-20 mix-blend-overlay filter contrast-125 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-3.5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#f17e01]" />
            <span>Estancia Loma Pampa &bull; Azul, Bs. As.</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Conocé Nuestro <span className="font-extrabold text-white">Predio</span>
          </h2>
          <div className="text-sky-100/95 text-base sm:text-lg font-light leading-relaxed space-y-1">
            <p>Un rincón único en Azul, Buenos Aires.</p>
            <p>Hacé doble click en cualquier foto para ampliarla en alta definición.</p>
          </div>
        </motion.div>

        {/* Carousel Container - continuous seamless scroll */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-2.5 border border-white/20 shadow-2xl" ref={emblaRef}>
            <div className="flex -ml-4">
              {GALLERY_ITEMS.map((item: GalleryItem) => (
                <div 
                  key={item.id} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0"
                >
                  <div
                    onDoubleClick={() => onOpenImageModal(item.image, item.title)}
                    title="Hacé doble click para ampliar"
                    className="relative h-80 rounded-2xl overflow-hidden bg-stone-900 border border-white/20 cursor-pointer shadow-lg group/card select-none"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/20 to-transparent" />
                    
                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                      <span className="text-xs uppercase tracking-wider font-bold text-white bg-[#f17e01] backdrop-blur-md px-3 py-1 rounded-lg shadow-sm">
                        {item.category}
                      </span>
                      <div className="bg-white/95 backdrop-blur-md p-2 rounded-xl text-stone-800 opacity-95 group-hover/card:opacity-100 transition-opacity border border-white/50 shadow-sm">
                        <ZoomIn className="w-4 h-4 text-[#006bb3]" />
                      </div>
                    </div>

                    {/* Bottom Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                      <h3 className="text-white font-bold text-lg group-hover/card:text-[#f17e01] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-stone-200 text-xs line-clamp-1 opacity-90 font-light">
                        Doble click para ampliar
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
