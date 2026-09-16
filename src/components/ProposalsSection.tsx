import React, { useState } from 'react';
import { MessageCircle, ZoomIn, Check, ChevronDown } from 'lucide-react';
import { BackpackIcon, BirthdayCakeIcon, CarabinerIcon, CampfireIcon } from './AdventureIcons';
import { motion } from 'motion/react';
import { FlechaLogo } from './FlechaLogo';

// Photos from assets
import todosJuntos from '../assets/images/todosjuntos_foto.jpg';
import predio2 from '../assets/images/enelpredio (2).jpg';
import cump1 from '../assets/images/cumpleanios (1).webp';
import fogon1 from '../assets/images/fogon_01.png';
import predio1 from '../assets/images/enelpredio (1).jpg';

interface ProposalsSectionProps {
  onSelectProposal?: (proposalId: string) => void;
  onOpenImageModal: (imgUrl: string, title: string) => void;
}

export default function ProposalsSection({ onOpenImageModal }: ProposalsSectionProps) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const experiences = [
    {
      id: 'escolares',
      proposalTitle: 'Jornadas Educativas & Viajes',
      tag: 'Salidas Educativas',
      iconDefault: <BackpackIcon className="w-11 h-11 text-[#f17e01] drop-shadow-md cursor-pointer" stroke="#f17e01" />,
      iconHover: <BackpackIcon className="w-11 h-11 text-white drop-shadow-lg cursor-pointer" stroke="#ffffff" />,
      image: todosJuntos,
      title: 'Salidas Educativas',
      bajada: 'Proyectos pedagógicos y de articulación en contacto pleno con el entorno natural.',
      detail: 'Talleres vivenciales de orientación, botánica, cabuyería y dinámicas grupales adaptadas al diseño curricular institucional con seguridad perimetral.',
      highlights: ['Articulación docente', 'Predio cerrado', 'Carpeta previa'],
      waMessage: 'Hola Prusik! Quisiera información y propuesta pedagógica para una salida educativa escolar.'
    },
    {
      id: 'jornadas',
      proposalTitle: 'Jornadas Educativas & Viajes',
      tag: 'Jornadas de Día',
      iconDefault: <CarabinerIcon className="w-11 h-11 text-[#f17e01] drop-shadow-md cursor-pointer" stroke="#f17e01" />,
      iconHover: <CarabinerIcon className="w-11 h-11 text-white drop-shadow-lg cursor-pointer" stroke="#ffffff" />,
      image: predio2,
      title: 'Jornadas de Día & Extendidas',
      bajada: 'Días completos de dinámicas grupales, juegos de aventura, tirolesas y convivencia.',
      detail: 'Circuitos de puentes colgantes, tirolesa, tirolina y almuerzos campestres bajo arboledas centenarias con coordinación integral.',
      highlights: ['Tirolesa y puentes', 'Juegos cooperativos', 'Almuerzo de campo'],
      waMessage: 'Hola Prusik! Me interesa consultar por una jornada de día completa para nuestro grupo.'
    },
    {
      id: 'cumples',
      proposalTitle: 'Cumpleaños Inolvidables',
      tag: 'Cumpleaños',
      iconDefault: <BirthdayCakeIcon className="w-11 h-11 text-[#f17e01] drop-shadow-md cursor-pointer" stroke="#f17e01" />,
      iconHover: <BirthdayCakeIcon className="w-11 h-11 text-white drop-shadow-lg cursor-pointer" stroke="#ffffff" />,
      image: cump1,
      title: 'Cumpleaños Inolvidables',
      bajada: 'Festejos en plena naturaleza con palestra de escalada, tirolesa y merienda artesanal.',
      detail: '3.5 horas de pura aventura guiada al 100% por profesores en sectores de parque exclusivos, merienda completa y fogón opcional.',
      highlights: ['Palestra y tirolesa', 'Profesores dedicados', 'Sector exclusivo'],
      waMessage: 'Hola Prusik! Me gustaría consultar disponibilidad y valores para festejar un cumpleaños de aventura.'
    },
    {
      id: 'egresados',
      proposalTitle: 'Campamentos & Vivencias',
      tag: 'Viajes de Egresados',
      iconDefault: <CampfireIcon className="w-11 h-11 text-[#f17e01] drop-shadow-md cursor-pointer" stroke="#f17e01" />,
      iconHover: <CampfireIcon className="w-11 h-11 text-white drop-shadow-lg cursor-pointer" stroke="#ffffff" />,
      image: fogon1,
      title: 'Viajes de Egresados & Campamentos',
      bajada: 'Noches bajo las estrellas, fogón con canciones, desafíos de autonomía y camaradería.',
      detail: 'De 1 a 3 noches con armado de carpas o dormitorios de campo, juegos nocturnos, gastronomía casera de campo y monitoreo permanente.',
      highlights: ['Fogón nocturno', 'Autonomía y convivencia', 'Gastronomía casera'],
      waMessage: 'Hola Prusik! Queremos consultar por viaje de egresados o campamento para nuestro grupo.'
    }
  ];

  const activeItem = experiences[activeMobileIndex];

  return (
    <section id="propuestas" className="py-16 md:py-24 bg-[#006bb3] relative overflow-hidden">
      {/* Background illustrated with estancia photo + blue gradient fading softly into borders */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src={predio1} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-20 mix-blend-overlay filter contrast-125 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#006bb3] via-transparent to-[#006bb3]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean, direct section header without star icon */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          {/* Badge without star icon */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/35 px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>Estancia Loma Pampa &bull; Azul, Bs. As.</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight drop-shadow-sm">
            Nuestras <span className="font-extrabold text-white">Propuestas</span>
          </h2>

          <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed drop-shadow-xs">
            Experiencias de aventura y aprendizaje diseñadas a medida<br />
            para cada grupo en pleno contacto con la naturaleza.
          </p>
        </motion.div>

        {/* ================= MOBILE EXPERIENCE (lg:hidden) - EXPANDABLE ADVENTURE ACCORDION ================= */}
        <div className="lg:hidden space-y-3 mb-8">
          {experiences.map((item) => {
            const idx = experiences.findIndex(e => e.id === item.id);
            const isExpanded = activeMobileIndex === idx;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-white/45 transition-all duration-300"
              >
                {/* Header Banner - Tappable to Toggle */}
                <button
                  onClick={() => setActiveMobileIndex(idx)}
                  className="w-full relative h-20 flex items-center justify-between text-left focus:outline-none overflow-hidden cursor-pointer"
                >
                  {/* Banner Image Background */}
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-950/80 to-[#006bb3]/75" />

                  {/* Icon & Title */}
                  <div className="relative z-10 flex items-center gap-3.5 pl-4 cursor-pointer">
                    <div className="shrink-0 scale-90 filter drop-shadow-md">
                      {item.iconDefault}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 block">
                        {item.tag}
                      </span>
                      <h3 className="text-white font-extrabold text-base leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle indicator */}
                  <div className="relative z-10 pr-4 flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/20 text-white backdrop-blur-md transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#f17e01]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden bg-white border-t border-stone-100"
                  >
                    <div className="p-5 space-y-4">
                      {/* Sub-photo banner inside expansion */}
                      <div className="relative h-44 rounded-xl overflow-hidden bg-stone-900 shadow-inner">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenImageModal(item.image, item.title);
                          }}
                          className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/55 text-white flex items-center justify-center backdrop-blur-md active:scale-95 cursor-pointer"
                          title="Ampliar foto"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-stone-700 text-sm leading-relaxed font-light">
                        {item.detail}
                      </p>

                      {/* Highlights Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-xs bg-sky-50 border border-sky-100 text-[#006bb3] px-2.5 py-1 rounded-lg font-semibold"
                          >
                            <Check className="w-3.5 h-3.5 text-[#006bb3] shrink-0" />
                            <span>{h}</span>
                          </span>
                        ))}
                      </div>

                      {/* WhatsApp CTA Button */}
                      <a
                        href={`https://wa.me/5492281000000?text=${encodeURIComponent(item.waMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#f17e01] hover:bg-[#d56d01] text-white py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2.5 shadow-lg shadow-orange-600/20 active:scale-98 transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-5 h-5 shrink-0" />
                        <span>Consultar por WhatsApp</span>
                        <FlechaLogo color="white" animate="slide-x" className="w-7 h-2.5 ml-1 shrink-0" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP EXPERIENCE (hidden lg:grid) - 4 CARDS IN A SINGLE LINE ================= */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 xl:gap-6">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative h-[475px] rounded-3xl overflow-hidden bg-white shadow-xl border border-white/30 transition-all duration-300 flex flex-col justify-between select-none cursor-pointer"
            >
              {/* ================= NORMAL / DEFAULT CARD STATE ================= */}
              <div className="flex flex-col h-full justify-between cursor-pointer">
                <div>
                  {/* Photo area */}
                  <div className="relative h-52 overflow-hidden bg-stone-100 cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                      onClick={() => onOpenImageModal(item.image, item.title)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                    {/* Prominent Icon - LARGER AND WITHOUT ANY CONTAINER BOX */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10 cursor-pointer">
                      <div className="shrink-0 filter drop-shadow-lg cursor-pointer">
                        {item.iconDefault}
                      </div>
                    </div>

                    {/* Zoom button */}
                    <button
                      onClick={() => onOpenImageModal(item.image, item.title)}
                      className="absolute top-3.5 right-3.5 w-8 h-8 rounded-lg bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity z-10 cursor-pointer"
                      title="Ampliar foto"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>

                    {/* Tag badge floating softly over gradient - White & clean, pointer cursor */}
                    <div className="absolute bottom-3 left-4 right-4 cursor-pointer">
                      <span className="text-white text-xs font-bold uppercase tracking-wider drop-shadow-md cursor-pointer">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body text in default view */}
                  <div className="p-5 space-y-2 cursor-pointer">
                    <h3 className="font-bold text-stone-900 text-lg leading-snug cursor-pointer">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-3 cursor-pointer">
                      {item.bajada}
                    </p>
                  </div>
                </div>

                {/* Footer in default view (Orange WhatsApp button only) */}
                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/5492281000000?text=${encodeURIComponent(item.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#f17e01] hover:bg-[#d56d01] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-orange-600/20 active:scale-95 transition-all group/btn cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Consultar por WhatsApp</span>
                    <FlechaLogo color="white" className="w-5 h-2 ml-0.5 opacity-90 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                  </a>
                </div>
              </div>

              {/* ================= HOVER OVERLAY (TURNS COMPLETELY BLUE WITH PURE WHITE & ORANGE TEXT - NO YELLOW) ================= */}
              <div className="absolute inset-0 bg-[#006bb3] p-5 sm:p-6 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20 overflow-hidden shadow-2xl cursor-pointer">
                {/* Background image subtle tint inside the blue overlay */}
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none filter contrast-125"
                />
                
                {/* Soft gradient in blue overlay to ensure maximum contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#006bb3]/95 via-[#005a96]/95 to-[#004b80]/95 pointer-events-none" />

                {/* Overlay Content */}
                <div className="relative z-10 space-y-3 cursor-pointer">
                  {/* Top: Large Icon WITHOUT any container box in pure white */}
                  <div className="flex items-center justify-between cursor-pointer">
                    <div className="shrink-0 filter drop-shadow-md cursor-pointer">
                      {item.iconHover}
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold text-white/90 cursor-pointer">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title in bold white */}
                  <h3 className="text-white font-extrabold text-lg sm:text-xl leading-snug drop-shadow-xs cursor-pointer">
                    {item.title}
                  </h3>

                  {/* Detailed description developed in clear, readable white text */}
                  <p className="text-white text-xs sm:text-sm leading-relaxed font-normal pt-1 border-t border-white/20 cursor-pointer">
                    {item.detail}
                  </p>

                  {/* Key highlights pills - White on translucent, check in pure white */}
                  <div className="flex flex-wrap gap-1.5 pt-2 cursor-pointer">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-[11px] bg-white/15 border border-white/30 text-white px-2.5 py-1 rounded-lg font-medium shadow-xs cursor-pointer"
                      >
                        <Check className="w-3 h-3 text-white shrink-0" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overlay Footer: Institutional Orange WhatsApp button with high contrast */}
                <div className="relative z-10 pt-3">
                  <a
                    href={`https://wa.me/5492281000000?text=${encodeURIComponent(item.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#f17e01] hover:bg-[#d56d01] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-black/30 active:scale-95 transition-all group/hovbtn cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Consultar por WhatsApp</span>
                    <FlechaLogo color="white" animate="slide-x" className="w-6 h-2.5 ml-1 shrink-0" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom banner for custom school/club inquiries in two lines */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white/95 backdrop-blur-md border border-white/50 rounded-2xl p-5 sm:p-6 text-center max-w-3xl mx-auto shadow-xl"
        >
          <div className="text-stone-800 text-sm sm:text-base font-light leading-relaxed space-y-2">
            <p className="font-bold text-[#006bb3] text-base sm:text-lg">
              ¿Buscás una propuesta a medida para tu institución o club?
            </p>
            <p>
              Adaptamos la duración, el cronograma y la gastronomía al objetivo pedagógico y recreativo de tu grupo.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
