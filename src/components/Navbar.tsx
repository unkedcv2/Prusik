import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { logoSvg } from '../data/prusikData';
import { FlechaLogo } from './FlechaLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Propuestas', href: '#propuestas' },
    { name: 'El Lugar', href: '#lugar' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-stone-200/80'
          : 'bg-transparent py-5 border-b border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - Clean floating without box */}
        <a href="#" className="flex items-center gap-3.5 group">
          <img 
            src={logoSvg} 
            alt="Prusik Logo" 
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm" 
          />
          <div className="flex flex-col">
            <span className={`font-extrabold tracking-wider text-xl uppercase font-sans transition-colors ${
              isScrolled ? 'text-stone-900' : 'text-white drop-shadow-md'
            }`}>
              Prusik
            </span>
            <span className="text-[#f17e01] text-xs font-bold tracking-widest uppercase drop-shadow-sm">
              Naturaleza & Aventura
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-colors tracking-wide ${
                isScrolled
                  ? 'text-stone-700 hover:text-[#f17e01]'
                  : 'text-white/90 hover:text-[#f17e01] drop-shadow-sm'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#reservas"
            className="flex items-center gap-2 bg-[#f17e01] hover:bg-[#d56d01] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shadow-orange-900/20 hover:scale-105 group"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Reservar Experiencia</span>
            <FlechaLogo color="white" className="w-5 h-2 group-hover:translate-x-1 transition-transform ml-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2.5 rounded-xl transition-all ${
            isScrolled
              ? 'text-stone-700 hover:text-stone-900 bg-stone-100 border border-stone-200'
              : 'text-white hover:text-white bg-black/30 backdrop-blur-md border border-white/20'
          }`}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-stone-200 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-800 hover:text-[#f17e01] text-lg font-medium py-2 border-b border-stone-100"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#reservas"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#f17e01] text-white py-3.5 rounded-xl font-semibold shadow-md shadow-orange-900/20"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Reservar Experiencia</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
