'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
  images: string[];
  interval?: number;
}

export default function HeroBackground({ images, interval = 5000 }: HeroBackgroundProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`hero-background-${i}`}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-[2000ms] ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--violet)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[var(--violet)]/90"></div>
    </div>
  );
}
