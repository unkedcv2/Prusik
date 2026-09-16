import React, { useState } from 'react';
import { FAQS } from '../data/prusikData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import lugar3 from '../assets/images/ellugar_03.png';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-[#006bb3] via-[#005c9a] to-[#004e84] text-white relative overflow-hidden border-t border-sky-400/30">
      {/* Background illustrated with estancia photo + blue overlay fading softly into borders */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src={lugar3} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-20 mix-blend-overlay filter contrast-125 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-3.5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white drop-shadow-sm">
            Todo lo que <span className="font-extrabold text-white">necesitás saber</span>
          </h2>
          <p className="text-sky-100/95 text-base font-light">
            Resolvemos tus dudas sobre nuestras propuestas, ubicación y logística en Estancia Loma Pampa.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white text-stone-900 border border-white/50 rounded-2xl overflow-hidden transition-all shadow-lg hover:shadow-xl hover:border-[#f17e01]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-stone-900 font-semibold text-base sm:text-lg group-hover:text-[#006bb3] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-stone-100 border border-stone-200 text-[#006bb3] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#006bb3] text-white border-[#006bb3]' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-stone-100 pt-4 animate-fadeIn font-light">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
