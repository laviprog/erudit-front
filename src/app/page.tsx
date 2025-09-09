import Hero from '@/components/sections/Hero';
import Schedule from '@/components/sections/Schedule';
import FAQ from '@/components/faq/FAQ';

export default function Home() {
  return (
    <>
      <Hero />

      <Schedule />

      <div className="h-screen w-screen flex justify-center"></div>

      <div className="w-screen h-screen bg-white rounded-4xl"></div>

      <FAQ />
    </>
  );
}
