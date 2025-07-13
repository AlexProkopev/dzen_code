import { useEffect } from "react";
import { deleteOrder, fetchOrders, fetchOrdersById } from "../../redux/orders/order.fetch";
import { clearState, setPage } from "../../redux/orders/order.reducer";

// Загрузка заказов
export const loadOrders = (dispatch, page, limit = 10) => {
  dispatch(fetchOrders({ page, limit }));
};

// Загрузка деталей заказа
export const loadOrderDetails = (dispatch, id) => {
  dispatch(fetchOrdersById(id));
};

// Удаление заказа
export const removeOrder = (dispatch, id) => {
  dispatch(deleteOrder(id));
};

// Очистка state при размонтировании
export const resetOrdersState = (dispatch) => {
  dispatch(clearState());
};

// Смена страницы
export const changeOrdersPage = (dispatch, page) => {
  dispatch(setPage(page));
};

// Хук: Инициализация загрузки заказов
export const useInitOrders = (dispatch, page,setOpenId) => {
  useEffect(() => {
    loadOrders(dispatch, page);
  }, [dispatch, page, setOpenId]);
};

// Хук: Очистка при размонтировании
export const useResetOrdersOnUnmount = (dispatch, setOpenId, setOrderToDelete) => {
  useEffect(() => {
    return () => {
      setOpenId(null);
      setOrderToDelete(null);
      resetOrdersState(dispatch);
    };
  }, [dispatch,setOpenId, setOrderToDelete]);
};

// Хук: Автопереход на предыдущую страницу, если удалили последний ордер
export const useAutoBackOnEmptyPage = (orders, page, dispatch) => {
  useEffect(() => {
    if (orders.length === 0 && page > 1) {
      changeOrdersPage(dispatch, page - 1);
    }
  }, [orders.length, page, dispatch]);
};
