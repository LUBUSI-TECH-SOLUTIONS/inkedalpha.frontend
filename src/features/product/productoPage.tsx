import { useProduct } from "@/app/store/product/useProduct";
import { formatCurrency } from "@/lib/utils";

const ProductPage = () => {
  const { selectedProduct } = useProduct();


  return (
    <section className="grid grid-cols-2 grid-rows-1 gap-4 p-10">
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        {selectedProduct?.items[0].images.map((image, index) => (
          <div key={index} className="w-full h-[600px] overflow-hidden">
            <img
              src={image}
              alt={`${selectedProduct.product_name} - ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="p-10">
        <div className="flex items-center justify-between"> 
          <h1 className="font-family-heading text-3xl text-ink-300 mb-4">
            {selectedProduct?.product_name}
          </h1>
          <span className="font-mono text-ink-300 text-lg">
            {selectedProduct && selectedProduct.items[0]
              ? formatCurrency(selectedProduct.items[0].sale_price)
              : 'Price not available'}
          </span>

        </div>
      </div>
    </section>
  );
};

export default ProductPage;