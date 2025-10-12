import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import heroImage from "@assets/ChatGPT Image 11 de out. de 2025, 22_33_45_1760232835894.png";

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
    const element = document.getElementById('final-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-cyan-200 via-cyan-100 to-blue-100">
      {/* Decorative elements */}
      <Heart className="absolute top-20 left-10 h-8 w-8 text-pink-400 opacity-60" data-testid="icon-heart-1" />
      <Star className="absolute top-12 right-20 h-6 w-6 text-yellow-400 opacity-70" data-testid="icon-star-1" />
      <Star className="absolute bottom-20 left-1/4 h-5 w-5 text-yellow-300 opacity-60" data-testid="icon-star-2" />
      <Heart className="absolute bottom-32 right-1/3 h-6 w-6 text-pink-300 opacity-50" data-testid="icon-heart-2" />
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Left */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {subtitle}
            </p>

            {/* Price Box */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <p className="text-sm md:text-base text-gray-600 mb-2">
                De <span className="line-through">{oldPrice}</span> por apenas
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold text-4xl md:text-5xl px-6 py-3 rounded-xl inline-block shadow-lg">
                {newPrice}
              </div>
              <p className="text-sm md:text-base text-gray-600 mt-3 font-medium">
                {offerText}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                onClick={handleCtaClick}
                className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 text-lg md:text-xl px-8 py-6 h-auto rounded-full font-bold shadow-xl uppercase tracking-wide"
                data-testid="button-cta-hero"
              >
                🛒 {ctaText}
              </Button>
              
              <p className="mt-4 text-sm md:text-base text-gray-700 flex items-center gap-2">
                <span className="text-green-600">✓</span> {guaranteeText}
              </p>
            </div>
          </div>

          {/* Image Right */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={heroImage} 
              alt="21 Dias de Oração" 
              className="rounded-3xl max-w-lg w-full h-auto shadow-2xl"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
