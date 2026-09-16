export interface Proposal {
  id: string;
  title: string;
  category: 'cumples' | 'escolares' | 'campamentos' | 'grupos';
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  ageRange?: string;
  duration?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'lugar' | 'predio' | 'cumples' | 'fogones' | 'todos';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormState {
  eventType: string;
  participants: number;
  date: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}
