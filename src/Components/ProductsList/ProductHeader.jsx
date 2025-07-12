import { Link } from "react-router-dom";
import OrderBadge from "../OrderCard/OrderBadge";

const ProductHeader = ({ title, type, id, is_new }) => {
  return (
    <div className="product-item__header">
      <div className="product-item__title-block">
        <Link to={`/products/${id}`} className="product-item__title-link">
          <h3 className="product-item__title">{title}</h3>
        </Link>
        <span className="product-item__type">{type}</span>
      </div>
      <OrderBadge product={{ is_new }} />
    </div>
  );
};

export default ProductHeader;
