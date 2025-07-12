import { useEffect, useState } from "react";
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

import PaginationControls from "../PaginationControls/PaginationControls";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import Loader from "../Loader/Loader";
import {
  changeOrdersPage,
  loadOrderDetails,
  loadOrders,
  removeOrder,
  resetOrdersState,
} from "../../Pages/Orders/OrdersServices";
import OrderItem from "./OrderItem";
import Notiflix from "notiflix";

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

  useEffect(() => {
    loadOrders(dispatch, page);
  }, [dispatch, page]);

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

  useEffect(() => {
    return () => {
      setOpenId(null);
      setOrderToDelete(null);
      resetOrdersState(dispatch);
    };
  }, [dispatch]);

  const handleDeleteClick = (order) => {
    setOrderToDelete(order);
  };

  const confirmDelete = () => {
    if (orderToDelete) {
      removeOrder(dispatch, orderToDelete._id);
      setOrderToDelete(null);
      setLocalTotalCount((prevCount) => prevCount - 1);
    }
  };

  const cancelDelete = () => {
    setOrderToDelete(null);
  };

  useEffect(() => {
    if (orders.length === 0 && page > 1) {
      changeOrdersPage(dispatch, page - 1);
    }
  }, [orders.length, page, dispatch]);

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
