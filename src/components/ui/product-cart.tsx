import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Link } from "react-router-dom";
import type { ProductResponse } from "@/app/service/products/productType";
import { useProduct } from "@/app/store/product/useProduct";

interface ProductCartProps {
  product: ProductResponse
}

export const ProductCart = ({
  product,
}: ProductCartProps) => {
  const { selectProduct } = useProduct();

  return (
    <Link
      to={`/product/${product.product_category_id}`}
      onClick={() => selectProduct(product)}
    >
      <div className="group relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:blur-lg">
          <img
            src={product.items[0].images[0]}
            alt={product.product_name}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <img
            src={product.items[0].images[1]}
            alt={`${product.product_name} - hover`}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black p-6 transition-transform duration-500 group-hover:translate-y-0">
          <p className="mb-4 text leading-relaxed text-white/90 truncate">
            {product.description}
          </p>
          <div className="flex items-center justify-between"> 
            <div className="flex items-center mb-2">
              {product.items[0].variations.map((variant) => (
                <span
                  key={variant.size_id}
                  className="py-2 px-4 border border-ink-500"
                >
                  {variant.size_id}
                </span>
              ))}
            </div>
            <Button variant="secondary" size="lg">
              Añadir
            </Button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-family-heading text-xl text-ink-300">
          {product.product_name}
        </h2>
        <span className="font-mono text-ink-300">
          {formatCurrency(product.items[0].sale_price)}
        </span>
      </div>
    </Link>
  );
}