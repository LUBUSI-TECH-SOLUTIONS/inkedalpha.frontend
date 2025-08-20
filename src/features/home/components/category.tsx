import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { products } from "@/app/dataExample/products";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const CategoryShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black">
      <div className="mx-10">
        {/* header */}
        <section className="py-20 bg-black">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-family-heading brand-heading urban-text-shadow">
                {t('home.header.title_first')}{' '}
                <span className="text-ink-400 neon-text animate-text-glow">{t('home.header.title_second')}</span>
              </h2>
              <p className="text-xl font-body body-text text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t('home.header.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="space-y-4 p-6 border border-ink-500 rounded-lg hover:border-ink-400 transition-colors group">
                <div className="text-3xl font-family-special brand-heading text-ink-400 group-hover:animate-text-glow">
                  01
                </div>
                <h3 className="text-xl font-family-heading product-title">
                  {t('home.header.features.unique_design.title')}
                </h3>
                <p className="font-body body-text text-gray-400">
                  {t('home.header.features.unique_design.description')}
                </p>
              </div>

              <div className="space-y-4 p-6 border border-ink-500 rounded-lg hover:border-ink-400 transition-colors group">
                <div className="text-3xl font-family-special brand-heading text-ink-400 group-hover:animate-text-glow">
                  02
                </div>
                <h3 className="text-xl font-family-heading product-title">
                  {t('home.header.features.premium_quality.title')}
                </h3>
                <p className="font-body body-text text-gray-400">
                  {t('home.header.features.premium_quality.description')}
                </p>
              </div>

              <div className="space-y-4 p-6 border border-ink-500 rounded-lg hover:border-ink-400 transition-colors group">
                <div className="text-3xl font-family-special brand-heading text-ink-400 group-hover:animate-text-glow">
                  03
                </div>
                <h3 className="text-xl font-family-heading product-title">
                  {t('home.header.features.rebellious_identity.title')}
                </h3>
                <p className="font-body body-text text-gray-400">
                  {t('home.header.features.rebellious_identity.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products
            .filter((product) => product.isFeatured)
            .slice(0, 4)
            .map((product) => (
              <Link
                to={`/`}
                key={product.id}
                className="group relative block"
              >
                <AspectRatio
                  ratio={3 / 4}
                  className="rounded-lg overflow-hidden bg-ink-800 hover:bg-ink-700/">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-500/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                   {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-family-heading brand-heading urban-text-shadow ">
                        {product.category}
                      </h3>
                      <p className="font-body text-gray-500 italic">"{product.story.vibe}"</p>
                    </div>
                  </div>
                </AspectRatio>
              </Link>
            ))}
        </div>
        {/* CTA  */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-ink-400 text-ink-400 hover:bg-ink-400 hover:text-white bg-transparent font-family-heading cta-text"
            size="lg">
            <Link to="/categories">{t("home.categoryShowcase.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
