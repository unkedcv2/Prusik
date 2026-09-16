import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/prusikData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import cump3 from '../assets/images/cumpleanios (3).webp';

export default function Testimonials() {
  const [mobileIdx, setMobileIdx] = useState(0);
  const activeTestimonial = TESTIMONIALS[mobileIdx];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#f58204] via-[#ea7400] to-[#e06d00] text-white relative overflow-hidden border-t border-orange-400/30">
      {/* Background illustrated with photo + warm orange overlay fading softly into borders */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src={cump3} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay filter contrast-125 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/35 px-3.5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-sm">
            <Quote className="w-3.5 h-3.5 text-white" />
            <span>Testimonios & Experiencias</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white drop-shadow-sm leading-tight sm:leading-tight">
            Lo que dicen quienes <br />
            <span className="font-extrabold text-white">ya nos visitaron</span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg font-light">
            Familias, colegios y grupos que confían en Prusik para sus vivencias en la naturaleza.
          </p>
        </motion.div>

        {/* ================= MOBILE FOCUSED CAROUSEL (md:hidden) ================= */}
        <div className="md:hidden">
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="bg-white text-stone-900 border border-white/60 p-6 rounded-3xl shadow-xl flex flex-col justify-between relative"
          >
            <div className="absolute top-5 right-5 text-[#f17e01]/20">
              <Quote className="w-8 h-8" />
            </div>

            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-1 text-[#f17e01]">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed italic font-light">
                "{activeTestimonial.content}"
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between relative z-10">
              <div>
                <h4 className="text-stone-900 font-bold text-sm">{activeTestimonial.author}</h4>
                <p className="text-[#006bb3] text-xs font-semibold">{activeTestimonial.role}</p>
              </div>
              <span className="text-stone-400 text-xs">{activeTestimonial.date}</span>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex items-center justify-between pt-4 mt-3 border-t border-stone-100">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMobileIdx(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      mobileIdx === i ? 'w-6 bg-[#006bb3]' : 'w-2 bg-stone-200'
                    }`}
                    aria-label={`Testimonio ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMobileIdx((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
                  className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 active:scale-95 cursor-pointer"
                  title="Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setMobileIdx((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
                  className="w-8 h-8 rounded-full bg-[#006bb3] flex items-center justify-center text-white active:scale-95 cursor-pointer"
                  title="Siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= DESKTOP 3-CARD GRID (hidden md:grid) ================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white text-stone-900 border border-white/50 p-8 rounded-3xl flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-[#006bb3] transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-[#f17e01]/20 group-hover:text-[#006bb3]/30 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-[#f17e01]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed italic font-light">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between relative z-10">
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">{t.author}</h4>
                  <p className="text-[#006bb3] text-xs font-semibold">{t.role}</p>
                </div>
                <span className="text-stone-400 text-xs">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
