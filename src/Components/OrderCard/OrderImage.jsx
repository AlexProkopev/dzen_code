
const OrderImage = ({ product }) => {
  if (!product) return null;

  return (
    <img
      src={product.photo}
      alt={product.title}
      className="order-card-img"
      loading="lazy"
    />
  );
};

export default OrderImage;
