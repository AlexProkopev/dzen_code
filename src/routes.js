import { lazy } from "react";

const Groups = lazy(() => import("./Pages/Groups/Groups"));
const Orders = lazy(() => import("./Pages/Orders/Orders"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Users = lazy(() => import("./Pages/Users/Users"));
const Settings = lazy(() => import("./Pages/Settings/Settings"));
const ProductDetails = lazy(() => import("./Components/ProductDetails/ProductDetails"));


export const HOME_PAGE = "/";
export const ORDERS_PAGE = "/orders";
export const GROUPS_PAGE = "/groups";
export const PRODUCTS_PAGE = "/products";
export const USERS_PAGE = "/users";
export const SETTINGS_PAGE = "/settings";
export const ORDER_DETAILS_PAGE = "/orders/:id";
export const PRODUCTS_DETAILS_PAGE = "/products/:id";


export const ROUTES_NAV = [
  { path: HOME_PAGE, element: <Orders />, name: null },
  { path: ORDERS_PAGE, element: <Orders />, name: "ПРИХОД" },
  { path: GROUPS_PAGE, element: <Groups />, name: "ГРУППЫ" },
  { path: PRODUCTS_PAGE, element: <Products />, name: "ПРОДУКТЫ" },
  { path: USERS_PAGE, element: <Users />, name: "ПОЛЬЗОВАТЕЛИ" },
  { path: SETTINGS_PAGE, element: <Settings />, name: "НАСТРОЙКИ" },
  { path: PRODUCTS_DETAILS_PAGE, element: <ProductDetails />, name: null },
];