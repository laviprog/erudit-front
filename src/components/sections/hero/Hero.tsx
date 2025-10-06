'use client';

import Fade from '@/components/animations/Fade';
import Link from 'next/link';
import { bgImages } from '@/data/HeroData';
import ScrollVelocity from '@/components/animations/ScrollVelocity';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section id="hero" className="relative w-screen h-screen overflow-hidden">
      <HeroBackground images={bgImages} />

      <div className="relative z-10 w-full h-full flex justify-center items-center">
        <div className="container-80 max-w-4xl flex flex-col gap-10 max-sm:pt-10 items-center">
          <div className="max-w-4xl flex flex-col items-center sm:gap-5 gap-3">
            <Fade>
              <h1 className="h1 max-xs:hidden">Эрудит Пати – интеллектуальные игры в Камышине!</h1>
              <h1 className="h1 xs:hidden">Эрудит Пати – лучшие квизы в Камышине!</h1>
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
              <Link href="/#schedule">
                <button className="btn btn-primary cursor-pointer w-full">
                  Записаться на игру
                </button>
              </Link>
            </Fade>
            <Fade delay={400}>
              <Link href="/#contact-form">
                <button className="btn btn-secondary cursor-pointer w-full">
                  Связаться с нами
                </button>
              </Link>
            </Fade>
          </div>
        </div>
      </div>

      <Fade delay={100}>
        <ScrollVelocity texts={['Драйв ✦ Смех ✦ Эмоции ✦ Друзья ✦ Радость ✦']} velocity={100} />
      </Fade>
    </section>
  );
}
