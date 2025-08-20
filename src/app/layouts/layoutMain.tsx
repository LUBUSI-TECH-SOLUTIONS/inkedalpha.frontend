import { Outlet } from "react-router-dom";
import Header from "@/app/layouts/components/header";
import { Footer } from "@/app/layouts/components/footer";

const LayoutMain = () => {
   return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
   );
};

export default LayoutMain;
