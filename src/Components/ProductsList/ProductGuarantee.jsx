const ProductGuarantee = ({ start, end }) => {
  const format = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString("ru-RU") : "—";

  return (
    <div className="product-item__section">
      <span className="label">Гарантия:</span>
      <span className="value">
        {format(start)} — {format(end)}
      </span>
    </div>
  );
};

export default ProductGuarantee;
