import logoSvg from '../assets/images/prusik_logo_ok.svg';
import videoPrusik from '../assets/videos/video_prusik.mp4';

import cump1 from '../assets/images/cumpleanios (1).webp';
import cump2 from '../assets/images/cumpleanios (2).webp';
import cump3 from '../assets/images/cumpleanios (3).webp';
import cump4 from '../assets/images/cumpleanios (4).webp';
import cump5 from '../assets/images/cumpleanios (5).webp';
import cump6 from '../assets/images/cumpleanios (6).webp';

import lugar1 from '../assets/images/ellugar_01.png';
import lugar2 from '../assets/images/ellugar_02.png';
import lugar3 from '../assets/images/ellugar_03.png';
import lugar4 from '../assets/images/ellugar_04.png';
import lugar5 from '../assets/images/ellugar_05.png';

import predio1 from '../assets/images/enelpredio (1).jpg';
import predio2 from '../assets/images/enelpredio (2).jpg';
import predio3 from '../assets/images/enelpredio (3).jpg';
import predio4 from '../assets/images/enelpredio (4).jpg';
import predio5 from '../assets/images/enelpredio (5).jpg';

import fogon1 from '../assets/images/fogon_01.png';
import todosJuntos from '../assets/images/todosjuntos_foto.jpg';

import { Proposal, GalleryItem, Testimonial, FAQItem } from '../types';

export { logoSvg, videoPrusik };

export const PROPOSALS: Proposal[] = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños Inolvidables',
    category: 'cumples',
    subtitle: 'Festejos en plena naturaleza con juegos y aventura',
    description: 'Viví un cumpleaños único rodeado de verde, árboles centenarios y aire libre. Juegos guiados por profes, tirolesa, palestra, búsquedas del tesoro y merienda artesanal al aire libre.',
    features: [
      'Coordinación y animación permanente de profesores',
      'Actividades de aventura adaptadas por edades',
      'Uso exclusivo de sectores de parque y sombra',
      'Merienda completa y fogón opcional'
    ],
    image: cump1,
    ageRange: 'De 4 a 15 años',
    duration: '3.5 horas de pura diversión'
  },
  {
    id: 'escolares',
    title: 'Jornadas Educativas & Viajes',
    category: 'escolares',
    subtitle: 'Aprendizaje vivencial y convivencia grupal',
    description: 'Propuestas diseñadas para instituciones educativas. Jornadas de articulación, integración, campamentos educativos y vivencias de campo que potencian el trabajo en equipo y el respeto ambiental.',
    features: [
      'Proyectos pedagógicos adaptados al diseño curricular',
      'Seguridad y predio totalmente cerrado y perimetrado',
      'Infraestructura para contingencias y sanitarios completos',
      'Asesoramiento docente y carpeta pedagógica previa'
    ],
    image: todosJuntos,
    ageRange: 'Nivel Inicial, Primario y Secundario',
    duration: 'Jornada extendida o campamentos de 2 a 3 días'
  },
  {
    id: 'campamentos',
    title: 'Campamentos & Vivencias',
    category: 'campamentos',
    subtitle: 'Noches bajo las estrellas, fogones y aventura',
    description: 'Una experiencia transformadora en Estancia Loma Pampa. Armado de carpas, talleres de cabuyería, orientación, juegos nocturnos y el tradicional fogón con canciones y guitarras.',
    features: [
      'Fogones nocturnos guiados con animación',
      'Talleres de vida en la naturaleza y supervivencia',
      'Seguridad nocturna y monitoreo permanente',
      'Gastronomía casera de campo y cantina saludable'
    ],
    image: fogon1,
    ageRange: 'Grupos juveniles, familias y colegios',
    duration: 'De 1 a 3 noches'
  },
  {
    id: 'grupos',
    title: 'Grupos, Familias & Eventos',
    category: 'grupos',
    subtitle: 'Encuentros corporativos, familiares y deportivos',
    description: 'Un espacio incomparable en Azul para jornadas de integración empresariales, reuniones familiares ampliadas, pretemporadas deportivas y retiros de bienestar.',
    features: [
      'Amplios espacios verdes y salones semicubiertos',
      'Propuestas gastronómicas de campo (asados, picadas)',
      'Actividades recreativas y deportivas a medida',
      'Estacionamiento interno y fácil acceso desde Ruta'
    ],
    image: predio1,
    ageRange: 'Todas las edades',
    duration: 'A medida según requerimiento'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Estancia Loma Pampa - El Lugar',
    category: 'lugar',
    image: lugar1,
    description: 'Cas casco histórico y forestación añosa en Azul, Buenos Aires.'
  },
  {
    id: 'g2',
    title: 'Senderos y Arboledas',
    category: 'lugar',
    image: lugar2,
    description: 'Espacios naturales de gran belleza para caminatas y juegos.'
  },
  {
    id: 'g3',
    title: 'Infraestructura y Confort',
    category: 'lugar',
    image: lugar3,
    description: 'Instalaciones preparadas para recibir grupos con total comodidad.'
  },
  {
    id: 'g4',
    title: 'Rincones con Historia',
    category: 'lugar',
    image: lugar4,
    description: 'Arquitectura rural preservada que invita a la desconexión.'
  },
  {
    id: 'g5',
    title: 'Atardeceres en el Campo',
    category: 'lugar',
    image: lugar5,
    description: 'Puestas de sol únicas sobre las llanuras bonaerenses.'
  },
  {
    id: 'g6',
    title: 'Actividades de Aventura',
    category: 'predio',
    image: predio2,
    description: 'Desafíos físicos y recreativos con elementos certificados.'
  },
  {
    id: 'g7',
    title: 'Juegos y Dinámicas Grupales',
    category: 'predio',
    image: predio3,
    description: 'Profesores especializados coordinando cada propuesta.'
  },
  {
    id: 'g8',
    title: 'Espacios Abiertos',
    category: 'predio',
    image: predio4,
    description: 'Libertad absoluta en un entorno seguro y controlado.'
  },
  {
    id: 'g9',
    title: 'Conexión con la Naturaleza',
    category: 'predio',
    image: predio5,
    description: 'Flora y fauna autóctona para descubrir y valorar.'
  },
  {
    id: 'g10',
    title: 'Festejos de Cumpleaños',
    category: 'cumples',
    image: cump2,
    description: 'Sonrisas y momentos inolvidables entre amigos.'
  },
  {
    id: 'g11',
    title: 'Meriendas al Aire Libre',
    category: 'cumples',
    image: cump3,
    description: 'Momentos compartidos tras las actividades.'
  },
  {
    id: 'g12',
    title: 'Diversión sin Límites',
    category: 'cumples',
    image: cump4,
    description: 'Cumpleaños activos y dinámicos en contacto con el verde.'
  },
  {
    id: 'g13',
    title: 'Tradicional Fogón',
    category: 'fogones',
    image: fogon1,
    description: 'El calor del fuego y la música bajo el cielo estrellado.'
  },
  {
    id: 'g14',
    title: 'Comunidad Prusik',
    category: 'todos',
    image: todosJuntos,
    description: 'Grupos que eligen vivir la experiencia Prusik año tras año.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Mariana Gómez',
    role: 'Mamá de Benicio (9 años)',
    content: '¡El cumpleaños de Benicio fue mágico! Los chicos no pararon de correr, jugar y divertirse con los profes. La organización impecable y el lugar es un paraíso en Azul.',
    rating: 5,
    date: 'Octubre 2025'
  },
  {
    id: 't2',
    author: 'Prof. Esteban Rossi',
    role: 'Colegio San Martin (Azul)',
    content: 'Llevamos a los alumnos de 5to año para la jornada de convivencia y superó todas nuestras expectativas. Seguridad, calidez humana y un predio preparado para todo.',
    rating: 5,
    date: 'Noviembre 2025'
  },
  {
    id: 't3',
    author: 'Lucía y Fernando',
    role: 'Organizadores de Campamento',
    content: 'El fogón y las actividades nocturnas fueron inolvidables. Estancia Loma Pampa tiene esa energía especial que hace que los chicos se conecten entre ellos y con la naturaleza.',
    rating: 5,
    date: 'Diciembre 2025'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Dónde se encuentra ubicado Prusik?',
    answer: 'Nos encontramos en Estancia Loma Pampa, un predio rural exclusivo ubicado en el partido de Azul, Provincia de Buenos Aires, con accesos seguros y fáciles desde las principales rutas.',
    category: 'Ubicación'
  },
  {
    question: '¿Qué incluyen los cumpleaños infantiles?',
    answer: 'Incluyen el uso exclusivo de sectores del parque, coordinación y animación permanente con profesores de educación física, juegos de aventura, materiales deportivos y merienda completa artesanal.',
    category: 'Cumpleaños'
  },
  {
    question: '¿Las actividades se suspenden por lluvia?',
    answer: 'Contamos con amplios espacios semicubiertos y salones preparados para desarrollar propuestas alternativas bajo techo en caso de inclemencias climáticas, asegurando que el evento se realice siempre.',
    category: 'Logística'
  },
  {
    question: '¿Cómo se realizan las reservas y presupuestos?',
    answer: 'Podés contactarnos a través de nuestro formulario web, por WhatsApp o correo electrónico detallando el tipo de evento, cantidad estimada de personas y fecha deseada. Te responderemos a la brevedad con una propuesta a medida.',
    category: 'Reservas'
  },
  {
    question: '¿Hay servicio gastronómico o cantina?',
    answer: 'Sí, ofrecemos opciones de meriendas artesanales, desayunos de campo, almuerzos y asados para grupos y colegios, elaborados con productos frescos de la zona.',
    category: 'Gastronomía'
  }
];
