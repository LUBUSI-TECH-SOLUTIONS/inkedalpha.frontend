import { useCart } from "@/app/store/cart/useCart";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { formatCurrency } from "@/lib/utils";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ShoppingCart = () => {
  const { t } = useTranslation();
  const {
    isCartOpen,
    setCartOpen,
    productItems,
    updateItemQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();
  const hasDiscount = productItems.some(item => item.sale_price < item.original_price);

  const totalSavings = productItems.reduce(
    (total, item) =>
      total + (item.original_price - item.sale_price) * item.quantity,
    0
  );

  // ---- Estado principal ----
  const [products, setProducts] = useState<typeof productItems>([]);

  // ---- Cargar productos desde productItems ----
  const handleAddProduct = () => {
    if (!Array.isArray(productItems)) {
      console.error("productItems no es un arreglo válido");
      return;
    }

    if (productItems.length === 0) {
      console.warn("productItems está vacío");
      return;
    }

    setProducts([...productItems]); // Reemplaza el estado con la lista actual
  };

  // ---- Generar mensaje dinámico para WhatsApp ----
  const generarMensaje = () => {
    if (!products || products.length === 0) {
      return "No hay productos seleccionados";
    }

    const lista = products
      .map(
        (p, i) =>
          `${i + 1}. ${p.product_name} - Talla ${p.size_name} - Cantidad: ${p.quantity
          } - Precio: $${p.sale_price}`
      )
      .join("%0A");

    const detalle = products
      .map(
        (p) =>
          `------------------------------------%0A` +
          `Producto: ${p.product_name}%0A` +
          `Talla: ${p.size_name}%0A` +
          `Color: ${p.color_name}%0A` +
          `Cantidad: ${p.quantity}%0A` 
          
      )
      .join("");

    const texto = `Hola! Me interesa comprar los siguientes productos:%0A%0A${lista}%0A%0ADetalles:%0A%0A${detalle}`;

    return `https://wa.me/+573106189254?text=${texto}`;
  };

  // ---- URL final del mensaje ----
  const message = generarMensaje();


  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-family-heading text-ink-300 text-2xl flex items-center gap-x-2 neon-text">
            {t('product.shopping_cart.title')}{' '}({productItems.length})
          </SheetTitle>
        </SheetHeader>
        {productItems.length === 0
          ? (
            <div className="flex flex-col items-center justify-center flex-1">
              <ShoppingBag className="h-16 w-16 mb-4 opacity-50 text-ink-300" />
              <p className="font-family-heading text-ink-300 neon-text text-2xl">Tu carrito está vacío</p>
              <p className="text-sm mt-2">Añade productos para continuar</p>
            </div>
          )
          : (
            <>
              <ScrollArea className="flex-1 px-5 mt-6">
                <div className="space-y-4">
                  {productItems.map((item) => (
                    <div
                      key={item.product_id}
                      className="p-4 border border-ink-700 rounded-lg"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.images[0].image_filename}
                          alt={item.product_name}
                          className="w-24 h-28 object-cover rounded-lg border"
                        />
                        <div className="flex-1 space-y-1">
                          <h4 className="text-ink-300 text-lg uppercase font-family-heading neon-text">
                            {item.product_name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-5 h-5 rounded-full"
                              style={{ backgroundColor: item.hexadecimal || '#666' }}
                              title={item.color_id}
                            />
                            <span className="text-zinc-300 text-lg uppercase">
                              {item.hexadecimal}
                            </span>
                          </div>
                          <p className="text-zinc-300 text-sm">
                            {t('product.size')}: {item.size_name}
                          </p>
                          <div className="flex items-center gap-2 pt-1">
                            {hasDiscount && (
                              <span className="text-zinc-500 line-through text-sm">
                                {formatCurrency(item.original_price)}
                              </span>
                            )}
                            <span className="text-ink-300 text-lg font-family-heading">
                              {formatCurrency(item.sale_price || item.original_price)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateItemQuantity(item.product_id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-white w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateItemQuantity(item.product_id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-white">
                            {formatCurrency(item.sale_price * item.quantity)}
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeFromCart(item.product_id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="mt-auto pt-4 border-t border-zinc-800 space-y-3 p-5 font-family-heading">
                {totalSavings > 0 && (
                  <div className="flex justify-between text-zinc-300text-sm">
                    <span>Ahorros totales:</span>
                    <span className="text-sm">{formatCurrency(totalSavings)}</span>
                  </div>
                )}

                <div className="flex justify-between text-white">
                  <span className="">Total:</span>
                  <span className="text-xltext-ink-300 neon-text">{formatCurrency(getTotalPrice())}</span>
                </div>

                <a
                  className="w-full py-2 px-3 bg-ink-700 text-white rounded-md text-center flex items-center justify-center"
                  onClick={handleAddProduct}
                  href={message}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Finalizar Compra
                </a>
              </div>
            </>
          )}
      </SheetContent>
    </Sheet>
  )
}