import { Event } from '@/types/Event';
import Animated from '@/components/animations/Animated';
import EventsCarousel from '@/components/carousels/EventsCarousel';
import getEvents from '@/lib/api/events';

export default async function Schedule() {
  let events: Event[] = [];
  try {
    events = await getEvents();
  } catch (error) {
    console.error('Failed to load events:', error);
  }

  return (
    <section
      id="schedule"
      className="lg:scroll-mt-21 md:scroll-mt-18 scroll-mt-16 flex justify-center sm:my-20 my-10"
    >
      <div className="container-80 flex flex-col gap-10">
        <Animated duration={1.5} distance={100} delay={0.1}>
          <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold text-center">Ближайшие игры</h2>
        </Animated>

        <Animated duration={1.5} distance={200} delay={0.1}>
          <EventsCarousel events={events} />
        </Animated>
      </div>
    </section>
  );
}
