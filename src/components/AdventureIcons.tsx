import React from 'react';
import cascoPng from '../assets/icons/casco.png';

interface IconProps {
  className?: string;
  size?: number;
  stroke?: string;
}

/**
 * Birthday Cake Icon (Torta de cumpleaños de aventura con velitas)
 */
export function BirthdayCakeIcon({ className = 'w-6 h-6', stroke = 'currentColor' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Candle Flame */}
      <path d="M12 2c-.6 1-1.2 1.8-1.2 2.6a1.2 1.2 0 0 0 2.4 0C13.2 3.8 12.6 3 12 2z" fill={stroke} />
      {/* Candle stick */}
      <line x1="12" y1="5.5" x2="12" y2="8.5" strokeWidth="2.4" />
      {/* Top tier */}
      <rect x="6.5" y="8.5" width="11" height="4.5" rx="1.5" strokeWidth="2.1" />
      {/* Top tier decorative icing drip */}
      <path d="M6.5 10.5c1.2.6 2.3.6 3.5 0s2.3-.6 3.5 0 2.3.6 3.5 0" />
      {/* Bottom tier */}
      <rect x="3.5" y="13" width="17" height="6.5" rx="2" strokeWidth="2.1" />
      {/* Bottom tier decorative icing wave */}
      <path d="M3.5 16c1.5.8 3 .8 4.5 0s3-.8 4.5 0 3 .8 4.5 0" />
      {/* Base tray plate */}
      <line x1="2" y1="20.5" x2="22" y2="20.5" strokeWidth="2.3" />
    </svg>
  );
}

/**
 * Adventure Expedition Backpack (Mochila de campo / Salidas Educativas)
 */
export function BackpackIcon({ className = 'w-6 h-6', stroke = 'currentColor' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top handle / carry loop */}
      <path d="M9 4.5a3 3 0 0 1 6 0" strokeWidth="2.2" />
      {/* Main pack body */}
      <rect x="5" y="7" width="14" height="13.5" rx="3.5" strokeWidth="2.1" />
      {/* Flap fold line */}
      <path d="M5 11.5h14" strokeWidth="1.8" />
      {/* Vertical gear straps */}
      <line x1="8.5" y1="7" x2="8.5" y2="12" strokeWidth="2" />
      <line x1="15.5" y1="7" x2="15.5" y2="12" strokeWidth="2" />
      {/* Front pocket with buckle/zipper */}
      <rect x="7.5" y="13.5" width="9" height="5" rx="1.5" strokeWidth="1.8" />
      <line x1="12" y1="13.5" x2="12" y2="15.5" strokeWidth="2" />
      {/* Side canteen / water bottle holder */}
      <path d="M5 13.5H3.8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H5" strokeWidth="1.8" />
      <path d="M19 13.5h1.2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H19" strokeWidth="1.8" />
    </svg>
  );
}

/**
 * Helmet icon using the user's provided helmet image asset
 */
export function HelmetIcon({ className = 'w-6 h-6', size }: IconProps) {
  return (
    <img
      src={cascoPng}
      alt="Casco de aventura"
      style={size ? { width: size, height: size } : undefined}
      className={`object-contain inline-block ${className}`}
    />
  );
}

/**
 * Carabiner (Mosquetón) - fundamental mountaineering & climbing gear
 */
export function CarabinerIcon({ className = 'w-6 h-6', stroke = 'currentColor' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Carabiner body (D-shape) */}
      <path d="M9 3h4a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H9a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" />
      {/* Screw lock gate */}
      <line x1="6" y1="9" x2="6" y2="15" stroke={stroke} strokeWidth="3.2" strokeLinecap="round" />
      <rect x="4.5" y="10.5" width="3" height="3.5" rx="0.8" fill={stroke} stroke={stroke} strokeWidth="0.5" />
    </svg>
  );
}

/**
 * Climbing Rope Coil (Cuerda de escalada / Cabo Prusik)
 */
export function RopeIcon({ className = 'w-6 h-6', stroke = 'currentColor' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Coiled loops */}
      <path d="M6 9c0-2.5 2.5-4.5 6-4.5s6 2 6 4.5c0 3-3 5-6 5s-6 2-6 5c0 2.5 2.5 4.5 6 4.5s6-2 6-4.5" />
      {/* Knot tie strap */}
      <rect x="9" y="10.5" width="6" height="3" rx="1" fill={stroke} />
      <path d="M12 13.5v5.5" stroke={stroke} strokeDasharray="1.5 1.5" />
    </svg>
  );
}

/**
 * Climbing Harness (Arnés de escalada y aventura)
 */
export function HarnessIcon({ className = 'w-6 h-6', stroke = 'currentColor' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Waist belt */}
      <path d="M4 6c3 1.5 13 1.5 16 0" />
      <rect x="10.5" y="4.5" width="3" height="3" rx="0.5" fill={stroke} />
      {/* Leg loops */}
      <circle cx="8" cy="15" r="4" />
      <circle cx="16" cy="15" r="4" />
      {/* Tie-in loop / belay loop */}
      <path d="M12 6.5v6" />
      <path d="M8 11.5h8" />
    </svg>
  );
}

/**
 * Mountain Peak / Alpinismo summit
 */
export function MountainSummitIcon({ className = 'w-6 h-6', stroke = 'currentColor' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20L10 4l6 10 2-3 4 9H2z" />
      <path d="M7 10l3 2 4-2" />
    </svg>
  );
}

/**
 * Adventure Campfire (Fogón de campamento)
 */
export function CampfireIcon({ className = 'w-6 h-6', stroke = 'currentColor' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Crossed logs */}
      <line x1="4" y1="19" x2="20" y2="19" />
      <line x1="5" y1="21" x2="19" y2="17" />
      <line x1="5" y1="17" x2="19" y2="21" />
      {/* Flames */}
      <path d="M12 3c1.5 2.5 3 4 3 6.5a3 3 0 0 1-6 0c0-1.5 1-3.5 3-6.5z" fill={stroke} fillOpacity="0.25" />
      <path d="M12 8c.8 1.2 1.5 2 1.5 3.2a1.5 1.5 0 0 1-3 0c0-.8.5-1.8 1.5-3.2z" fill={stroke} />
    </svg>
  );
}

/**
 * Adventure Compass / Orientación
 */
export function CompassNavIcon({ className = 'w-6 h-6', stroke = 'currentColor' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <polygon points="12 7 14.5 12 12 17 9.5 12 12 7" fill={stroke} />
      <circle cx="12" cy="12" r="1" fill="#fff" />
    </svg>
  );
}
