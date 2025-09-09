'use client';

import { useEffect, useState } from 'react';
import { bgImages } from '@/data/HeroData';
import Fade from '@/components/animations/Fade';
import Link from 'next/link';
// import ScrollVelocity from '@/components/animations/ScrollVelocity';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const images = bgImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="w-screen h-screen">
      <div
        className="w-full h-full relative bg-cover bg-center transition-all duration-1500"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--violet)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[var(--violet)]/90"></div>

        <div className="w-full h-full flex justify-center items-center z-10 relative">
          <div className="container-80 max-w-4xl flex flex-col gap-10 max-sm:pt-10 items-center">
            <div className="max-w-4xl flex flex-col items-center sm:gap-5 gap-3">
              <Fade>
                <h1 className="h1">Эрудит Пати – интеллектуальные игры в Камышине!</h1>
              </Fade>
              <Fade delay={200}>
                <p className="p text-white/85">
                  Интеллектуально-развлекательные квизы для компаний, семей и друзей. Прими вызов и
                  стань лучшим знатоком в своём городе!
                </p>
              </Fade>
            </div>

            <div className="flex max-sm:flex-col sm:gap-5 gap-3 items-center max-sm:items-stretch">
              <Fade delay={300}>
                <Link href="/#">
                  <button className="btn btn-primary cursor-pointer w-full">
                    Записаться на игру
                  </button>
                </Link>
              </Fade>
              <Fade delay={400}>
                <Link href="/#schedule">
                  <button className="btn btn-secondary cursor-pointer w-full">
                    Посмотреть расписание
                  </button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>

        {/*<ScrollVelocity*/}
        {/*  texts={['Эрудит ✦ Party ✦ Квиз ✦']}*/}
        {/*  velocity={100}*/}
        {/*/>*/}
      </div>
    </section>
  );
}
