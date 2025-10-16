import { ChangeLanguage } from "@/app/components/changeLenguage";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Search } from "@/app/layouts/components/search";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-50 border-b border-ink-dark bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="flex h-16 items-center justify-evenly w-full">
        {/*logo*/}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <img
              src="/logos/Severo.webp"
              alt="Logo inkedalpha"
              loading="lazy"
              className="object-contain filter brightness-0 invert"
            />
          </div>
          <div className="text-xl md:text-2xl font-family-heading neon-text urban-text-shadow">
            INKED<span className="text-primary-foreground">ALPHA</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/shop" className="text-lg font-family-heading cta-text hover:text-primary-foreground transition-colors">
            {t('header.shop')}
          </Link>
          <Link to="/category" className="text-lg font-family-heading cta-text hover:text-primary-foreground transition-colors">
            {t('header.categories')}
          </Link>
          <Link to="/about" className="text-lg font-family-heading cta-text hover:text-primary-foreground transition-colors">
            {t('header.about')}
          </Link>
        </nav>
        <div className="flex justify-center items-center gap-x-2">
          <Search />
          <ChangeLanguage />
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <ShoppingBag className="text-ink-500" /> {/* Shopping cart icon, can be replaced with a link to the cart page */}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
