const OrderMeta = ({ order, totalUAH, totalUSD }) => {
  return (
    <div className="order-card-meta d-flex align-items-center">
      <p>Продуктов: {order.products.length}</p>
      <time dateTime={order.createdAt}>
        {new Date(order.createdAt).toLocaleDateString("ru-RU")}
      </time>
      <p className="meta-title">{totalUAH.toLocaleString()} ₴</p>
      <p className="meta-title">{totalUSD.toLocaleString()} $</p>
    </div>
  );
};

export default OrderMeta;
