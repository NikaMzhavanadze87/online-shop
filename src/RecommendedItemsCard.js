import "./RecommendedItemsCard.css";

export function RecommendedItemsCard({ product }) {
  return (
    <div className="reommended-card">
      <div className="rec-card-img">
        <img src={product.photoName} alt={product.description} />
      </div>
      <div className="rec-descr">
        <span> {product.price}</span>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
