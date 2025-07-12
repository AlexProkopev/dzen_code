import OrderImage from "./OrderImage";
import OrderTitle from "./OrderTitle";

const OrderHeader = ({ order, firstProduct }) => {
  return (
    <div className="d-flex align-items-center gap-3 flex-grow-1 min-w-0">
      <OrderImage product={firstProduct} />
      <OrderTitle title={order.title} />
    </div>
  );
};

export default OrderHeader;
