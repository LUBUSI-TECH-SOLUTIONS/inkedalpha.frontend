import { HeroSection } from "@/components/ui/hero";
import { CategoryShowcase } from "./components/category";
import { Products } from "./components/products";
import { useEffect } from "react";
import { useProduct } from "@/app/store/product/useProduct";
import { useLanguageStore } from "@/app/store/lenguageStateStore";

const HomePage = () => {
   const { fetchProducts } = useProduct();
   const {language} = useLanguageStore()

   useEffect(() => {
      fetchProducts(language);
   }, [language])

   return (
      <main className="min-h-screen bg-black">
         {/* Hero  */}
         <HeroSection/>
         {/* Category Showcase */}
         <CategoryShowcase/>
         {/* Products Section */}
         <Products />
      </main>
   )
};

export default HomePage;