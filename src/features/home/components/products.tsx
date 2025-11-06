import { ProductCart } from "@/components/ui/product-cart";
import { useProduct } from "@/app/store/product/useProduct";

export const Products = () => {
  const { products } = useProduct();

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 bg-gradient-to-b from-black to-ink-700/40 p-5">
      {products.map((product) => (
        <ProductCart key={product.product_id} product={product} />
      ))}
    </div>
  );
};
