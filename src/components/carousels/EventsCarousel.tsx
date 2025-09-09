'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import EventCard from '@/components/cards/EventCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Event } from '@/types/Event';
import type { Swiper as SwiperClass } from 'swiper';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import Modal from '../modals/Modal';
import { socialMedia } from '@/data/FooterData';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsCarousel({ events }: { events: Event[] }) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  if (events.length === 0) {
    return (
      <div className="h-70 flex flex-col gap-5 items-center justify-center">
        <p className="sm:text-4xl text-3xl font-medium text-center">
          На текущий момент игр не запланировано
        </p>

        <div className="flex flex-col items-center justify-center gap-3">
          <p className="sm:text-2xl text-xl text-center">
            Следите за обновлениями на наших страницах в соцсетях:
          </p>
          <div className="flex justify-center gap-4">
            {socialMedia.slice(0, 2).map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={50}
                  height={50}
                  className="max-sm:w-11 max-sm:h-11"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4 w-full relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={(s) => {
            setSwiper(s);
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          speed={1500}
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            1100: { slidesPerView: 2 },
          }}
          centerInsufficientSlides={true}
          className="w-full"
        >
          {events.map((event, i) => (
            <SwiperSlide key={i}>
              <EventCard event={event} onClick={() => handleEventClick(event)} />
            </SwiperSlide>
          ))}
        </Swiper>

        {swiper && (!isEnd || !isBeginning) && (
          <div className="flex justify-center items-center gap-3">
            <button
              className={`p-3 rounded-full ${
                isBeginning ? 'bg-white/40 cursor-not-allowed' : 'bg-neutral-200 cursor-pointer'
              }`}
              disabled={isBeginning}
              onClick={() => swiper.slidePrev()}
            >
              <ChevronLeft
                className="sm:w-10 sm:h-10 w-8 h-8 text-[var(--violet-light)]"
                strokeWidth={3}
              />
            </button>
            <button
              className={`p-3 rounded-full ${
                isEnd ? 'bg-white/40 cursor-not-allowed' : 'bg-neutral-200 cursor-pointer'
              }`}
              disabled={isEnd}
              onClick={() => swiper.slideNext()}
            >
              <ChevronRight
                className="sm:w-10 sm:h-10 w-8 h-8 text-[var(--violet-light)]"
                strokeWidth={3}
              />
            </button>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        title="Регистрация на событие"
        className="custom-modal-class"
        events={events}
        selectedEvent={selectedEvent}
      />
    </>
  );
}
