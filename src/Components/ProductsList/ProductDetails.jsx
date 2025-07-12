import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectProductsDetails,
  selectProductsError,
  selectProductsLoading,
} from "../../redux/products/product.selectors";
import { fetchProductById } from "../../redux/products/product.fetch";
import "./ProductDetails.css";
import Loader from "../Loader/Loader";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(selectProductsDetails);
  const isLoading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [id, dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <div className="container py-5 text-danger">Ошибка: {error}</div>;

  return (
    <section className="container py-5 product-landing">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product?.photo}
            alt={product?.title}
            className="img-fluid rounded shadow product-photo"
          />
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <h1 className="product-title mb-3">{product?.title}</h1>
          <p className="product-type mb-2"><strong>Тип:</strong> {product?.type}</p>
          <p className="mb-2">
            <strong>Гарантия:</strong>{" "}
            {new Date(product?.guarantee?.start).toLocaleDateString()} —{" "}
            {new Date(product?.guarantee?.end).toLocaleDateString()}
          </p>

          <div className="product-price-box mb-3">
            <strong>Цена:</strong>
            <ul className="list-unstyled list-price ">
              {product?.price.map(({ value, symbol, _id }) => (
                <li key={_id}>
                  <span className="badge bg-success fs-6">{value} {symbol}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-2"><strong>Приход:</strong> {product?.order?.title || "—"}</p>
          <p className="mb-2"><strong>Серийный номер:</strong> {product?.serialNumber}</p>
          <p className="mb-2">
            <strong>Состояние:</strong>{" "}
            <span className={`badge ${product?.is_new ? "bg-primary" : "bg-secondary"}`}>
              {product?.is_new ? "Новый" : "Б/У"}
            </span>
          </p>
          <p className="mt-4"><strong>Характеристики:</strong> {product?.specification || "—"}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
