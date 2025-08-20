import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black border-t border-ink-400 flex items-center justify-center">
      <div className="py-12 container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <img
                  src="/logos/Severo.webp"
                  alt="Logo inkedalpha"
                  loading="lazy"
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <div className="text-xl md:text-2xl font-family-heading neon-text urban-text-shadow">
                INKED<span className="text-400-foreground">ALPHA</span>
              </div>
            </div>
            <p className="text-sm font-body body-text text-gray-400">{t('footer.description')}</p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:text-ink-400">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-ink-400">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-ink-400">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-family-heading product-title">{t('footer.shop.title')}</h3>
            <div className="space-y-2 text-sm font-body body-text">
              <Link to="/shop/men" className="block hover:text-ink-400 transition-colors">
                {t('footer.shop.men')}
              </Link>
              <Link to="/shop/women" className="block hover:text-ink-400 transition-colors">
                {t('footer.shop.women')}
              </Link>
              <Link to="/shop/accessories" className="block hover:text-ink-400 transition-colors">
                {t('footer.shop.accessories')}
              </Link>
              <Link to="/shop/new" className="block hover:text-ink-400 transition-colors">
                {t('footer.shop.new')}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-family-heading product-title">{t('footer.support.title')}</h3>
            <div className="space-y-2 text-sm font-body body-text">
              <Link to="/contact" className="block hover:text-ink-400 transition-colors">
                {t('footer.support.contact')}
              </Link>
              <Link to="/shipping" className="block hover:text-ink-400 transition-colors">
                {t('footer.support.shipping')}
              </Link>
              <Link to="/returns" className="block hover:text-ink-400 transition-colors">
                {t('footer.support.returns')}
              </Link>
              <Link to="/size-guide" className="block hover:text-ink-400 transition-colors">
                {t('footer.support.sizeGuide')}
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-family-heading product-title">{t('footer.newsletter.title')}</h3>
            <p className="text-sm font-body body-text text-gray-400">{t('footer.newsletter.description')}</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-black/50 border-ink-400 focus:border-ink-500 font-body"
              />
              <Button variant="secondary" className="w-full">
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ink-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-body body-text text-gray-400">© 2025 InkedAlpha. {t('footer.legal.rights')}</p>
          <div className="flex space-x-6 text-sm font-body body-text">
            <Link to="/privacy" className="hover:text-ink-500 transition-colors">
              {t('footer.legal.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-ink-500 transition-colors">
              {t('footer.legal.terms')}
            </Link>
            <Link to="/cookies" className="hover:text-ink-500 transition-colors">
              {t('footer.legal.cookies')}
            </Link>
          </div>
        </div>
      </div>  
    </footer>
  )
}