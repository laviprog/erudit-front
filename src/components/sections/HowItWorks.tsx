import Video from '@/components/videos/Video';
import Link from 'next/link';
import type { IconName } from 'lucide-react/dynamic';
import { DynamicIcon } from 'lucide-react/dynamic';
import Fade from '@/components/animations/Fade';

function Badge({ badge }: { badge: { title: string; description: string } }) {
  const { title, description } = badge;
  return (
    <div className="flex flex-col">
      <span className="md:text-[80px] xs:text-[60px] text-[42px] md:leading-15 xs:leading-12 leading-8 font-bold max-sm:font-black text-center">
        {title}
      </span>
      <span className="md:text-[52px] xs:text-[40px] text-[27px] md:leading-10 xs:leading-8 leading-6 font-bold max-sm:font-black text-center">
        {description}
      </span>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-white/15 rounded-2xl xl:p-3 p-2 xl:text-xl text-lg font-medium flex items-center">
      {children}
    </div>
  );
}

export default function HowItWorks() {
  const badges = [
    {
      title: '7',
      description: 'раундов',
    },
    {
      title: '2+',
      description: 'часа',
    },
    {
      title: '2-10',
      description: 'человек',
    },
  ];

  const cards: { icon: IconName; text: string }[] = [
    {
      icon: 'mic',
      text: 'Каждую игру ведёт харизматичный ведущий: он задаёт вопросы и держит драйв до финала',
    },
    {
      icon: 'users',
      text: 'Вы с командой обсуждаете вопросы, спорите над вариантами и вместе ищете правильный ответ',
    },
    {
      icon: 'utensils',
      text: 'Во время игры можно вкусно перекусить и выпить, чтобы отдых был еще приятнее',
    },
    {
      icon: 'gift',
      text: 'В конце вас ждут призы от нас и партнёров, а ещё крутые фото, чтобы сохранить воспоминания',
    },
  ];

  return (
    <section id="how-it-works" className="pt-5">
      <div className="w-[95%] max-w-6xl mx-auto flex flex-col gap-10 max-lg:gap-5">
        <Fade delay={200}>
          <h2 className="md:text-6xl text-5xl font-bold text-center">Как это происходит?</h2>
        </Fade>
        <div className="flex max-lg:flex-col lg:gap-2 gap-5">
          <Fade
            className="lg:w-2/3 flex flex-col justify-around xl:gap-5 gap-6 lg:bg-white/5 lg:border lg:border-white/20 lg:shadow-2xl lg:rounded-3xl lg:p-2"
            delay={400}
          >
            <div className="grid grid-cols-3">
              {badges.map((badge, i) => (
                <Badge key={i} badge={badge} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 max-lg:gap-4">
              {cards.map((card, i) => (
                <Card key={i}>
                  <div className="flex gap-3 items-center">
                    <div>
                      <DynamicIcon name={card.icon} className="xl:size-17 size-14 stroke-[2.5]" />
                    </div>
                    <p className="text-white/90">{card.text}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-col xl:gap-3 gap-2 items-center">
              <Link href="/#schedule" className="w-full">
                <button className="btn btn-primary cursor-pointer w-full">
                  Записаться на игру
                </button>
              </Link>
              <Link href="/#contact-form" className="w-full">
                <button className="btn btn-secondary cursor-pointer w-full">
                  Связаться с нами
                </button>
              </Link>
            </div>
          </Fade>
          <Fade delay={400} className="max-lg:w-full lg:w-1/3">
            <div className="lg:max-w-full md:max-w-1/2 sm:max-w-2/3 xs:max-w-4/5 lg:shadow-2xl max-lg:mx-auto rounded-3xl border border-white/20">
              <Video src="/videos/erudit-party-preview.mp4" />
            </div>
          </Fade>
        </div>
        <div className="lg:hidden flex max-sm:flex-col sm:gap-5 gap-3 items-center justify-center max-sm:items-stretch">
          <Fade delay={200}>
            <Link href="/#schedule">
              <button className="btn btn-primary cursor-pointer w-full">Записаться на игру</button>
            </Link>
          </Fade>
          <Fade delay={200}>
            <Link href="/#contact-form">
              <button className="btn btn-secondary cursor-pointer w-full">Связаться с нами</button>
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  );
}
