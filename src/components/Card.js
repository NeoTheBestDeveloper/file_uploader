export const Card = ({ card }) => {
  return (
    <div className="card">
      <div class="card-header">{card.category}</div>
      <img src={card.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.comment}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Made by {card.author}</small>
      </div>
    </div>
  );
};
