
export const getUniqueTypes = (products) => {
  return Array.from(new Set(products.map((p) => p.type)));
};

export const filterProductsByType = (products, type) => {
  if (!type) return products;
  return products.filter((p) => p.type === type);
};

export const getTotalPages = (itemsCount, itemsPerPage) => {
  return Math.ceil(itemsCount / itemsPerPage);
};

export const paginateProducts = (products, page, itemsPerPage) => {
  const start = (page - 1) * itemsPerPage;
  return products.slice(start, start + itemsPerPage);
};
