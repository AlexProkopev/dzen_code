export const selectOrders = store => store.ordersStore.orders;
export const selectOrdersDetails = store => store.ordersStore.currentOrder;
export const selectOrdersLoading = store => store.ordersStore.isLoading;
export const selectOrdersLoadingDetails = store => store.ordersStore.isLoadingDetails;
export const selectOrdersError = store => store.ordersStore.isError;
export const selectOrdersPage = store => store.ordersStore.page || 1;
export const selectOrdersTotalPages = store => store.ordersStore.totalPages || 1;
export const selectOrdersTotalCount = store => store.ordersStore.totalCount || 0;