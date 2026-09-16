import React from 'react';
import { MapPin, Mail, Phone, MessageCircle, Clock, Globe } from 'lucide-react';
import { logoSvg } from '../data/prusikData';
import { motion } from 'motion/react';
import fogon1 from '../assets/images/fogon_01.png';
import { FlechaLogo } from './FlechaLogo';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-white text-stone-900 relative overflow-hidden border-t border-stone-200/80">
      {/* Background illustrated with estancia fogon photo + light white overlay fading softly into borders */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src={fogon1} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.11] filter contrast-110 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#006bb3]/10 border border-[#006bb3]/30 px-3.5 py-1.5 rounded-full text-[#006bb3] text-xs font-bold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#f17e01]" />
              <span>Ubicación y Contacto</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-900">
              Vení a Vivir la <span className="font-bold text-[#f17e01]">Experiencia Prusik</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed font-light">
              Establecidos en Estancia Loma Pampa, un entorno privilegiado en Azul, Buenos Aires. Estamos listos para coordinar tu visita, cumpleaños o campamento.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#006bb3]/10 border border-[#006bb3]/20 p-3 rounded-2xl text-[#f17e01] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-base">Estancia Loma Pampa</h4>
                  <p className="text-stone-600 text-sm">RN3 Km 310, B7300 Azul, Provincia de Buenos Aires, Argentina.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#006bb3]/10 border border-[#006bb3]/20 p-3 rounded-2xl text-[#f17e01] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-base">Teléfono / WhatsApp</h4>
                  <p className="text-stone-600 text-sm">+54 9 2281 00-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#006bb3]/10 border border-[#006bb3]/20 p-3 rounded-2xl text-[#f17e01] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-base">Correo Electrónico</h4>
                  <p className="text-stone-600 text-sm">contacto@prusiknaturaleza.com.ar</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5492281000000?text=Hola,%20quiero%20consultar%20por%20Prusik%20Naturaleza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#006bb3] hover:bg-[#005a96] text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-md hover:scale-105 group"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Escribinos por WhatsApp</span>
                <FlechaLogo color="white" animate="slide-x" className="w-7 h-2.5 ml-1 shrink-0" />
              </a>
            </div>

          </motion.div>

          {/* Right Map Card */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="bg-white/95 backdrop-blur-sm border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md hover:border-[#006bb3]/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logoSvg} alt="Prusik" className="h-12 w-auto object-contain" />
                  <div>
                    <h3 className="text-stone-900 font-bold text-lg">Estancia Loma Pampa</h3>
                    <p className="text-[#f17e01] text-xs font-semibold">Azul, Buenos Aires</p>
                  </div>
                </div>
                <span className="text-xs bg-[#006bb3] px-3 py-1 rounded-full text-white font-bold shadow-xs">
                  Predio Exclusivo
                </span>
              </div>

              {/* Google Maps Visual Embed */}
              <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-stone-300 relative bg-stone-100 shadow-inner group">
                <iframe
                  src="https://maps.google.com/maps?q=Azul,%20Buenos%20Aires,%20Argentina&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Ubicación Estancia Loma Pampa, Azul, Buenos Aires"
                />
                
                {/* Floating interactive location card */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-stone-200 shadow-md">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <MapPin className="w-4 h-4 text-[#f17e01] shrink-0" />
                    <span className="text-xs text-stone-800 font-semibold truncate">RN3 Km 310 &bull; Azul, Bs. As.</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Estancia+Loma+Pampa,+RN3+Km+310,+Azul,+Provincia+de+Buenos+Aires"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 bg-[#f17e01] hover:bg-[#d56d01] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xs transition-all hover:scale-105 inline-flex items-center gap-1.5 group"
                  >
                    <span>Abrir en Maps</span>
                    <FlechaLogo color="white" className="w-5 h-2 group-hover:translate-x-1 transition-transform shrink-0" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1">
                  <div className="flex items-center gap-2 text-[#f17e01] text-xs font-bold uppercase">
                    <Clock className="w-4 h-4" />
                    <span>Horarios</span>
                  </div>
                  <p className="text-stone-700 text-sm font-medium">Lunes a Sábados con reserva previa</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-1">
                  <div className="flex items-center gap-2 text-[#f17e01] text-xs font-bold uppercase">
                    <Globe className="w-4 h-4" />
                    <span>Redes</span>
                  </div>
                  <p className="text-stone-700 text-sm font-medium">@prusik.naturaleza</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
