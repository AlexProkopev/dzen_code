export const selectOrders = store => store.ordersStore.orders;
export const selectOrdersDetails = store => store.ordersStore.currentOrder;
export const selectOrdersLoading = store => store.ordersStore.isLoading;
export const selectOrdersError = store => store.ordersStore.isError;