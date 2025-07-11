
import Groups from "./Pages/Groups/Groups";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";
import Settings from "./Pages/Settings/Settings";


export const HOME_PAGE = "/";
export const ORDERS_PAGE = "/orders";
export const GROUPS_PAGE = "/groups";
export const PRODUCTS_PAGE = "/products";
export const USERS_PAGE = "/users";
export const SETTINGS_PAGE = "/settings";


export const ROUTES_NAV = [
  { path: HOME_PAGE, element: <Orders />, name: null },
  { path: ORDERS_PAGE, element: <Orders />, name: null },
  { path: GROUPS_PAGE, element: <Groups />, name: null },
  { path: PRODUCTS_PAGE, element: <Products />, name: null },
  { path: USERS_PAGE, element: <Users />, name: null },
  { path: SETTINGS_PAGE, element: <Settings />, name: null },

  
  
  
];