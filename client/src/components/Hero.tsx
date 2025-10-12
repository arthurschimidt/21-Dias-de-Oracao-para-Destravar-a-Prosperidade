import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  oldPrice: string;
  newPrice: string;
  ctaText: string;
  ctaLink: string;
  offerText?: string;
  guaranteeText?: string;
}

export default function Hero({
  title,
  subtitle,
  oldPrice,
  newPrice,
  ctaText,
  ctaLink,
  offerText = "Oferta por tempo limitado!",
  guaranteeText = "Garantia de 7 dias ou seu dinheiro de volta!",
}: HeroProps) {
  const handleCtaClick = () => {
    console.log("CTA clicked:", ctaLink);
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-chart-3 to-chart-2 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-8 py-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-8 w-8" />
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <Sparkles className="h-8 w-8" />
        </div>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95">
          {subtitle}
        </p>

        <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl font-bold mb-6">
          <span className="line-through opacity-60">{oldPrice}</span>
          <span className="text-5xl">{newPrice}</span>
        </div>

        <p className="text-lg mb-6 font-medium">{offerText}</p>

        <Button
          size="lg"
          onClick={handleCtaClick}
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 h-auto rounded-full font-semibold transition-transform hover:scale-105"
          data-testid="button-cta-hero"
        >
          {ctaText}
        </Button>

        <p className="mt-6 text-sm opacity-90">{guaranteeText}</p>
      </div>
    </header>
  );
}
