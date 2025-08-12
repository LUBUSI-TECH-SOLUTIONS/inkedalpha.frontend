import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "@/app/layouts/layoutMain";
import HomePage from "@/features/home/homePage";
import ShopPage from "@/features/shop/shopPage";
import CategoryPage from "@/features/category/pategoryPage";
import AboutPage from "@/features/about/aboutPage";
import ProductPage from "@/features/product/productoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {path: "/", element: <HomePage />},
      {path: "/shop", element: <ShopPage />},
      {path: "/category/:id_category", element: <CategoryPage />},
      {path: "/about", element: <AboutPage />},
      {path: "/product/:id_product", element: <ProductPage />},
    ]
  }
])

