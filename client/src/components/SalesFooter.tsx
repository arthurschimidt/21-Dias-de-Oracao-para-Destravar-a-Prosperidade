import { Heart, Star, Grid3x3 } from "lucide-react";

export default function SalesFooter() {
  return (
    <footer className="bg-blue-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-pink-300" />
              Pequenos de Fé <Heart className="h-6 w-6 text-pink-300" />
            </h3>
            <p className="text-blue-100 mb-4">
              Despertando a fé e a imaginação das crianças com materiais cristãos educativos e divertidos.
            </p>
            <div className="flex gap-3">
              <div className="bg-white/20 rounded-lg p-2">
                <Heart className="h-6 w-6 text-pink-300" />
              </div>
              <div className="bg-white/20 rounded-lg p-2">
                <Star className="h-6 w-6 text-yellow-300" />
              </div>
              <div className="bg-white/20 rounded-lg p-2">
                <Grid3x3 className="h-6 w-6 text-blue-300" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-blue-100">
              <p className="flex items-center gap-2">
                📧 gabizynhanc@gmail.com
              </p>
              <p className="flex items-center gap-2">
                📱 (48) 99123-2634
              </p>
              <p className="flex items-center gap-2">
                📍 Florianópolis, Brasil
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-600 mt-8 pt-6 text-center">
          <p className="text-sm text-blue-200">
            © 2025 Pequenos de Fé — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
