const ProductArrival = ({ orderTitle }) => {
  return (
    <div className="product-item__section">
      <span className="label">Приход:</span>
      <span className="value">{orderTitle || "—"}</span>
    </div>
  );
};

export default ProductArrival;
