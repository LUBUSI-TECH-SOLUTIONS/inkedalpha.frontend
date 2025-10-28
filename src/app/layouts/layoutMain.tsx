import { Outlet } from "react-router-dom";
import Header from "@/app/layouts/components/header";
import { Footer } from "@/app/layouts/components/footer";
import { ShoppingCart } from "@/features/cart/cart";

const LayoutMain = () => {
   return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ShoppingCart/>
    </>
   );
};

export default LayoutMain;
