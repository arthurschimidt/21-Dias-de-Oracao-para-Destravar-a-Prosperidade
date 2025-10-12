import Hero from "@/components/Hero";
import ContentCard from "@/components/ContentCard";
import TestimonialCard from "@/components/TestimonialCard";
import PriceDisplay from "@/components/PriceDisplay";
import SalesFooter from "@/components/SalesFooter";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

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
        ctaText="Quero Começar Agora 🙏"
        ctaLink="#checkout"
      />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <ContentCard title="Destrave a Prosperidade com Fé e Propósito 🌿">
          <p className="text-lg mb-4 text-foreground/90">
            Este manual foi criado para quem sente que, por mais que se esforce, as bênçãos parecem não fluir. 
            Durante 21 dias, você será guiado por orações, versículos e reflexões que irão alinhar sua fé à 
            verdadeira prosperidade.
          </p>
          <p className="text-lg text-foreground/90">
            Com apenas alguns minutos por dia, você despertará uma nova mentalidade — cheia de gratidão, 
            fé e confiança na abundância divina.
          </p>
        </ContentCard>

        <ContentCard title="O Que Você Vai Receber 📖">
          <ul className="space-y-3 text-left">
            <li className="text-lg">🌞 <strong>21 orações guiadas</strong> para renovar sua fé diariamente</li>
            <li className="text-lg">💎 <strong>Mensagens inspiradoras</strong> para fortalecer sua confiança</li>
            <li className="text-lg">🕊️ <strong>Versículos bíblicos</strong> sobre prosperidade e abundância</li>
            <li className="text-lg">💭 <strong>Exercícios de gratidão</strong> para atrair bênçãos</li>
            <li className="text-lg">✨ <strong>Bônus especial:</strong> "Oração da manhã para abrir caminhos"</li>
          </ul>
          <p className="text-lg mt-6 font-medium text-foreground/90">
            Tudo em um eBook digital (PDF) com acesso imediato!
          </p>
        </ContentCard>

        <ContentCard title="Resultados que Você Vai Sentir 🌟">
          <ul className="space-y-3 text-left">
            <li className="text-lg">🧘‍♀️ Paz interior e clareza espiritual</li>
            <li className="text-lg">💰 Oportunidades que começam a fluir naturalmente</li>
            <li className="text-lg">❤️ Coração grato e confiante</li>
            <li className="text-lg">🕊️ Fé fortalecida e esperança renovada</li>
          </ul>
          <p className="text-lg mt-6 text-foreground/90">
            A prosperidade não é apenas material — é viver em harmonia com o propósito de Deus.
          </p>
        </ContentCard>

        <ContentCard title="Para Quem é Este Manual 🙏">
          <div className="space-y-3 text-left text-lg">
            <p>✔️ Quem sente que está travado financeiramente ou espiritualmente</p>
            <p>✔️ Quem busca fortalecer sua fé e mentalidade de abundância</p>
            <p>✔️ Quem quer viver uma transformação espiritual real</p>
          </div>
        </ContentCard>

        <ContentCard title="Depoimentos Reais 💬">
          <TestimonialCard
            quote="No 7º dia, algo mudou dentro de mim. Comecei a ver oportunidades onde antes só via dificuldade."
            author="Maria C."
          />
          <TestimonialCard
            quote="Senti uma leveza espiritual enorme. Minhas vendas aumentaram e minha fé foi restaurada."
            author="João S."
          />
          <TestimonialCard
            quote="Esse manual me fez entender que prosperar é mais sobre fé do que dinheiro. E isso mudou tudo."
            author="Patrícia M."
          />
        </ContentCard>

        <ContentCard title="Você Pode Usar Onde Quiser 🌍">
          <div className="space-y-3 text-left text-lg">
            <p>📱 No celular — leia em qualquer lugar.</p>
            <p>💻 No computador ou tablet.</p>
            <p>📖 Imprima se quiser acompanhar com anotações e marcações.</p>
          </div>
        </ContentCard>

        <ContentCard title="Comece Sua Jornada Agora 💫" centered>
          <PriceDisplay oldPrice="R$59,90" newPrice="R$19,90" className="my-8" />
          
          <Button
            size="lg"
            onClick={handleCtaClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 h-auto rounded-full font-semibold transition-transform hover:scale-105 mb-6"
            data-testid="button-cta-final"
          >
            Quero o Manual Agora 🙌
          </Button>

          <p className="text-base mb-4">
            Acesso vitalício ao eBook + bônus especial 🎁
          </p>

          <p className="text-base flex items-center justify-center gap-2">
            <strong className="flex items-center gap-1">
              <Lock className="h-4 w-4" /> Compra Segura
            </strong>
            <span className="text-muted-foreground">|</span>
            Garantia de 7 dias
          </p>
        </ContentCard>
      </div>

      <SalesFooter />
    </div>
  );
}
