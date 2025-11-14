import { useProduct } from "@/app/store/product/useProduct";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";
import { ImageWithFallback } from "./components/imageWithFallback";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { toast } from "sonner";
import { useCart } from "@/app/store/cart/useCart";
import { Skeleton } from "@/components/ui/skeleton";

const ProductPage = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const { selectedProduct, isLoading } = useProduct();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)

  const currentItem = selectedProduct?.items[selectedItemIndex];

  const original = currentItem?.original_price ?? 0;
  const sale = currentItem?.sale_price ?? 0;
  const hasDiscount = sale < original;
  const discountPercentage = hasDiscount
    ? Math.round(((original - sale) / original) * 100)
    : 0;

  const handleItemChange = (index: number) => {
    setSelectedItemIndex(index);
    setSelectedImage(0);
    setSelectedSize(null);
  }

  const handleAddToCart = () => {
    if (!currentItem) {
      toast.error('Por favor selecciona un color');
      return;
    }
    if (!selectedSize) {
      toast.error('Por favor selecciona una talla');
      return;
    }
    const sizeName = currentItem?.variations.find(variation => variation.size_id === selectedSize)?.size_name;

    addToCart(selectedProduct, currentItem, selectedSize, sizeName || '');
    toast.success(`${selectedProduct.product_name} añadido al carrito`);
    setSelectedSize('');
  };

  const getStockStatus = (qty: number) => {
    if (qty === 0) return { text: "Agotado", color: "bg-red-100 text-red-800" };
    if (qty <= 3) return { text: `Solo ${qty} disponibles`, color: "bg-orange-100 text-orange-800" };
    return { text: "Disponible", color: "bg-green-100 text-green-800" };
  }

  const selectedVariation = currentItem?.variations.find(variation => variation.size_id === selectedSize);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-ink-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Galery and Images */}
          <div className="space-y-3 lg:sticky lg:top-6 lg:self-start">
            {
              isLoading
                ? (
                  <>
                    {/* Imagen principal */}
                    <Skeleton className="w-full aspect-[3/4] sm:aspect-square rounded-xl" />

                    {/* Miniaturas */}
                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="aspect-square rounded-md" />
                      ))}
                    </div>
                  </>
                )
                : (
                  <>
                    <div className="aspect-[3/4] sm:aspect-square overflow-hidden border border-neutral-900">
                      <ImageWithFallback
                        src={currentItem?.images[selectedImage].image_filename}
                        alt={selectedProduct?.product_name || "Product Image"}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      {currentItem?.images.map((imgSrc, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`aspect-square bg-neutral-200 overflow-hidden border transition-all ${selectedImage === index ? 'border-black border-2' : 'border-neutral-300 hover:border-neutral-800'
                            }`}
                        >
                          <ImageWithFallback
                            src={imgSrc.image_filename}
                            alt={`${selectedProduct?.product_name || "Product"} Thumbnail ${index + 1}`}
                            className="object-cover w-full h-full"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}
          </div>

          {/* Product Info */}
          <div className="space-y-6 lg:space-y-8">
            {isLoading
              ? (
                <>
                  {/* Título */}
                  <Skeleton className="h-[30px] w-[60%] sm:w-[300px] md:w-[400px] rounded" />

                  {/* Precio */}
                  <div className="flex gap-3">
                    <Skeleton className="h-[25px] w-[120px] rounded" />
                    <Skeleton className="h-[20px] w-[80px] rounded" />
                  </div>

                  {/* Descripción */}
                  <Skeleton className="h-[80px] w-[90%] sm:w-[80%] rounded" />

                  {/* Selector color */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-ink-500">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} className="w-12 h-12 sm:w-14 sm:h-14" />
                    ))}
                  </div>

                  {/* Selector talla */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 py-6 border-t border-b border-ink-500">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <Skeleton key={i} className="h-[45px] sm:h-[55px] rounded" />
                    ))}
                  </div>

                  {/* Info del modelo */}
                  <div className="grid grid-cols-2 gap-4 border border-ink-400 p-4 sm:p-5">
                    <Skeleton className="h-[20px] w-[60%]" />
                    <Skeleton className="h-[20px] w-[50%]" />
                  </div>

                  {/* Botones */}
                  <div className="space-y-3 sm:space-y-4">
                    <Skeleton className="h-[50px] w-full rounded" />
                    <Skeleton className="h-[50px] w-full rounded" />
                  </div>

                  {/* Tabs */}
                  <div className="space-y-3 pt-6 border-t border-ink-300">
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <Skeleton key={i} className="h-[30px] rounded" />
                      ))}
                    </div>
                    <div className="space-y-2 pt-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-[15px] w-[80%] rounded" />
                      ))}
                    </div>
                  </div>
                </>
              )
              : (
                <>
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight font-family-heading">
                          {selectedProduct?.product_name}
                        </h2>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex flex-wrap items-baseline gap-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-ink-500">
                      <span className="text-2xl sm:text-3xl tracking-tight font-family-heading text-ink-300">{formatCurrency(currentItem?.sale_price || 0)}</span>
                      {hasDiscount && (
                        <>
                          <span className="text-lg ms:text-xl text-ink-600 line-through font-family-heading">
                            {formatCurrency(currentItem?.original_price || 0)}
                          </span>
                          <Badge variant="destructive" className="rounded-none uppercase text-shadow-xs">
                            -{discountPercentage}%
                          </Badge>
                        </>
                      )}
                    </div>

                    <p className="text-neutral-200 leading-relaxed text-lg">{selectedProduct?.description}</p>
                  </div>

                  {/* Selector color  */}
                  {(selectedProduct?.items?.length ?? 0) > 1 && (
                    <div className="border-t border-ink-500 pt-6">
                      <label className="block uppercase text-sm tracking-wide mb-4">
                        {t("product.color")}: <span className="text-ink-500">{currentItem?.color_name}</span>
                      </label>

                      <div className="flex flex-wrap gap-3">
                        {selectedProduct?.items.map((item, index) => {
                          const isSelected = selectedItemIndex === index;

                          return (
                            <button
                              key={index}
                              onClick={() => handleItemChange(index)}
                              className={`
                              relative w-12 h-12 sm:w-14 sm:h-14 border-2 transition-all
                              ${isSelected ? 'border-ink-500' : 'border-ink-300 hover:border-ink-600'}
                        `}
                              style={{ backgroundColor: item.hexadecimal }}
                              title={item.color_id}
                            >
                              {isSelected && (
                                <Check
                                  className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Selector size  */}
                  <div className="border-t border-b border-ink-500 py-6">
                    <div className="flex items-center justify-between mb-4">
                      <label className="block uppercase text-sm tracking-wide">
                        {t("product.size")}
                      </label>
                      <button className="text-sm uppercase tracking-wide underline hover:no-underline">
                        {t("product.size_guide")}
                      </button>
                    </div>

                    <div className="grid grid-cols-4 gap-2 sm:gap-3">
                      {currentItem?.variations.map((variation) => {
                        const isAvailable = variation.qty_in_stock > 0;
                        const isSelected = selectedSize === variation.size_id;

                        return (
                          <button
                            key={variation.size_id}
                            onClick={() => isAvailable && setSelectedSize(variation.size_id)}
                            disabled={!isAvailable}
                            className={`
                        relative py-3 sm:py-4 px-3 sm:px-4 border transition-all uppercase text-sm sm:text-base tracking-wide font-family-special
                        ${isSelected ? 'border-ink-500 text-white border-2' : 'border-ink-300 hover:border-ink-500 bg-ink-700'}
                        ${!isAvailable ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
                      `}
                          >
                            <span>{variation.size_name}</span>
                            {isSelected && (
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 absolute top-1 right-1" />
                            )}
                            {!isAvailable && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-px bg-neutral-500 -rotate-45"></div>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {selectedVariation && (
                      <div className="mt-4 text-xs uppercase tracking-wide">
                        <span className={`inline-block px-3 py-1 border ${selectedVariation.qty_in_stock === 0
                          ? 'border-red-800 text-red-800'
                          : selectedVariation.qty_in_stock <= 3
                            ? 'border-orange-800 text-orange-800'
                            : 'border-green-800 text-green-800'
                          }`}>
                          {getStockStatus(selectedVariation.qty_in_stock).text}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* info model  */}
                  <div className="border border-ink-400 p-4 sm:p-5">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="blok text-sx uppercase tracking-wide text-ink-500 mb-1">
                          {t("product.model_height")}
                        </span>
                        <span className="block">{selectedProduct?.model_height}</span>
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-wide text-ink-500 mb-1">
                          {t("product.model_wearing")}
                        </span>
                        <span className="block">{selectedProduct?.model_wearing}</span>
                      </div>
                    </div>
                  </div>
                  {/* Buttons actions  */}
                  <div className="space-y-3 sm:space-y-4">
                    <Button
                      onClick={handleAddToCart}
                      size="lg"
                      className="w-full"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      {t("product.add_to_cart")}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full"
                      disabled={!selectedSize}
                    >
                      {t("product.shop_now")}
                    </Button>
                  </div>

                  <Tabs defaultValue="details" className="w-full border-t border-ink-300 pt-6">
                    <TabsList className="grid w-full grid-cols-3 rounded-none bg-transparent border-b border-ink-300 h-auto p-0">
                      <TabsTrigger
                        value="details"
                        className="rounded-none uppercase text-sx sm:text-sm tracking-wide data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-ink-500 pb-3"
                      >
                        {t("product.details")}
                      </TabsTrigger>
                      <TabsTrigger
                        value="care"
                        className="rounded-none uppercase text-sx sm:text-sm tracking-wide data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-ink-500 pb-3"
                      >
                        {t("product.care")}
                      </TabsTrigger>
                      <TabsTrigger
                        value="story"
                        className="rounded-none uppercase text-sx sm:text-sm tracking-wide data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-ink-500 pb-3"
                      >
                        {t("product.story")}
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="details" className="space-y-0 pt-6">
                      {selectedProduct?.attributes.map((attr, index) => (
                        <div key={index} className="flex justify-between py-3 border-b border-ink-500 last:border-0">
                          <span className="text-sm uppercase tracking-wide text-ink-500 font-family-heading">{attr.attribute_name}</span>
                          <span className="text-sm">{attr.attribute_value}</span>
                        </div>
                      ))}
                    </TabsContent>

                    <TabsContent value="care" className="pt-6">
                      <p className="text-sm text-neutral-200 leading-relaxed">{selectedProduct?.care_instructions}</p>
                    </TabsContent>

                    <TabsContent value="story" className="pt-6">
                      <p className="text-sm text-neutral-200 leading-relaxed">{selectedProduct?.story_time}</p>
                    </TabsContent>
                  </Tabs>
                </>
              )}
            {/* Header */}
          </div>
        </div>
      </div>
    </section >
  );
};

export default ProductPage;