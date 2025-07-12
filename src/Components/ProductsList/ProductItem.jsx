import ProductImage from "./ProductImage";
import ProductHeader from "./ProductHeader";
import ProductGuarantee from "./ProductGuarantee";
import ProductPrice from "./ProductPrice";
import ProductArrival from "./ProductArrival";

const ProductItem = ({ product }) => {
  return (
    <li className="product-item">
      <ProductImage
        photo={product.photo}
        title={product.title}
        id={product._id}
      />
      <div className="product-item__info">
        <ProductHeader
          title={product.title}
          type={product.type}
          id={product._id}
          is_new={product.is_new}
        />
        <ProductGuarantee
          start={product.guarantee?.start}
          end={product.guarantee?.end}
        />
        <ProductPrice price={product.price} />
        <ProductArrival orderTitle={product.order?.title} />
      </div>
    </li>
  );
};

export default ProductItem;
