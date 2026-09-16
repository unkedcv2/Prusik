import React from 'react';
import { HelmetIcon, CarabinerIcon, CampfireIcon, MountainSummitIcon } from './AdventureIcons';

export default function ServicesHighlight() {
  const items = [
    {
      title: 'Salidas educativas',
      desc: 'Proyectos pedagógicos y de articulación en contacto pleno con el entorno natural.',
      icon: <HelmetIcon className="w-8 h-8 object-contain" />
    },
    {
      title: 'Jornadas de día y extendidas',
      desc: 'Días completos de dinámicas grupales, juegos de aventura y convivencia al aire libre.',
      icon: <CarabinerIcon className="w-7 h-7" />
    },
    {
      title: 'Viajes de egresados',
      desc: 'Una experiencia inolvidable de camaradería, fogón y desafíos en un entorno seguro.',
      icon: <CampfireIcon className="w-7 h-7" />
    },
    {
      title: 'Giras deportivas',
      desc: 'Infraestructura y espacios amplios para preparación, integración y recreación de clubes.',
      icon: <MountainSummitIcon className="w-7 h-7" />
    }
  ];

  return (
    <section className="py-20 bg-white text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="bg-stone-50 border border-stone-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h3 className="text-2xl sm:text-4xl font-light text-stone-900 tracking-tight">
              Un servicio integral pensado para <span className="font-bold text-[#006bb3]">escuelas y familias</span>
            </h3>
            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              Un servicio integral, pensado para escuelas y familias que buscan confianza y calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/80 p-6 rounded-2xl hover:border-[#f17e01]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50/60 border border-orange-200/60 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#006bb3] font-bold text-lg">✔️</span>
                    <h4 className="font-semibold text-stone-900 text-base">{item.title}</h4>
                  </div>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
