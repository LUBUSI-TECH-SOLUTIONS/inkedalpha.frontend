import { Outlet } from "react-router-dom";
import Header from "@/app/layouts/components/header";

const LayoutMain = () => {
   return (
    <>
      <Header />
      <Outlet />
    </>
   );
};

export default LayoutMain;
