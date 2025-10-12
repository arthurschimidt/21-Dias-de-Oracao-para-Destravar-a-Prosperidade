import Hero from "@/components/Hero";
import ContentCard from "@/components/ContentCard";
import TestimonialCard from "@/components/TestimonialCard";
import SalesFooter from "@/components/SalesFooter";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, Heart, ShoppingCart, Shield, Palette, Church, GraduationCap } from "lucide-react";

export default function SalesPage() {
  const handleCtaClick = () => {
    console.log("CTA button clicked");
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
          <span className="text-cyan-500">Um Mundo de Fé</span> <span className="text-green-400">e Cores</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nossos materiais são cristãos, educativos e prontos para imprimir. Uma coleção feita com carinho para ensinar valores bíblicos de forma lúdica!
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <ContentCard
            title="Desenhos para Colorir"
            centered
            bgColor="bg-pink-50"
            icon={
              <div className="bg-pink-400 rounded-full p-4 inline-block">
                <Palette className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Anjos, Jesus e histórias bíblicas em lindos desenhos que estimulam a criatividade.
            </p>
          </ContentCard>

          <ContentCard
            title="Historinhas Cristãs"
            centered
            bgColor="bg-blue-50"
            icon={
              <div className="bg-blue-400 rounded-full p-4 inline-block">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Histórias curtas que ensinam sobre fé, amor e bondade de um jeito que as crianças entendem.
            </p>
          </ContentCard>

          <ContentCard
            title="Fácil e Rápido"
            centered
            bgColor="bg-green-50"
            icon={
              <div className="bg-green-400 rounded-full p-4 inline-block">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Materiais em PDF prontos para imprimir. É só baixar e a diversão começa!
            </p>
          </ContentCard>
        </div>
      </div>

      {/* Usage Cards */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <ContentCard
            title="Em Casa com a Família"
            centered
            bgColor="bg-blue-100"
            icon={
              <div className="bg-blue-500 rounded-full p-4 inline-block">
                <Heart className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Momentos especiais em família, ensinando valores cristãos de forma divertida e unindo gerações.
            </p>
          </ContentCard>

          <ContentCard
            title="Na Escola Dominical"
            centered
            bgColor="bg-green-100"
            icon={
              <div className="bg-green-500 rounded-full p-4 inline-block">
                <Church className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Recursos perfeitos para professores e líderes engajarem as crianças nas lições bíblicas.
            </p>
          </ContentCard>

          <ContentCard
            title="Em Atividades Educativas"
            centered
            bgColor="bg-yellow-100"
            icon={
              <div className="bg-yellow-500 rounded-full p-4 inline-block">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            }
          >
            <p className="text-gray-600">
              Complemento ideal para educação cristã em escolas, grupos infantis e reforço escolar.
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 px-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
            Comece a Aventura! <Sparkles className="inline h-8 md:h-10 w-8 md:w-10 mb-2" />
          </h2>
          
          <div className="bg-orange-600/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 mb-8 mx-auto max-w-md">
            <p className="text-base md:text-xl text-white font-semibold mb-4">
              OFERTA ESPECIAL: de R$49,90 por apenas
            </p>
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 font-bold text-4xl md:text-6xl px-8 md:px-10 py-3 md:py-4 rounded-2xl inline-block shadow-2xl">
              R$19,90
            </div>
            <p className="text-base md:text-lg text-white mt-4 font-medium">
              Acesso vitalício a todo o material!
            </p>
          </div>

          <div className="mb-6 px-2">
            <Button
              size="lg"
              onClick={handleCtaClick}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-sm md:text-lg px-6 md:px-12 py-5 md:py-7 h-auto rounded-full font-bold shadow-2xl uppercase w-full md:w-auto max-w-md"
              data-testid="button-cta-final"
            >
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
              <span className="text-center leading-tight">Compre Aqui e Garanta o Desconto!</span>
            </Button>
          </div>

          <p className="text-white text-base md:text-lg flex items-center justify-center gap-2 px-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
            <Shield className="h-5 w-5 flex-shrink-0" />
            <span>Compra Segura | Garantia de 7 Dias</span>
          </p>
        </div>
      </div>

      <SalesFooter />
    </div>
  );
}
