import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { ROUTES_NAV } from "./routes.js";
import Orders from "./Pages/Orders/Orders.jsx";
import { Suspense } from "react";
import Loader from "./Components/Loader/Loader.jsx";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./Components/PageWrapper/PageWrapper.jsx";
import { ActiveTabsProvider } from "./Components/WebSocketCounter/ActiveTabsContext.jsx";

function App() {
  const location = useLocation();

  return (
    <ActiveTabsProvider>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              {ROUTES_NAV.map(({ path, element }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={<PageWrapper>{element}</PageWrapper>}
                />
              ))}
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <Orders />
                  </PageWrapper>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ActiveTabsProvider>
  );
}

export default App;
