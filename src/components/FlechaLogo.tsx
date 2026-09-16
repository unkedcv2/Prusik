import React from 'react';
import flechaLogoPng from '../assets/icons/flecha_logo.png';
import { motion } from 'motion/react';

export interface FlechaLogoProps {
  className?: string;
  color?: 'orange' | 'blue' | 'white' | 'dark' | string;
  direction?: 'right' | 'left' | 'down' | 'up';
  animate?: 'hover' | 'bounce' | 'pulse' | 'slide-x' | 'float-y' | 'none';
  style?: React.CSSProperties;
}

const colorMap: Record<string, string> = {
  orange: '#f17e01',
  blue: '#006bb3',
  white: '#ffffff',
  dark: '#1c1917',
};

export function FlechaLogo({
  className = 'w-10 h-3.5',
  color = 'orange',
  direction = 'right',
  animate = 'none',
  style = {},
}: FlechaLogoProps) {
  const resolvedColor = colorMap[color] || color;

  const rotationClass = {
    right: 'rotate-0',
    down: 'rotate-90',
    left: 'rotate-180',
    up: '-rotate-90',
  }[direction];

  // Base mask element that perfectly colors the PNG arrow
  const maskStyle: React.CSSProperties = {
    maskImage: `url(${flechaLogoPng})`,
    WebkitMaskImage: `url(${flechaLogoPng})`,
    maskSize: 'contain',
    WebkitMaskSize: 'contain',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
    maskPosition: 'center',
    backgroundColor: resolvedColor,
    ...style,
  };

  if (animate === 'slide-x') {
    return (
      <motion.span
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className={`inline-block shrink-0 transition-transform ${rotationClass} ${className}`}
        style={maskStyle}
        aria-hidden="true"
      />
    );
  }

  if (animate === 'float-y') {
    return (
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className={`inline-block shrink-0 transition-transform ${rotationClass} ${className}`}
        style={maskStyle}
        aria-hidden="true"
      />
    );
  }

  if (animate === 'pulse') {
    return (
      <motion.span
        animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className={`inline-block shrink-0 transition-transform ${rotationClass} ${className}`}
        style={maskStyle}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={`inline-block shrink-0 transition-transform ${rotationClass} ${className}`}
      style={maskStyle}
      aria-hidden="true"
    />
  );
}

export default FlechaLogo;
