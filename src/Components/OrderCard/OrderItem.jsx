import { memo, useMemo } from "react";
import "./OrderCards.css";
import OrderDetailsTable from "./OrderDetailsTable";
import OrderHeader from "./OrderHeader";
import OrderMeta from "./OrderMeta";
import OrderActions from "./OrderActions";

const OrderCard = ({ order, isOpen, onToggle, onDelete, details }) => {
  const totalUAH = useMemo(() => {
    return order.products.reduce(
      (sum, p) => sum + (p.price.find((x) => x.symbol === "UAH")?.value || 0),
      0
    );
  }, [order.products]);

  const totalUSD = useMemo(() => {
    return order.products.reduce(
      (sum, p) => sum + (p.price.find((x) => x.symbol === "USD")?.value || 0),
      0
    );
  }, [order.products]);

  const firstProduct = useMemo(
    () => order.products[0] || null,
    [order.products]
  );

  const shouldShowDetails = isOpen && details && details._id === order._id;

  return (
    <li className="order-card">
      <div className="d-flex gap-3">
        <OrderHeader order={order} firstProduct={firstProduct} />
        <OrderMeta order={order} totalUAH={totalUAH} totalUSD={totalUSD} />
        <OrderActions order={order} onToggle={onToggle} onDelete={onDelete} />
      </div>

      <section
        className={`order-details-wrapper ${shouldShowDetails ? "open" : ""}`}
        aria-hidden={!shouldShowDetails}
      >
        <OrderDetailsTable
          products={details?.products}
        />
      </section>
    </li>
  );
};

export default memo(OrderCard);
