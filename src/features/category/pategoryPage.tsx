import { useEffect } from "react";
import { useProductCategory } from "./store/useProductCategory";
import { CategoryCard } from "./components/categoryCart";

const CategoryPage = () => {
  const { fetchCategories, categories } = useProductCategory()

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl px-6 py-8">
      {categories.map(category => (
        <CategoryCard key={category.product_category_id} category={category} />
      ))}
    </div>
  );
};

export default CategoryPage;