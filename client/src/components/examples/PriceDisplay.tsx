import PriceDisplay from '../PriceDisplay';

export default function PriceDisplayExample() {
  return (
    <div className="p-8">
      <PriceDisplay oldPrice="R$59,90" newPrice="R$19,90" />
    </div>
  );
}
