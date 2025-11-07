import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Link } from "react-router-dom";
import type { ProductResponse } from "@/app/service/products/productType";
import { useProduct } from "@/app/store/product/useProduct";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/app/store/lenguageStateStore";
import { Skeleton } from "./skeleton";

interface ProductCartProps {
  product: ProductResponse
}

export const ProductCart = ({
  product,
}: ProductCartProps) => {
  const { fetchSingleProduct, isLoading } = useProduct();
  const { language } = useLanguageStore()

  // Validar que el producto tenga items y al menos una imagen
  if (!product.items || product.items.length === 0) {
    return null; // No renderizar si no hay items
  }

  const firstItem = product.items[0];

  if (!firstItem.images || firstItem.images.length === 0) {
    return null; // No renderizar si no hay imágenes
  }

  const image = firstItem.images[0]?.image_filename;
  const imageHover = firstItem.images[1]?.image_filename;

  // Si no hay imagen principal, no renderizar
  if (!image) {
    return null;
  }

  return (
    <>
      {isLoading
        ? (
          <div className="flex flex-col gap-3 items-center sm:items-start w-full">
            <Skeleton className="h-[250px] w-[90%] sm:h-[400px] sm:w-[350px] md:h-[500px] md:w-[400px] rounded" />
            <Skeleton className="h-[20px] w-[70%] sm:h-[25px] sm:w-[200px] md:h-[30px] md:w-[230px]" />
            <Skeleton className="h-[10px] w-[50%] sm:h-[12px] sm:w-[140px] md:h-[15px] md:w-[160px]" />
          </div>
        )
        : (
          <Link
            to={`/product/${product.product_category_id}`}
            onClick={() => fetchSingleProduct(product, language)}
          >
            <div className="group relative h-[500px] w-full overflow-hidden">
              <div className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:blur-lg">
                <img
                  src={image}
                  alt={product.product_name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                {imageHover && <img
                  src={imageHover}
                  alt={`${product.product_name} - hover`}
                  className={cn("object-cover transition-transform duration-500 group-hover:scale-105", !imageHover && "hidden")}
                />}
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black p-6 transition-transform duration-500 group-hover:translate-y-0">
                <p className="mb-4 text leading-relaxed text-white/90 truncate">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center mb-2">
                    {firstItem.variations && firstItem.variations.length > 0 && firstItem.variations.map((variant) => (
                      <span
                        key={variant.size_id}
                        className="py-2 px-4 border border-ink-500"
                      >
                        {variant.size_name}
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
                {formatCurrency(firstItem.sale_price)}
              </span>
            </div>
          </Link >
        )}
    </>
  );
}