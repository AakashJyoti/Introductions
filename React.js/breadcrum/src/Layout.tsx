import { Outlet } from "react-router-dom";
import { Breadcrumbs, Navbar } from "./components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Outlet />
    </>
  );
};
export default Layout;
