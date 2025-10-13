import Hero from "@/components/Hero";
import ContentCard from "@/components/ContentCard";
import TestimonialCard from "@/components/TestimonialCard";
import SalesFooter from "@/components/SalesFooter";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, Heart, ShoppingCart, Shield, Palette, Church, GraduationCap } from "lucide-react";

export default function SalesPage() {
  const handleCtaClick = () => {
    window.open('https://pay.kiwify.com.br/SFL2mGL', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="21 Dias de Oração para Destravar a Prosperidade"
        subtitle="Transforme sua vida com um plano espiritual poderoso de 21 dias de fé, foco e abundância."
        oldPrice="R$59,90"
        newPrice="R$19,90"
        ctaText="Quero Começar Agora"
        ctaLink="#checkout"
      />

      {/* Section Title */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-cyan-500">Transforme Sua Vida</span> <span className="text-green-400">em 21 Dias</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Um guia espiritual completo para você destravar a prosperidade através da oração, fortalecer sua fé e atrair as bênçãos que Deus preparou para você!
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <ContentCard
            title="Orações Diárias"
            centered
            bgColor="bg-pink-50"
            icon={
              <div className="bg-pink-400 rounded-full p-4 inline-block">
                <Heart className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              21 orações poderosas para cada dia, guiando você em uma jornada de fé e transformação espiritual.
            </p>
          </ContentCard>

          <ContentCard
            title="Versículos e Reflexões"
            centered
            bgColor="bg-blue-50"
            icon={
              <div className="bg-blue-400 rounded-full p-4 inline-block">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Passagens bíblicas sobre prosperidade e abundância com reflexões profundas para fortalecer sua fé.
            </p>
          </ContentCard>

          <ContentCard
            title="Acesso Imediato"
            centered
            bgColor="bg-green-50"
            icon={
              <div className="bg-green-400 rounded-full p-4 inline-block">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Material em PDF para baixar agora mesmo e começar sua jornada de 21 dias rumo à prosperidade!
            </p>
          </ContentCard>
        </div>
      </div>

      {/* Usage Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <ContentCard
            title="Paz e Clareza"
            centered
            bgColor="bg-blue-100"
            icon={
              <div className="bg-blue-500 rounded-full p-4 inline-block">
                <Heart className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Encontre paz interior e clareza espiritual através de orações que conectam você com o propósito divino.
            </p>
          </ContentCard>

          <ContentCard
            title="Fé Fortalecida"
            centered
            bgColor="bg-green-100"
            icon={
              <div className="bg-green-500 rounded-full p-4 inline-block">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Fortaleça sua confiança em Deus e desenvolva uma mentalidade de abundância e gratidão constante.
            </p>
          </ContentCard>

          <ContentCard
            title="Portas Abertas"
            centered
            bgColor="bg-yellow-100"
            icon={
              <div className="bg-yellow-500 rounded-full p-4 inline-block">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Destrave oportunidades e veja as bênçãos fluírem quando você alinha sua fé com a vontade de Deus.
            </p>
          </ContentCard>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <Heart className="inline h-8 w-8 text-pink-400 mb-1" /> <span className="text-blue-500">Vidas </span>
          <span className="text-green-400">Transformadas</span> <Sparkles className="inline h-8 w-8 text-yellow-400 mb-1" />
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Veja como os 21 dias de oração mudaram a vida de quem confiou!
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="No 7º dia, algo mudou dentro de mim. Comecei a ver oportunidades onde antes só via dificuldade. Minha fé foi restaurada e as portas começaram a se abrir!"
            author="Mariana S."
            role="Empreendedora"
          />
          <TestimonialCard
            quote="Esse manual transformou minha relação com Deus e com o dinheiro. Aprendi que prosperidade vai além do financeiro. Hoje vivo em abundância espiritual e material!"
            author="Carlos Mendes"
            role="Empresário"
          />
          <TestimonialCard
            quote="Estava travada há anos. Depois dos 21 dias, recebi uma promoção inesperada e minha família foi abençoada. A gratidão e a fé movem montanhas!"
            author="Ana Paula R."
            role="Professora"
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          Perguntas Frequentes
        </h2>
        <FAQ items={[
          {
            question: "Como vou receber o manual?",
            answer: "Você receberá o acesso imediato por email logo após a confirmação do pagamento. O manual é um eBook em PDF que pode ser baixado e usado em qualquer dispositivo."
          },
          {
            question: "Posso imprimir o manual?",
            answer: "Sim! O PDF pode ser impresso para você acompanhar com anotações e marcações físicas, se preferir."
          },
          {
            question: "Como funciona a garantia de 7 dias?",
            answer: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas."
          },
          {
            question: "Preciso ter experiência com orações?",
            answer: "Não! O manual foi criado para todos, desde iniciantes até quem já tem prática de oração. Cada dia é guiado passo a passo."
          },
          {
            question: "Quanto tempo leva cada dia?",
            answer: "Apenas 10 a 15 minutos por dia. É um momento especial de conexão espiritual que cabe na sua rotina."
          },
          {
            question: "O pagamento é seguro?",
            answer: "Sim! Utilizamos plataformas de pagamento com certificação de segurança. Seus dados estão totalmente protegidos."
          }
        ]} />
      </div>

      {/* Final CTA */}
      <div id="final-cta" className="bg-gradient-to-br from-orange-300 via-orange-400 to-pink-400 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 px-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', WebkitFontSmoothing: 'antialiased' }}>
            Comece a Aventura! <Sparkles className="inline h-8 md:h-10 w-8 md:w-10 mb-2 animate-breathe" />
          </h2>
          
          <div className="bg-orange-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 mb-8 mx-auto max-w-md">
            <p className="text-base md:text-xl text-white font-bold mb-4" style={{ WebkitFontSmoothing: 'antialiased' }}>
              OFERTA ESPECIAL: de R$49,90 por apenas
            </p>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-600 font-black text-4xl md:text-6xl px-8 md:px-10 py-3 md:py-4 rounded-2xl inline-block shadow-lg border-4 border-white animate-breathe" style={{ WebkitFontSmoothing: 'antialiased' }}>
              R$19,90
            </div>
            <p className="text-base md:text-lg text-white mt-4 font-bold" style={{ WebkitFontSmoothing: 'antialiased' }}>
              Acesso vitalício a todo o material!
            </p>
          </div>

          <div className="mb-6 px-2">
            <Button
              size="lg"
              onClick={handleCtaClick}
              className="bg-yellow-400 text-green-800 hover:bg-yellow-500 text-sm md:text-lg px-6 md:px-12 py-5 md:py-7 h-auto rounded-full font-bold shadow-xl uppercase w-full md:w-auto max-w-md animate-breathe-slow"
              data-testid="button-cta-final"
            >
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
              <span className="text-center leading-tight">Compre Aqui e Garanta o Desconto!</span>
            </Button>
          </div>

          <p className="text-white text-base md:text-lg flex items-center justify-center gap-2 px-2 font-semibold" style={{ WebkitFontSmoothing: 'antialiased' }}>
            <Shield className="h-5 w-5 flex-shrink-0" />
            <span>Compra Segura | Garantia de 7 Dias</span>
          </p>
        </div>
      </div>

      <SalesFooter />
    </div>
  );
}
