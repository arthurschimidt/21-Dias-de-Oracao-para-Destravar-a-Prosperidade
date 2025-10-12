import FAQ from '../FAQ';

export default function FAQExample() {
  const faqItems = [
    {
      question: "Como vou receber o manual?",
      answer: "Você receberá o acesso imediato por email logo após a confirmação do pagamento. O manual é um eBook em PDF que pode ser baixado e usado em qualquer dispositivo."
    },
    {
      question: "Posso imprimir o manual?",
      answer: "Sim! O PDF pode ser impresso para você acompanhar com anotações e marcações físicas, se preferir."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas."
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <FAQ items={faqItems} />
    </div>
  );
}
