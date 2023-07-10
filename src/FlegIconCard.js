import "./FlegIconCard.css";
function FlegIconCard({ product }) {
  return (
    <div className="fleg-card">
      <div className="fleg-card-img">
        <img className="fleg-img" src={product.icon} alt={product.name} />
      </div>
      <div className="fleg-descr">
        <p className="fleg-par-2">{product.name}</p>
        <p className="fleg-par">{product.description}</p>
      </div>
    </div>
  );
}

export default FlegIconCard;
