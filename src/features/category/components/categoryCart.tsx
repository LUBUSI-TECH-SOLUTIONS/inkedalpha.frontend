import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { CategoryType } from "../types/productCategoryType"

interface CategoryCardProps {
  category: CategoryType
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg border-border/50">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {category.category_image ? (
          <img
            src={category.category_image || "/placeholder.svg"}
            alt={category.category_name}
            className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <div className="text-center">
              <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-serif text-primary">{category.category_name.charAt(0)}</span>
              </div>
              <p className="text-sm text-muted-foreground">Sin imagen</p>
            </div>
          </div>
        )}
      </div>

      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="font-family-heading text-2xl font-normal leading-tight">{category.category_name}</CardTitle>
          {category.parent_category_name && (
            <Badge variant="secondary" className="shrink-0 text-xs">
              {category.parent_category_name}
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm leading-relaxed">{category.category_description}</CardDescription>
      </CardHeader>

      <CardContent>
        <button className="group/btn inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
          Ver productos
          <svg
            className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </CardContent>
    </Card>
  )
}
