import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Modal from "./modals/Modal";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1000px] mx-auto py-2 px-4">
        <Outlet />
      </div>
      <Modal />
    </>
  );
};
export default Layout;
