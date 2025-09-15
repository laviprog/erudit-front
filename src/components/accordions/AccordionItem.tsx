'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { FAQItem } from '@/types/FAQ';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export default function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string | number>(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="rounded-xl bg-white/97 text-[var(--violet-light)] sm:px-4 px-3 ">
      <button
        onClick={() => onToggle(item.id)}
        className="cursor-pointer flex w-full items-center justify-between py-5"
      >
        <div className="flex items-center sm:gap-3 gap-2">
          <div>
            <DynamicIcon name={item.icon} className="size-6 stroke-[3]" />
          </div>
          <span className="sm:text-lg text-lg font-semibold text-start">{item.question}</span>
        </div>
        <div>
          <ChevronDown
            className={`size-6 transition-transform duration-300 stroke-[3] ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      <div style={{ height }} className="text-black font-medium overflow-hidden transition-all duration-500 ease-in-out">
        <div ref={contentRef} className="pb-5">
          <p className="max-sm:text-base">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
