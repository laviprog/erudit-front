'use client';

import { useEffect, useState } from 'react';
import { bgImages } from '@/data/HeroData';
import Fade from '@/components/animations/Fade';
import ScrollVelocity from '@/components/animations/ScrollVelocity';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const images = bgImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--violet)]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[var(--violet)]"></div>

      <div className="w-full h-full flex justify-center items-center z-10 relative">
        <div className="w-[80%] max-w-4xl flex flex-col gap-10 items-center">
          <div className="flex flex-col items-center gap-5">
            <Fade delay={100}>
              <h1 className="h1">Квизы и развлекательные игры в Камышине!</h1>
            </Fade>
            <Fade delay={300}>
              <p className="p">
                Интеллектуально-развлекательные игры для компаний, семей и друзей. Играй, соревнуйся
                и заказывай квизы на праздники в своём городе
              </p>
            </Fade>
          </div>

          <div className="flex gap-5">
            <Fade delay={400}>
              <button className="btn btn-primary cursor-pointer">Расписание</button>
            </Fade>
            <Fade delay={500}>
              <button className="btn btn-secondary cursor-pointer">Посмотреть</button>
            </Fade>
          </div>
        </div>
      </div>

      {/*<ScrollVelocity*/}
      {/*  texts={['Эрудит ✦ Party ✦ Квиз ✦']}*/}
      {/*  velocity={100}*/}
      {/*/>*/}
    </div>
  );
}
