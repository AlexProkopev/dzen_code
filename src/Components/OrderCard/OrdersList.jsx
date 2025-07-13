import { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrders,
  selectOrdersPage,
  selectOrdersTotalPages,
  selectOrdersDetails,
  selectOrdersTotalCount,
  selectOrdersLoading,
  selectOrdersError,
} from "../../redux/orders/order.selectors";
import Loader from "../Loader/Loader";
import OrderItem from "./OrderItem";
import Notiflix from "notiflix";

import {
  changeOrdersPage,
  loadOrderDetails,
  removeOrder,
  useInitOrders,
  useResetOrdersOnUnmount,
  useAutoBackOnEmptyPage,
} from "../../Pages/Orders/OrdersServices";

const PaginationControls = lazy(() =>
  import("../PaginationControls/PaginationControls")
);
const DeleteConfirmModal = lazy(() =>
  import("../DeleteConfirmModal/DeleteConfirmModal")
);

const OrdersList = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders) || [];
  const page = useSelector(selectOrdersPage);
  const totalPages = useSelector(selectOrdersTotalPages);
  const totalCount = useSelector(selectOrdersTotalCount);
  const details = useSelector(selectOrdersDetails);
  const isLoading = useSelector(selectOrdersLoading);
  const isError = useSelector(selectOrdersError);
  const [openId, setOpenId] = useState(null);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [localTotalCount, setLocalTotalCount] = useState(totalCount);

  useInitOrders(dispatch, page, setOpenId);
  useResetOrdersOnUnmount(dispatch, setOpenId, setOrderToDelete);
  useAutoBackOnEmptyPage(orders, page, dispatch);

  useEffect(() => {
    setLocalTotalCount(totalCount);
  }, [totalCount]);

  const handleToggle = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      loadOrderDetails(dispatch, id);
      setOpenId(id);
    }
  };

  const handleDeleteClick = (order) => {
    setOrderToDelete(order);
  };

  const confirmDelete = () => {
    if (orderToDelete) {
      removeOrder(dispatch, orderToDelete._id);
      setOrderToDelete(null);
      setLocalTotalCount((prev) => prev - 1);
    }
  };

  const cancelDelete = () => {
    setOrderToDelete(null);
  };


  if (isLoading) return <Loader />;
  if (isError)
    return Notiflix.Notify.failure(
      "Ошибка при загрузке заказов, попробуйте позже"
    );
  if (!isLoading && orders.length === 0)
    return <div className="text-center">Нет заказов</div>;

  return (
    <div className="container my-4">
      <h4>Приходы / {localTotalCount}</h4>

      <ul className="list-group">
        {orders.map((order) => (
          <OrderItem
            key={order._id}
            order={order}
            isOpen={openId === order._id}
            onToggle={handleToggle}
            onDelete={() => handleDeleteClick(order)}
            details={details}
          />
        ))}
      </ul>

      {totalPages > 1 && (
        <PaginationControls
          page={page}
          totalPages={totalPages}
          onPageChange={(p) => changeOrdersPage(dispatch, p)}
        />
      )}

      <DeleteConfirmModal
        order={orderToDelete}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default OrdersList;
