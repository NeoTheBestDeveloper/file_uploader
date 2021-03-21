import { Card } from './Card';

export const MyCards = ({ cards }) => {
  if (!cards) {
    return <h1>Nothing...</h1>;
  }

  return (
    <div className="card-deck">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};
