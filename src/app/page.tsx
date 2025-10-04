import Hero from '@/components/sections/hero/Hero';
import Schedule from '@/components/sections/Schedule';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import HowItWorks from '@/components/sections/HowItWorks';
import Gallery from '@/components/sections/Gallery';
import Reviews from '@/components/sections/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Schedule />
      <section className="bg-white/98 rounded-4xl">
        <Gallery />
        <Reviews />
      </section>
      <FAQ />
      <Contact />
    </>
  );
}
