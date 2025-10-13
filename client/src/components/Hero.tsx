import { Button } from "@/components/ui/button";
import { Heart, Star, ShoppingCart, Check } from "lucide-react";
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
    window.open('https://pay.kiwify.com.br/SFL2mGL', '_blank');
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-cyan-400 via-cyan-300 to-teal-300 py-16 lg:py-20">
      {/* Decorative elements */}
      <Heart className="absolute top-20 left-10 h-10 w-10 text-pink-400 opacity-60 animate-breathe-slow" data-testid="icon-heart-1" />
      <Star className="absolute top-16 right-20 h-8 w-8 text-yellow-300 opacity-70 animate-breathe" data-testid="icon-star-1" />
      <Star className="absolute bottom-20 left-1/4 h-6 w-6 text-yellow-200 opacity-60 animate-breathe-slow" data-testid="icon-star-2" />
      <Heart className="absolute bottom-32 right-1/3 h-8 w-8 text-pink-300 opacity-50 animate-breathe" data-testid="icon-heart-2" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Left */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', WebkitFontSmoothing: 'antialiased' }}>
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-white leading-relaxed font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)', WebkitFontSmoothing: 'antialiased' }}>
              {subtitle}
            </p>

            {/* Price Box - centered on mobile, inline on desktop */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-cyan-300/40 backdrop-blur-sm rounded-3xl p-6 text-center border-2 border-white/40">
                <p className="text-base md:text-lg text-white mb-3 font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)', WebkitFontSmoothing: 'antialiased' }}>
                  De <span className="line-through">{oldPrice}</span> por apenas
                </p>
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-600 font-black text-5xl md:text-6xl px-10 py-4 rounded-2xl inline-block shadow-lg border-4 border-yellow-300 animate-breathe" style={{ WebkitFontSmoothing: 'antialiased' }}>
                  {newPrice}
                </div>
                <p className="text-base md:text-lg text-white mt-3 font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)', WebkitFontSmoothing: 'antialiased' }}>
                  {offerText}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 space-y-3">
              <Button
                size="lg"
                onClick={handleCtaClick}
                className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold shadow-xl uppercase tracking-wide border-2 border-yellow-500 animate-breathe-slow"
                data-testid="button-cta-hero"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Compre Aqui
              </Button>
              
              <p className="text-sm md:text-base text-white flex items-center justify-center lg:justify-start gap-2 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)', WebkitFontSmoothing: 'antialiased' }}>
                <Check className="h-5 w-5 text-white drop-shadow-md" />
                {guaranteeText}
              </p>
            </div>
          </div>

          {/* Image Right - appears first on mobile */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
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
