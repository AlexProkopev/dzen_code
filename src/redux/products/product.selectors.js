export const selectProducts = store => store.productsStore.products;
export const selectProductsDetails = store => store.productsStore.currentProduct;
export const selectProductsLoading = store => store.productsStore.isLoading;
export const selectProductsError = store => store.productsStore.isError;