'use client';

import { useState } from 'react';
import Link from 'next/link';
import Accordion from '@/components/faq/accordions/Accordion';
import { faqItems } from '@/data/FAQ';
import { ChevronRight } from 'lucide-react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="lg:scroll-mt-21 md:scroll-mt-18 scroll-mt-16 py-20 flex justify-center"
    >
      <div className="max-w-5xl sm:w-[80%] max-sm:px-4">
        <div className="flex flex-col gap-10 lg:flex-row md:gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-40">
              <h2 className="text-3xl font-bold">Часто задаваемые вопросы</h2>
              <p className="mt-4 font-medium sm:text-lg text-white/85">
                Не нашли ответ на свой вопрос?
              </p>

              <Link
                href="/contacts"
                className="inline-flex items-center font-bold group sm:text-lg"
              >
                Свяжитесь с нами
                <ChevronRight
                  className="size-4 stroke-4 transition-transform duration-300 group-hover:translate-x-1 sm:translate-y-[1.5px] translate-y-[1px]"
                />
              </Link>
            </div>
          </div>
          <div className="lg:w-2/3">
            <Accordion items={faqItems} openItem={openItem} onToggle={handleToggle} />
          </div>
        </div>
      </div>
    </section>
  );
}
