interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="mb-6">
      <p className="text-lg italic text-foreground/90 mb-2">"{quote}"</p>
      <p className="font-semibold text-foreground">— {author}</p>
    </div>
  );
}
