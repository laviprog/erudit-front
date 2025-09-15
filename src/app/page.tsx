import Hero from '@/components/sections/hero/Hero';
import Schedule from '@/components/sections/Schedule';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import HowItWorks from '@/components/sections/HowItWorks';

export default function Home() {
  return (
    <>
      <Hero />

      <HowItWorks />

      <Schedule />

      <div className="w-screen h-screen bg-white rounded-4xl"></div>

      <FAQ />

      <Contact />
    </>
  );
}
