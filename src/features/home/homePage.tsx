import { HeroSection } from "@/components/ui/hero";
import { CategoryShowcase } from "./components/category";
import { Products } from "./components/products";

const HomePage = () => {
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