import { ChangeLanguage } from "@/app/components/changeLenguage";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
          <NavigationMenu viewport={false} className="font-family-heading">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg bg-transparent">{t('header.categories.category')}</NavigationMenuTrigger>
                <NavigationMenuContent >
                  <ul className="md:w-[150px] lg:w-[200px] ">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex w-full flex-col justify-end rounded-md bg-linear-to-b p-2 no-underline outline-hidden select-none focus:shadow-md"
                          to="/"
                        >
                          {t('header.categories.tropical')}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex w-full flex-col justify-end rounded-md bg-linear-to-b p-2 no-underline outline-hidden select-none focus:shadow-md"
                          to="/"
                        >
                          {t('header.categories.urban')}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/about" className="text-lg font-family-heading cta-text hover:text-primary-foreground transition-colors">
            {t('header.about')}
          </Link>
        </nav>
        <div className="flex justify-center">
          <ChangeLanguage />
        </div>
      </div>
    </header>
  );
};

export default Header;
