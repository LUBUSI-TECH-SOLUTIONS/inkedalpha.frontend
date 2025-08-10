import { ModeToggle } from "@/components/ui/mode-toggle"
import { ChangeLanguage } from "./components/changeLenguage"
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-end w-full max-w-3xl gap-x-2">
        <ChangeLanguage />
        <ModeToggle />
      </div>
      <img src="/logos/Severo.webp" alt="Logo inkedalpha" loading="lazy" />
      <h1 className="text-pink-500 text-2xl font-family-heading animate-pulse">
        {t('comming_soon')}
      </h1>
    </section>
  )
}

