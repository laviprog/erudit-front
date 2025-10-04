import Link from 'next/link';
import { Metadata } from 'next';
import Fade from '@/components/animations/Fade';

export const metadata: Metadata = {
  title: 'О нас - ЭрудитПати | Организаторы интеллектуальных игр в Камышине',
  description:
    'ЭрудитПати - команда организаторов интеллектуально-развлекательных игр в Камышине. Наша миссия и опыт проведения квизов и викторин для взрослых и семей.',
  openGraph: {
    title: 'О нас - ЭрудитПати',
    description: 'Узнайте больше об организаторах интеллектуальных игр в Камышине',
    url: 'https://erudit-party.ru/about',
  },
  alternates: {
    canonical: 'https://erudit-party.ru/about',
  },
};

export default function About() {
  const stats = [
    {
      number: '100+',
      label: 'Проведённых игр',
    },
    {
      number: '8+',
      label: 'Лет работаем',
    },
  ];

  return (
    <div className="sm:pt-25 pt-20 pb-10 rounded-4xl bg-white/98 flex flex-col justify-center items-center">
      <div className="container-80">
        <div className="text-center max-w-4xl mx-auto flex flex-col sm:gap-10 gap-4">
          <Fade>
            <h1 className="h1 text-[var(--violet-light)] max-sm:!text-6xl">О нас</h1>
          </Fade>

          <Fade delay={100}>
            <p className="text-2xl md:text-3xl text-[var(--gray-dark)] max-w-3xl mx-auto">
              Мы создаём незабываемые интеллектуальные вечера в Камышине, объединяя людей через
              игру, знания и дружескую атмосферу
            </p>
          </Fade>
          <Fade delay={300}>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 w-full sm:gap-6 md:gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-4xl p-3 xs:p-5 sm:p-8 border-4 border-[var(--violet-light)]"
                >
                  <div className="text-6xl md:text-7xl font-black text-[var(--violet-light)]">
                    {stat.number}
                  </div>
                  <div className="text-lg md:text-xl text-[var(--gray-dark)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          <Fade delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/#schedule"
                className="btn-card btn-open !text-xl sm:text-xl !font-semibold border-2 border-[var(--violet-light)] hover:border-[var(--violet)] text-white px-8 py-4 w-full sm:w-auto"
              >
                Записаться на игру
              </Link>

              <Link
                href="/contacts"
                className="btn-card bg-white border-2 border-[var(--violet-light)] hover:bg-[var(--violet-light)] !text-[var(--violet)] hover:!text-white !text-xl sm:text-xl !font-semibold px-8 py-4 w-full sm:w-auto transition"
              >
                Связаться с нами
              </Link>
            </div>
          </Fade>

          <div className="flex flex-col gap-10 max-sm:gap-6 max-sm:pt-5">
            <Fade delay={500}>
              <h2 className="text-5xl font-black text-[var(--violet-light)]">Наши ценности</h2>
            </Fade>

            <Fade delay={600}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: '🎯',
                    title: 'Качественные вопросы',
                    description: 'Авторские задания, проверенные временем и участниками',
                  },
                  {
                    icon: '🤝',
                    title: 'Дружелюбная атмосфера',
                    description: 'Создаём пространство для общения и новых знакомств',
                  },
                  {
                    icon: '🏆',
                    title: 'Честная игра',
                    description: 'Прозрачные правила и объективное судейство',
                  },
                  {
                    icon: '❤️',
                    title: 'Любовь к знаниям',
                    description: 'Вдохновляем развиваться и узнавать новое',
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white border-4 border-[var(--violet-light)] rounded-3xl p-5 text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className="p-3 flex items-center justify-center rounded-full bg-[var(--violet-light)]/80 text-4xl sm:text-5xl">
                        {value.icon}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 max-sm:gap-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[var(--violet-light)]">
                        {value.title}
                      </h3>

                      <p className="text-lg sm:text-xl font-medium text-[var(--gray-dark)]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
