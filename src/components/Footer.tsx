import React from 'react';
import { logoSvg } from '../data/prusikData';

export default function Footer() {
  return (
    <footer className="bg-white text-stone-600 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img src={logoSvg} alt="Prusik Logo" className="h-10 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="text-stone-900 font-extrabold tracking-wider text-base uppercase">Prusik</span>
            <span className="text-[#f17e01] text-xs font-bold tracking-widest uppercase">Naturaleza & Aventura</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a href="#propuestas" className="hover:text-[#f17e01] transition-colors">Propuestas</a>
          <a href="#lugar" className="hover:text-[#f17e01] transition-colors">El Lugar</a>
          <a href="#reservas" className="hover:text-[#f17e01] transition-colors">Reservas</a>
          <a href="#faq" className="hover:text-[#f17e01] transition-colors">FAQ</a>
          <a href="#contacto" className="hover:text-[#f17e01] transition-colors">Contacto</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-stone-400 text-center md:text-right">
          <p>© {new Date().getFullYear()} Prusik Naturaleza. Estancia Loma Pampa, Azul.</p>
          <p className="flex items-center justify-center md:justify-end gap-1 mt-1 text-stone-500">
            <span>Aventura y naturaleza en Buenos Aires</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
