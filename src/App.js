import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { ROUTES_NAV } from "./routes.js";
import Orders from "./Pages/Orders/Orders.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {ROUTES_NAV.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Orders />} />
      </Route>
    </Routes>
  );
}

export default App;
