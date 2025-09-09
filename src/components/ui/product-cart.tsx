import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/entities/product/types";
import { formatCurrency } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProductCartProps {
  product: Product
}

export const ProductCart = ({
  product,
}: ProductCartProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card
        className="relative w-[420px] h-[620px] rounded-2xl shadow-lg overflow-hidden p-0 border border-transparent hover:border-ink-500 transition-all duration-300 hover:scale-105">
        {/* Imagen de fondo */}
        <img
          src={product.image}
          alt="Camisa estampada"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Capa oscura para mejorar legibilidad */}
        <div className="absolute inset-0 bg-ink-black/20" />

        {/* Contenido encima de la imagen */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Botón favorito */}
          <div className="flex justify-end m-5">
            <Button variant="ghost" size="icon">
              <HeartPlus className="w-5 h-5 text-ink-500" />
            </Button>
          </div>

          {/* Info principal */}
          <CardContent
            className="bg-neutral-900 h-[40%] py-2 flex flex-col justify-center gap-2 px-4">
            <h2 className="text-xl font-family-heading text-ink-300 urban-text-shadow text-shadow">{product.name}</h2>
            <div className="flex gap-2">
              {product.tags.map((tag) => (
                <Badge variant="outline" key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-family-heading text-white">
                {formatCurrency(product.price)}
              </span>
              <Button variant="outline">Añadir</Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}