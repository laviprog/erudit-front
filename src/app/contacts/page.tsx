import ContactForm from '@/components/form/ContactForm';
import Fade from '@/components/animations/Fade';
import { socialMedia } from '@/data/FooterData';
import Image from 'next/image';
import Link from 'next/link';
import ContactCard from '@/components/cards/ContactCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты ЭрудитПати | Записаться на интеллектуальные игры в Камышине',
  description:
    'Свяжитесь с ЭрудитПати для записи на квизы в Камышине. Телефон, почта и социальные сети. Организуем корпоративные и семейные интеллектуальные игры.',
  openGraph: {
    title: 'Контакты ЭрудитПати',
    description:
      'Запишитесь на интеллектуальные игры в Камышине. Контакты для записи и консультаций',
    url: 'https://www.erudit-party.ru/contacts',
  },
  alternates: {
    canonical: 'https://www.erudit-party.ru/contacts',
  },
};

export default function Contacts() {
  return (
    <>
      <div className="w-screen md:pt-25 pt-20 pb-10 rounded-4xl bg-white/98 flex flex-col gap-10 justify-center items-center">
        <div className="flex container-80 break-words justify-center text-[var(--violet-light)] font-black text-center">
          <Fade>
            <h1 className="h1">Контакты</h1>
          </Fade>
        </div>

        <div className="container-80">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 max-lg:max-w-xl max-md:max-w-lg max-sm:max-w-full max-lg:mx-auto">
            <Fade delay={200}>
              <ContactCard
                label="Телефон"
                value="+7 (927) 501-44-76"
                subtitle="Пн–Пт 10:00–19:00"
                copyText="+79275014476"
                href="tel:+79275014476"
              />
            </Fade>

            <Fade delay={200}>
              <ContactCard
                label="Email"
                value="info@erudit-party.ru"
                subtitle="Отвечаем в течение дня"
                copyText="info@erudit-party.ru"
                href="mailto:info@erudit-party.ru"
              />
            </Fade>

            <Fade delay={200}>
              <div className="group rounded-2xl border p-4 transition bg-white shadow-md flex flex-col gap-2 sm:col-span-2 md:col-span-1">
                <div className="text-sm text-neutral-500">Свяжитесь с нами в мессенджерах</div>
                <div className="w-full flex gap-3 sm:gap-5 flex-wrap">
                  {socialMedia.map((item, index) => (
                    <Link
                      key={index}
                      href={item.personalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="p-1.5 border rounded-xl hover:bg-gray-100 transition hover:text-gray-500"
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={35}
                        height={35}
                        className="w-8 h-8 sm:w-9 sm:h-9"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <Fade delay={400} className="max-sm:w-full max-sm:mx-2 px-4 sm:px-0">
          <ContactForm />
        </Fade>
      </div>
    </>
  );
}
