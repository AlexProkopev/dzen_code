import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectProductsLoading,
  selectProductsPage,
  selectProductsTotalPages,
  selectProductsTotal,
  selectProductsError,
} from "../../redux/products/product.selectors";
import { fetchProduct } from "../../redux/products/product.fetch";
import { clearState, setPage } from "../../redux/products/product.reducer";
import ProductItem from "./ProductItem";
import PaginationControls from "../PaginationControls/PaginationControls";
import Loader from "../Loader/Loader";
import TypeFilter from "../TypeFilter/TypeFilter";
import "./ProductList.css";
import {
  filterProductsByType,
  getTotalPages,
  getUniqueTypes,
  paginateProducts,
} from "../../Pages/Products/ProductsServices";
import Notiflix from "notiflix";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts) || [];
  const isLoading = useSelector(selectProductsLoading);
  const isError = useSelector(selectProductsError);
  const page = useSelector(selectProductsPage);
  const totalPages = useSelector(selectProductsTotalPages);
  const totalCount = useSelector(selectProductsTotal);
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    if (!typeFilter) {
      dispatch(fetchProduct({ page, limit: 10 }));
    } else {
      dispatch(fetchProduct({ page: 1, limit: 1000 }));
      dispatch(setPage(1));
    }
  }, [dispatch, page, typeFilter]);

  useEffect(() => {
    return () => {
      setTypeFilter("");
      dispatch(clearState());
    };
  }, [dispatch]);

  const filteredProducts = filterProductsByType(products, typeFilter);
  const uniqueTypes = getUniqueTypes(products);
  const localTotalPages = getTotalPages(filteredProducts.length, 10);
  const paginatedProducts = typeFilter
    ? paginateProducts(filteredProducts, page, 10)
    : products;

  if (isLoading) return <Loader />;
   if (isError) return Notiflix.Notify.failure("Ошибка при загрузке продуктов, попробуйте позже");
  if (!isLoading && filteredProducts.length === 0) {
    return <div className="text-center">Нет продуктов</div>;
  }

  return (
    <section className="products-list container my-4">
      <h4 >
        Продукты / {typeFilter ? filteredProducts.length : totalCount}
      </h4>

      <TypeFilter
        value={typeFilter}
        onChange={setTypeFilter}
        options={uniqueTypes}
      />

      <ul >
        {paginatedProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ul>

      {(typeFilter ? localTotalPages : totalPages) > 1 && (
        <PaginationControls
          page={page}
          totalPages={typeFilter ? localTotalPages : totalPages}
          onPageChange={(p) => dispatch(setPage(p))}
        />
      )}
    </section>
  );
};

export default ProductsList;
