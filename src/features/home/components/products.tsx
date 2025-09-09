import { ProductCart } from "@/components/ui/product-cart";
import { products } from "@/app/dataExample/products";

export const Products = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-5 flex-wrap bg-gradient-to-b from-black to-ink-700/40 p-5">
      {
        products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  );
}