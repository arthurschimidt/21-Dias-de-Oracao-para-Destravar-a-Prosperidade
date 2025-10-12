import ContentCard from '../ContentCard';

export default function ContentCardExample() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <ContentCard title="O Que Você Vai Receber 📖">
        <ul className="space-y-3 text-left">
          <li className="text-lg">🌞 <strong>21 orações guiadas</strong> para renovar sua fé diariamente</li>
          <li className="text-lg">💎 <strong>Mensagens inspiradoras</strong> para fortalecer sua confiança</li>
          <li className="text-lg">🕊️ <strong>Versículos bíblicos</strong> sobre prosperidade e abundância</li>
        </ul>
      </ContentCard>
    </div>
  );
}
