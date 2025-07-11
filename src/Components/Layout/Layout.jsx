import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./TopBar/Topbar";
import "./Layout.css";

const Layout = () => {
  return (
    <section className="layout">
      <header className="topbar align-items-center ">
        <Topbar />
      </header>

      <main className="layout-main d-flex">
        <aside className="sidebar p-3">
          <Sidebar />
        </aside>
        <section className="content">
          <Outlet />
        </section>
      </main>
    </section>
  );
};

export default Layout;
