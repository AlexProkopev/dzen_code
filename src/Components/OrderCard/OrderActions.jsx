const OrderActions = ({ order, onToggle, onDelete }) => {
  return (
    <section
      className="order-card-actions d-flex align-items-center gap-2 flex-shrink-0"
      
    >
      <button
        className="btn btn-light btn-sm px-2 py-1"
        aria-label="Показать детали"
        onClick={() => onToggle(order._id)}
      >
        <i className="bi bi-list" />
      </button>
      <button
        className="btn btn-sm btn-outline-danger"
        aria-label="Удалить заказ"
        onClick={() => onDelete(order._id)}
      >
        <i className="bi bi-trash" />
      </button>
    </section>
  );
};

export default OrderActions;
