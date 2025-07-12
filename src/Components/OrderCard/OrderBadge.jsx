const OrderBadge = ({ product }) => {
  if (!product) return null;

  const isNew = product.is_new;

  return (
    <span
      className={`order-badge ${
        isNew ? "order-badge-new" : "order-badge-used"
      }`}
      aria-label={isNew ? "Новый товар" : "Б/У товар"}
      title={isNew ? "Новый товар" : "Б/У товар"}
    >
      {isNew ? "Новый" : "БУ"}
    </span>
  );
};

export default OrderBadge;
