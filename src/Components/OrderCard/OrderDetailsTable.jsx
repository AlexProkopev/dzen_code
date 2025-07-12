import { Link } from "react-router-dom";
import OrderBadge from "./OrderBadge";

const OrderDetailsTable = ({ products }) => {
  return (
    <div className="mt-3">
      <table className="table table-sm table-borderless mb-0">
        <thead className="text-muted small">
          <tr>
            <th>Название</th>
            <th>Тип</th>
            <th>Состояние</th>
            <th>Серийный №</th>
            <th>Гарантия</th>
            <th>Грн</th>
            <th>Usd</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p) => (
            <tr key={p._id}>
              <Link to={`/products/${p._id}`} >
                {p.title}
              </Link>
              <td>{p.type}</td>
              <td>
                <OrderBadge product={p} />
              </td>
              <td>{p.serialNumber}</td>
              <td>
                {p.guarantee.start} — {p.guarantee.end}
              </td>
              <td>{p.price.find((x) => x.symbol === "UAH")?.value ?? "-"}</td>
              <td>{p.price.find((x) => x.symbol === "USD")?.value ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetailsTable;
