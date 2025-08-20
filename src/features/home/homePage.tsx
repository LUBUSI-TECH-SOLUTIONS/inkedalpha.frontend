import { HeroSection } from "@/features/home/components/hero";
import { CategoryShowcase } from "./components/category";

const HomePage = () => {
   return (
      <main className="min-h-screen bg-black">
         {/* Hero  */}
         <HeroSection/>
         {/* Category Showcase */}
         <CategoryShowcase/>
      </main>
   )
};

export default HomePage;