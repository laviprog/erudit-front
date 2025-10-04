'use client';

import { useState } from 'react';
import Link from 'next/link';
import Accordion from '@/components/accordions/Accordion';
import { faqItems } from '@/data/FAQ';
import { ChevronRight } from 'lucide-react';
import Animated from '@/components/animations/Animated';
import Fade from '@/components/animations/Fade';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="lg:scroll-mt-21 md:scroll-mt-18 scroll-mt-16 sm:py-20 py-10 flex justify-center"
    >
      <div className="max-w-5xl sm:w-[80%] max-sm:px-4">
        <div className="flex flex-col sm:gap-10 gap-5 lg:flex-row md:gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <Fade delay={200}>
                <h2 className="text-3xl font-bold">Часто задаваемые вопросы</h2>
                <p className="sm:mt-4 mt-2 font-medium text-lg text-white/90">
                  Не нашли ответ на свой вопрос?
                </p>

                <Link
                  href="/contacts"
                  className="inline-flex gap-0.5 items-center font-bold group text-lg text-white/85 transition-colors duration-200 hover:text-white active:text-white"
                >
                  Свяжитесь с нами
                  <ChevronRight className="size-4 stroke-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1 sm:translate-y-[1.5px] translate-y-[1px]" />
                </Link>
              </Fade>
            </div>
          </div>
          <div className="lg:w-2/3">
            <Fade delay={200}>
              <Accordion items={faqItems} openItem={openItem} onToggle={handleToggle} />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
