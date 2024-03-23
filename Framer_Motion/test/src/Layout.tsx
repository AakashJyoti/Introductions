import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1000px] mx-auto py-2 px-4">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
