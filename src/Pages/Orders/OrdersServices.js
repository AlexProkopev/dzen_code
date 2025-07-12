import { deleteOrder, fetchOrders, fetchOrdersById } from "../../redux/orders/order.fetch";
import { clearState, setPage } from "../../redux/orders/order.reducer";



export const loadOrders = (dispatch, page, limit = 10) => {
  dispatch(fetchOrders({ page, limit }));
};

export const loadOrderDetails = (dispatch, id) => {
  dispatch(fetchOrdersById(id));
};

export const removeOrder = (dispatch, id) => {
  dispatch(deleteOrder(id));
};

export const resetOrdersState = (dispatch) => {
  dispatch(clearState());
};

export const changeOrdersPage = (dispatch, page) => {
  dispatch(setPage(page));
};
