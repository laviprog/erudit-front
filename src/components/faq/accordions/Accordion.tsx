import AccordionItem from '@/components/faq/accordions/AccordionItem';
import { FAQItem } from '@/types/FAQ';

interface AccordionProps {
  items: FAQItem[];
  openItem: string | null;
  onToggle: (id: string) => void;
}

export default function Accordion({ items, openItem, onToggle }: AccordionProps) {
  return (
    <div className="w-full space-y-2">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItem === item.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
