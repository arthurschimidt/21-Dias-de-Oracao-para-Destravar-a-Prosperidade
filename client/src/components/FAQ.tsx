import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
          <AccordionTrigger className="text-left text-lg font-medium" data-testid={`faq-question-${index}`}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-foreground/80" data-testid={`faq-answer-${index}`}>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
