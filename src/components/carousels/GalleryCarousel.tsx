'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperClass } from 'swiper';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { Photo } from '@/types/Photo';
import Link from 'next/link';

function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <div className="relative w-full aspect-square">
      <Image
        src={photo.url}
        alt={photo.title + ' ' + photo.date}
        fill
        className="pointer-events-none select-none object-cover"
      />
      {/* смотреть все фото (кнопка), градиент темный (затемнение) к низу + описание */}
      <div className="absolute xs:bottom-5 xs:left-7 bottom-4 left-3 z-10">
        <div className="mb-3">
          <h2 className="text-2xl font-bold">{photo.title}</h2>
          <p className="text-xl font-medium">{photo.date}</p>
        </div>
        <Link href={photo.urlAlbum} target="_blank" rel="noopener noreferrer">
          <button className="uppercase xs:p-3 p-2 bg-[var(--violet-light)] hover:bg-[var(--violet)] transition-colors duration-200 xs:rounded-xl rounded-md cursor-pointer font-medium xs:text-lg">
            Смотреть все фото
          </button>
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
}

export default function GalleryCarousel({ photos }: { photos: Photo[] }) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <>
      <div className="relative max-w-3xl lg:w-3/5 sm:w-4/5 w-full mx-auto rounded-2xl bg-black">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          autoplay={{ delay: 5000 }}
          effect="fade"
          onSwiper={(s) => {
            setSwiper(s);
          }}
          fadeEffect={{ crossFade: true }}
          rewind={true}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
          }}
          allowTouchMove={false}
          slidesPerView={1}
          centerInsufficientSlides={true}
          className="rounded-2xl w-full"
        >
          {photos.map((photo, i) => (
            <SwiperSlide key={i}>
              <PhotoCard photo={photo} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute xs:bottom-5 xs:right-7 bottom-3 right-3 z-10 flex xs:gap-2 gap-1">
          <button
            className={`p-2 rounded-full bg-[var(--violet-light)] cursor-pointer hover:brightness-90 transition`}
            onClick={handlePrev}
          >
            <ChevronLeft className="md:w-12 md:h-12 xs:w-10 xs:h-10 w-8 h-8" strokeWidth={3} />
          </button>
          <button
            className={`p-2 rounded-full bg-[var(--violet-light)] cursor-pointer hover:brightness-90 transition`}
            onClick={handleNext}
          >
            <ChevronRight className="md:w-12 md:h-12 xs:w-10 xs:h-10 w-8 h-8" strokeWidth={3} />
          </button>
        </div>
      </div>
    </>
  );
}
