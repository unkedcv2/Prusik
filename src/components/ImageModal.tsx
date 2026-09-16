import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imgUrl: string | null;
  title: string | null;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imgUrl, title, onClose }: ImageModalProps) {
  if (!isOpen || !imgUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950">
          <h3 className="text-white font-bold text-lg">{title || 'Vista Previa'}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 bg-stone-950 flex items-center justify-center max-h-[80vh]">
          <img
            src={imgUrl}
            alt={title || 'Imagen ampliada'}
            className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
