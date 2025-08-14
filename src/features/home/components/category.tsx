import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export const CategoryShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black">
      <div className="">
        {/* header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-family-heading brand-heading urban-text-shadow">
            {t("home.categoryShowcase.title")}{" "}
            <span className="text-ink-500 neon-text">
              {t("home.categoryShowcase.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg font-family-heading text-gray-400 max-w-2xl mx-auto">
            {t("home.categoryShowcase.subtitle")}
          </p>
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        </div>
        {/* CTA  */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-ink-primary text-ink-primary hover:bg-ink-primary hover:text-white bg-transparent font-copperplate cta-text"
            size="lg">
            <Link to="/categories">{t("home.categoryShowcase.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
