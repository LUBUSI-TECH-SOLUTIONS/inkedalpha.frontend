import { MetricsDisplay } from "@/components/ui/metrics-display";
import { useTranslation } from "react-i18next";
import { StoryBlock } from "./components/storyBlock";
import { CarouselInfo } from "./components/carouselInfo";

const AboutPage = () => {
  const { t } = useTranslation();

  const blocks = t("about.about_us", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>
  return (
    <section className="min-h-screen bg-gradient-to-bl from-black via-ink-700/80 to-black flex flex-col items-center justify-center gap-10 py-10">
      <div className="w-full text-center flex flex-col items-center justify-center">
        <img
          src="/images/logo/inkedalpha-logo.webp"
          alt="InkedAlpha"
          className="w-74 h-74 object-contain filter brightness-0 invert"
        />
        <h2 className="text-6xl font-family-heading neon-text urban-text-shadow">
          InkedAlpha
        </h2>
        <p className="text-gray-300 font-semibold">{t("about.description")}</p>
      </div>
      {
        blocks.map((block, index) => (
          <StoryBlock
            key={index}
            title={block.title}
            description={block.description}
            image="/images/banners/about_one.jpg"
            side={index % 2 === 0 ? "left" : "right"}
            size={index % 2 === 0 ? "lg" : "sm"}
          />
        ))
      }
      <MetricsDisplay />
      <CarouselInfo />
    </section>
  );
};

export default AboutPage;
