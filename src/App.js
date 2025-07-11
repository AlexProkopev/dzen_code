import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { ROUTES_NAV } from "./routes.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {ROUTES_NAV.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
