'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import Image from 'next/image';
import { reviews } from '@/data/Reviews';

interface Review {
  body: string;
  photoUrl: string;
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-[var(--violet)] rounded-2xl">
      <Image
        src={review.photoUrl}
        alt="Review Photo"
        width={800}
        height={800}
        className="pointer-events-none select-none object-cover rounded-2xl w-full"
      />
      <p className="text-lg lg:text-xl text-center font-medium sm:p-3 p-1 max-md:h-[210px] overflow-y-auto">
        {review.body}
      </p>
    </div>
  );
}

export default function ReviewsCarousel() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div className="max-w-4xl lg:w-4/5 sm:w-4/5 w-full flex items-center gap-5 mx-auto max-md:flex-col">
      <button
        className={`p-2 rounded-full bg-[var(--violet-light)] cursor-pointer max-md:hidden hover:brightness-90 transition`}
        onClick={handlePrev}
      >
        <ChevronLeft className="md:w-12 md:h-12 xs:w-10 xs:h-10 w-8 h-8" strokeWidth={3} />
      </button>
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
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`p-2 rounded-full bg-[var(--violet-light)] cursor-pointer max-md:hidden hover:brightness-90 transition`}
        onClick={handleNext}
      >
        <ChevronRight className="md:w-12 md:h-12 xs:w-10 xs:h-10 w-8 h-8" strokeWidth={3} />
      </button>

      <div className="md:hidden flex gap-2">
        <button
          className={`p-2 rounded-full bg-[var(--violet-light)] cursor-pointer hover:brightness-90 transition`}
          onClick={handlePrev}
        >
          <ChevronLeft className="w-12 h-12" strokeWidth={3} />
        </button>
        <button
          className={`p-2 rounded-full bg-[var(--violet-light)] cursor-pointer hover:brightness-90 transition`}
          onClick={handleNext}
        >
          <ChevronRight className="w-12 h-12" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
