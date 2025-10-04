import { Event } from '@/types/Event';
import EventsCarousel from '@/components/carousels/EventsCarousel';
import getEvents from '@/lib/api/events';
import Fade from '@/components/animations/Fade';

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
        <Fade delay={200}>
          <h2 className="h2">Ближайшие игры</h2>
        </Fade>

        <Fade delay={400}>
          <EventsCarousel events={events} />
        </Fade>
      </div>
    </section>
  );
}
