import { ProductCart } from "@/components/ui/product-cart";
import { productsData } from "@/app/dataExample/products";

export const Products = () => {
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 bg-gradient-to-b from-black to-ink-700/40 p-5">
      {
        productsData.map((product) => (
          <ProductCart
            key={product.collection_id}
            product={product}
          />
        ))
      }
    </div>
  );
}