import { Link } from "react-router-dom";

const ProductImage = ({ photo, title, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <img
        src={photo}
        alt={title}
        className="product-item__photo"
        loading="lazy"
      />
    </Link>
  );
};

export default ProductImage;
