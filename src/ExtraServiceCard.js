function ExtraServiceCard({ product }) {
  return (
    <div className="extraservice-card">
      <div className="extra-card-img">
        <img
          className="extra-img"
          src={product.photoName}
          alt={product.description}
        />
      </div>
      <div className="extra-descr">
        <p className="par">{product.description}</p>
      </div>
      <div className="extra-icon">
        <img src={product.icon} alt={product.description} />
      </div>
    </div>
  );
}

export default ExtraServiceCard;
