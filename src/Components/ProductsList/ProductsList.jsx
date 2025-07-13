import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectProductsLoading,
  selectProductsPage,
  selectProductsTotalPages,
  selectProductsTotal,
  selectProductsError,
  selectProductTypes,
} from "../../redux/products/product.selectors";
import {
  fetchProduct,
  fetchProductTypes,
} from "../../redux/products/product.fetch";
import { clearState, setPage } from "../../redux/products/product.reducer";
import ProductItem from "./ProductItem";
import PaginationControls from "../PaginationControls/PaginationControls";
import Loader from "../Loader/Loader";
import TypeFilter from "../TypeFilter/TypeFilter";
import Notiflix from "notiflix";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts) || [];
  const isLoading = useSelector(selectProductsLoading);
  const isError = useSelector(selectProductsError);
  const page = useSelector(selectProductsPage);
  const totalPages = useSelector(selectProductsTotalPages);
  const totalCount = useSelector(selectProductsTotal);
  const types = useSelector(selectProductTypes);
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    dispatch(fetchProductTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProduct({ page, limit: 10, type: typeFilter }));
  }, [dispatch, page, typeFilter]);

  useEffect(() => {
    return () => {
      dispatch(clearState());
      setTypeFilter("");
    };
  }, [dispatch]);

  if (isLoading) return <Loader />;
  if (isError) {
    Notiflix.Notify.failure("Ошибка при загрузке продуктов, попробуйте позже");
    return null;
  }

  if (!isLoading && products.length === 0) {
    return <div className="text-center">Нет продуктов</div>;
  }

  return (
    <section className="products-list container my-4">
      <h4>Продукты / {totalCount}</h4>

      <TypeFilter
        value={typeFilter}
        onChange={(val) => {
          setTypeFilter(val);
          dispatch(setPage(1));
        }}
        options={types}
      />

      <ul className="list-product-container">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ul>

      {totalPages > 1 && (
        <PaginationControls
          page={page}
          totalPages={totalPages}
          onPageChange={(p) => dispatch(setPage(p))}
        />
      )}
    </section>
  );
};

export default ProductsList;
