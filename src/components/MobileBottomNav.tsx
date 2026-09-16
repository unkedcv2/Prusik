import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { HelmetIcon, MountainSummitIcon } from './AdventureIcons';

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-stone-200 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-4 gap-1 items-center max-w-md mx-auto">
        
        {/* Propuestas */}
        <a
          href="#propuestas"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-600 hover:text-[#f17e01] hover:bg-stone-50 active:scale-95 transition-all group"
        >
          {/* Helmet Icon from adventure set */}
          <div className="w-10 h-10 rounded-xl bg-orange-50/80 border border-orange-200/50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
            <HelmetIcon className="w-6 h-6 object-contain" />
          </div>
          <span className="text-[11px] font-medium tracking-tight mt-1 text-stone-700 group-hover:text-[#f17e01]">
            Propuestas
          </span>
        </a>

        {/* El Lugar */}
        <a
          href="#lugar"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-600 hover:text-[#006bb3] hover:bg-stone-50 active:scale-95 transition-all group"
        >
          {/* Mountain summit alpinism icon */}
          <div className="w-10 h-10 rounded-xl bg-sky-50/80 border border-sky-200/50 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
            <MountainSummitIcon className="w-5 h-5 text-[#006bb3]" />
          </div>
          <span className="text-[11px] font-medium tracking-tight mt-1 text-stone-700 group-hover:text-[#006bb3]">
            El Lugar
          </span>
        </a>

        {/* Reservar */}
        <a
          href="#reservas"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-600 hover:text-[#f17e01] hover:bg-stone-50 active:scale-95 transition-all group"
        >
          {/* Calendar App Icon */}
          <div className="w-10 h-10 rounded-xl bg-[#f17e01] flex items-center justify-center shadow-sm group-hover:bg-[#d56d01] transition-colors">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <span className="text-[11px] font-bold tracking-tight mt-1 text-[#f17e01]">
            Reservar
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5492281000000?text=Hola,%20quiero%20consultar%20por%20una%20experiencia%20en%20Prusik"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-stone-600 hover:text-[#006bb3] hover:bg-stone-50 active:scale-95 transition-all group"
        >
          {/* WhatsApp Direct Icon */}
          <div className="w-10 h-10 rounded-xl bg-[#006bb3] flex items-center justify-center shadow-sm group-hover:bg-[#005a96] transition-colors">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-[11px] font-bold tracking-tight mt-1 text-[#006bb3]">
            WhatsApp
          </span>
        </a>

      </div>
    </div>
  );
}
