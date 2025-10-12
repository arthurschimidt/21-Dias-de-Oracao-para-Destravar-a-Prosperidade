import { Heart, Star, Sparkles } from "lucide-react";

export default function SalesFooter() {
  return (
    <footer className="bg-blue-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4 flex items-center justify-center gap-2" style={{ WebkitFontSmoothing: 'antialiased' }}>
            <Sparkles className="h-6 w-6 text-yellow-300" />
            21 Dias de Oração para Destravar a Prosperidade
            <Sparkles className="h-6 w-6 text-yellow-300" />
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto font-medium" style={{ WebkitFontSmoothing: 'antialiased' }}>
            Conectando você com Deus, fortalecendo sua fé e abrindo caminhos para uma vida plena e próspera.
          </p>
          <div className="flex justify-center gap-3">
            <div className="bg-white/20 rounded-lg p-2">
              <Heart className="h-6 w-6 text-pink-300" />
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <Star className="h-6 w-6 text-yellow-300" />
            </div>
            <div className="bg-white/20 rounded-lg p-2">
              <Sparkles className="h-6 w-6 text-blue-300" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-600 mt-8 pt-6 text-center">
          <p className="text-sm text-blue-200 font-medium" style={{ WebkitFontSmoothing: 'antialiased' }}>
            © 2025 21 Dias de Oração para Destravar a Prosperidade — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
