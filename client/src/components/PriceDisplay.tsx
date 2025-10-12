interface PriceDisplayProps {
  oldPrice: string;
  newPrice: string;
  className?: string;
}

export default function PriceDisplay({ oldPrice, newPrice, className = "" }: PriceDisplayProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="text-2xl md:text-3xl line-through text-muted-foreground">{oldPrice}</span>
      <span className="text-4xl md:text-5xl font-bold text-primary">{newPrice}</span>
    </div>
  );
}
