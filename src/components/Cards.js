import { Card } from './Card';

export const Cards = ({ cards }) => {
  return (
    <div className="card-deck">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};
