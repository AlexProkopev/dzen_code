
import "./ProductList.css";
const ProductPrice = ({ price }) => {
  return (
    <div className="product-item__section">
      <p className="label">Цена:</p>
      <ul className="list-product">
        {price.map(({ value, symbol, _id }) => (
          <li key={_id}>{value} {symbol} </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPrice;
