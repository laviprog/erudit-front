'use client';

import { Event } from '@/types/Event';
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  event: Event;
  className?: string;
  onClick?: () => void;
}

export default function EventCard({ event, className, onClick }: Props) {
  const regStart = new Date(event.registrationStart).getTime();
  const regEnd = new Date(event.registrationEnd).getTime();
  const eventDate = new Date(event.datetime).toLocaleString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const [currentTime, setCurrentTime] = useState(Date.now());

  const status = useMemo(() => {
    if (currentTime < regStart) return 'before';
    if (currentTime >= regStart && currentTime <= regEnd) return 'open';
    return 'closed';
  }, [currentTime, regStart, regEnd]);

  // const spotsLeft = Math.max(0, event.maxTeams - event.teamsRegistered);

  const formatLabel = () => {
    switch (event.format) {
      case 'classic':
        return 'Классический';
      case 'family':
        return 'Семейный';
      default:
        return undefined;
    }
  };

  useEffect(() => {
    if (status === 'closed') return;

    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [status]);

  const timeLeft = regStart - currentTime;

  const formatTimeLeft = (ms: number) => {
    if (ms <= 0) return 'Регистрация открывается...';
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (days > 0) return `${days}д ${hours}ч`;
    if (hours > 0) return `${hours}ч ${minutes}м`;
    if (minutes > 0) return `${minutes}м ${seconds}с`;
    return `${seconds}с`;
  };

  return (
    <div
      className={clsx(
        'bg-neutral-100 rounded-2xl overflow-hidden flex flex-col transition',
        className
      )}
    >
      {event.imageUrl && (
        <div className="relative lg:h-55 md:h-50 h-40 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            priority={true}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 to-transparent" />

          {event.theme && (
            <span className="absolute top-3 left-3 bg-[var(--violet)]/90 text-white px-3 py-1 rounded-full shadow-md">
              {event.theme}
            </span>
          )}

          <span className="absolute top-3 right-3 bg-white/90 text-gray-700 font-bold px-3 py-1 rounded-full">
            #{event.number}
          </span>
          {/*{status == 'open' && (*/}
          {/*  <span*/}
          {/*    className={`px-3 py-1 absolute bottom-3 right-3 rounded-full ${*/}
          {/*      spotsLeft > 5 ? 'bg-green-300/80 text-green-700' : 'bg-red-300/80 text-red-700'*/}
          {/*    }`}*/}
          {/*  >*/}
          {/*    {spotsLeft > 0 ? `Осталось мест: ${spotsLeft}` : 'Мест нет'}*/}
          {/*  </span>*/}
          {/*)}*/}
        </div>
      )}

      {/* Контент */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="md:text-2xl text-xl font-bold text-gray-900 line-clamp-1">
            {event.title}
          </h3>
          <div className="max-md:h-18 flex flex-col justify-center">
            <p className="text-[var(--dark)]">📅 {eventDate}</p>
            <p className="text-[var(--dark)]">📍 {event.location}</p>
          </div>
          <div className="flex gap-2 flex-wrap lg:mt-1">
            {formatLabel() && <span className="badge max-lg:hidden">{formatLabel()}</span>}
            <span className="badge">⏱ {event.duration} мин</span>
            <span className="badge">💸 {event.price} ₽/чел</span>
          </div>
          <p className="text-[var(--dark)] h-19 overflow-y-auto flex">{event.description}</p>
        </div>

        {/* Кнопка регистрации */}
        <div className="mt-3 lg:flex-row flex flex-col gap-2">
          <div className="lg:w-2/3">
            {status === 'before' && (
              <button disabled className="btn-card btn-close">
                Откроется через: {formatTimeLeft(timeLeft)}
              </button>
            )}
            {status === 'open' && (
              <button className="btn-card btn-open" onClick={onClick}>
                {/*{spotsLeft > 0 ? 'Записаться' : 'Мест нет'}*/}
                Записаться
              </button>
            )}
            {status === 'closed' && (
              <button disabled className="btn-card btn-close">
                Регистрация закрыта
              </button>
            )}
          </div>
          <div className="lg:w-1/3 flex items-center justify-center">
            <Link
              // href={`/events/${event.id}}`}
              href="/"
              className="inline-flex gap-0.5 items-center font-bold group sm:text-lg text-[var(--violet-light)] transition-colors duration-200 hover:text-[var(--violet)] active:text-[var(--violet)]"
            >
              Подробнее
              <ChevronRight className="size-4 stroke-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 sm:translate-y-[1.5px] translate-y-[1px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
