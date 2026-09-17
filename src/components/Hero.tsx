import React from 'react';
import { Compass } from 'lucide-react';
import { videoPrusik } from '../data/prusikData';
import { motion } from 'motion/react';
import { FlechaLogo } from './FlechaLogo';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-stone-900 pt-32 pb-24">
      {/* Background Video with Much Lighter Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-70 filter brightness-105 contrast-105"
        >
          <source src={videoPrusik} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
        <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[1px]" />
        {/* Soft bottom gradient to blend into white of next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left w-full">
        <div className="max-w-3xl mx-auto lg:mx-0 space-y-6 sm:space-y-8 flex flex-col items-center lg:items-start">
          
          {/* Floating Pill with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center bg-white/15 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg"
          >
            <span>Estancia Loma Pampa &bull; Azul, Buenos Aires</span>
          </motion.div>

          {/* Main Headline - fine typography with staggered animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] drop-shadow-md"
          >
            Naturaleza, <span className="font-bold text-[#f17e01]">Aventura</span> & Conexión
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-stone-100 text-base sm:text-xl font-light max-w-2xl leading-relaxed drop-shadow"
          >
            Vivenciá campamentos educativos, jornadas inolvidables, cumpleaños al aire libre y vivencias grupales en un entorno rural exclusivo de hectáreas de verde y arboledas centenarias.
          </motion.p>

          {/* CTA Buttons - Hidden on mobile as requested, visible on sm+ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:flex flex-row items-center gap-4 w-auto pt-2"
          >
            <a
              href="#propuestas"
              className="flex items-center justify-center gap-3 bg-[#f17e01] hover:bg-[#d56d01] text-white font-medium px-8 py-4 rounded-2xl transition-all shadow-xl shadow-orange-900/30 hover:scale-105 group text-base"
            >
              <span>Explorar Propuestas</span>
              <FlechaLogo color="white" className="w-8 h-3 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a
              href="#reservas"
              className="flex items-center justify-center gap-3 bg-[#006bb3] hover:bg-[#005a96] text-white font-medium px-8 py-4 rounded-2xl shadow-xl shadow-sky-900/30 transition-all text-base hover:scale-105 group"
            >
              <span>Reservar tu Fecha</span>
              <FlechaLogo color="white" className="w-8 h-3 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>

          {/* Floating Scroll Cue with Logo Arrow */}
          <motion.a
            href="#propuestas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col items-center pt-4 sm:pt-6 group cursor-pointer"
            title="Ver propuestas"
          >
            <FlechaLogo color="orange" direction="down" animate="float-y" className="w-8 h-3 drop-shadow-md" />
          </motion.a>

        </div>
      </div>
    </section>
  );
}
