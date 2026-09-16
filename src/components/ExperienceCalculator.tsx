import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Mail, Phone, User, Send, CheckCircle2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { BookingFormState } from '../types';
import { motion } from 'motion/react';
import predio4 from '../assets/images/enelpredio (4).jpg';

interface ExperienceCalculatorProps {
  selectedProposalTitle?: string;
}

// Helper dates with status for simulated availability calendar
const OCCUPIED_DATES = [
  '2026-09-20', '2026-09-21', '2026-09-26', '2026-09-27',
  '2026-10-03', '2026-10-04', '2026-10-10', '2026-10-11', '2026-10-18',
  '2026-10-24', '2026-10-25', '2026-10-31', '2026-11-01'
];

export default function ExperienceCalculator({ selectedProposalTitle }: ExperienceCalculatorProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 8, 1)); // September 2026
  const [form, setForm] = useState<BookingFormState>({
    eventType: selectedProposalTitle || 'Cumpleaños Inolvidables',
    participants: 25,
    date: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      eventType: 'Cumpleaños Inolvidables',
      participants: 25,
      date: '',
      name: '',
      email: '',
      phone: '',
      notes: '',
    });
  };

  // Calendar generation helpers
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDateClick = (dayStr: string, isOccupied: boolean) => {
    if (isOccupied) return;
    setForm(prev => ({ ...prev, date: dayStr }));
  };

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa consultar disponibilidad para "${form.eventType}" con ${form.participants} participantes para la fecha ${form.date || 'a coordinar'}. Mi nombre es ${form.name}.`
  );

  return (
    <section id="reservas" className="py-16 md:py-24 bg-white text-stone-950 relative overflow-hidden">
      {/* Background illustrated with estancia photo + light white overlay fading softly into borders */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src={predio4} 
          alt="" 
          className="w-full h-full object-cover object-center opacity-[0.11] filter contrast-110 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-90" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#006bb3]/10 border border-[#006bb3]/30 px-3.5 py-1.5 rounded-full text-[#006bb3] text-xs font-bold uppercase tracking-widest">
            <CalendarIcon className="w-3.5 h-3.5 text-[#f17e01]" />
            <span>Calendario & Disponibilidad</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-950">
            Reservá tu <span className="font-bold text-[#f17e01]">Fecha</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light">
            Consultá los días disponibles en nuestro calendario interactivo de Estancia Loma Pampa y envianos tu solicitud.
          </p>
        </motion.div>

        {submitted ? (
          <div className="max-w-2xl mx-auto bg-stone-50 border border-[#f17e01]/40 p-10 rounded-3xl text-center space-y-6 shadow-xl animate-fadeIn">
            <div className="w-20 h-20 bg-[#006bb3]/15 border border-[#006bb3]/30 rounded-full flex items-center justify-center mx-auto text-[#006bb3] shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-[#f17e01]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-stone-900">¡Reserva Enviada con Éxito!</h3>
              <p className="text-stone-600 max-w-md mx-auto text-sm">
                Gracias <span className="text-[#f17e01] font-bold">{form.name}</span>. Hemos recibido tu solicitud para el día <span className="font-bold">{form.date || 'a coordinar'}</span>. Nos pondremos en contacto a la brevedad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={`https://wa.me/5492281000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#006bb3] hover:bg-[#005a96] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Continuar por WhatsApp</span>
              </a>
              <button
                onClick={resetForm}
                className="w-full sm:w-auto bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold px-6 py-3.5 rounded-xl border border-stone-300 transition-all"
              >
                Nueva Reserva
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Interactive Calendar */}
            <div className="lg:col-span-6 bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-stone-900 font-bold text-lg">
                  {monthNames[month]} {year}
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 text-xs text-stone-600 font-medium pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600" />
                  <span>Disponible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-400 border border-rose-500" />
                  <span>Ocupado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#f17e01] border border-orange-600" />
                  <span>Seleccionado</span>
                </div>
              </div>

              {/* Days Header */}
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-stone-500 uppercase">
                <span>Dom</span>
                <span>Lun</span>
                <span>Mar</span>
                <span>Mié</span>
                <span>Jue</span>
                <span>Vie</span>
                <span>Sáb</span>
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                  <div key={`empty-${index}`} className="h-10 sm:h-12" />
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const dayNum = index + 1;
                  const formattedDay = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
                  const formattedMonth = (month + 1) < 10 ? `0${month + 1}` : `${month + 1}`;
                  const dateStr = `${year}-${formattedMonth}-${formattedDay}`;

                  const isOccupied = OCCUPIED_DATES.includes(dateStr);
                  const isSelected = form.date === dateStr;

                  return (
                    <button
                      key={dateStr}
                      type="button"
                      disabled={isOccupied}
                      onClick={() => handleDateClick(dateStr, isOccupied)}
                      className={`h-10 sm:h-12 rounded-xl text-sm font-semibold flex flex-col items-center justify-center transition-all relative ${
                        isSelected
                          ? 'bg-[#f17e01] text-white shadow-md scale-105 font-bold'
                          : isOccupied
                          ? 'bg-rose-50 text-rose-400 border border-rose-200 cursor-not-allowed opacity-60 line-through'
                          : 'bg-white text-stone-800 border border-stone-200 hover:border-[#006bb3] hover:bg-sky-50 shadow-sm'
                      }`}
                    >
                      <span>{dayNum}</span>
                      <span className={`w-1.5 h-1.5 rounded-full mt-0.5 ${isSelected ? 'bg-white' : isOccupied ? 'bg-rose-400' : 'bg-emerald-500'}`} />
                    </button>
                  );
                })}
              </div>

              <div className="bg-stone-100 p-4 rounded-2xl border border-stone-200 text-xs text-stone-600 space-y-1">
                <p className="font-bold text-stone-800">💡 Instrucciones:</p>
                <p>Hacé click en cualquier día verde disponible para asignarlo automáticamente a tu formulario de reserva.</p>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleSubmit}
                className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-lg space-y-6"
              >
                <div className="space-y-4">
                  
                  {/* Event Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Tipo de Propuesta / Evento
                    </label>
                    <select
                      value={form.eventType}
                      onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                      className="w-full bg-white border border-stone-300 text-stone-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f17e01] transition-colors"
                    >
                      <option value="Cumpleaños Inolvidables">Cumpleaños Inolvidables</option>
                      <option value="Jornadas Educativas & Viajes">Jornadas Educativas & Viajes</option>
                      <option value="Campamentos & Vivencias">Campamentos & Vivencias</option>
                      <option value="Grupos, Familias & Eventos">Grupos, Familias & Eventos</option>
                    </select>
                  </div>

                  {/* Participants */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                        Cantidad Estimada de Personas
                      </label>
                      <span className="text-white font-bold text-xs bg-[#006bb3] px-3 py-1 rounded-lg shadow-sm">
                        {form.participants} personas
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="120"
                      step="5"
                      value={form.participants}
                      onChange={(e) => setForm({ ...form, participants: Number(e.target.value) })}
                      className="w-full accent-[#f17e01] bg-stone-200 h-2 rounded-lg cursor-pointer mt-2"
                    />
                  </div>

                  {/* Date Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                      <CalendarIcon className="w-4 h-4 text-[#f17e01]" />
                      <span>Fecha Seleccionada del Calendario</span>
                    </label>
                    <input
                      type="text"
                      required
                      readOnly
                      placeholder="Seleccioná un día en el calendario de la izquierda"
                      value={form.date}
                      className="w-full bg-white border border-stone-300 text-stone-900 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[#f17e01]"
                    />
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-[#f17e01]" />
                      <span>Nombre y Apellido / Institución</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Juan Pérez o Colegio San Martín"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-stone-300 text-stone-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f17e01]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                        <Mail className="w-4 h-4 text-[#f17e01]" />
                        <span>Correo Electrónico</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white border border-stone-300 text-stone-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f17e01]"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-[#f17e01]" />
                        <span>Teléfono / WhatsApp</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej: 2281 445566"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white border border-stone-300 text-stone-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f17e01]"
                      />
                    </div>
                  </div>

                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-[#f17e01] hover:bg-[#d56d01] text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-orange-900/20 hover:scale-[1.01]"
                  >
                    <Send className="w-5 h-5" />
                    <span>Reservar Fecha Ahora</span>
                  </button>
                </div>

              </form>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
