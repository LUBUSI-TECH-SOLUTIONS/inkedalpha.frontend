import { useCategory } from "@/app/store/category/useCategory";
import { useLanguageStore } from "@/app/store/lenguageStateStore";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const CategoryShowcase = () => {
  const { t } = useTranslation();
  const { fetchCategories, categories } = useCategory();
  const { language } = useLanguageStore();


  useEffect(() => {
    fetchCategories(language);
  }, [fetchCategories]);

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

        <div className="flex items-center justify-center gap-2">
          {categories.map((category) => (
            <Link
              to={`/category/${category.parent_category_id}`}
              key={category.parent_category_id}
              className="border border-ink-500 text-ink-400 px-4 py-2 rounded-md hover:bg-ink-400 hover:text-black transition-colors text-2xl font-family-heading"
            >
              {category.category_name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
