import { useTranslation } from "react-i18next";
import { TypewriterText } from "@/app/components/typewriterText";

interface HeroSectionProps {
  bannerImage?: string;
  typewriterWords?: string[];
}

export const HeroSection = ({
  bannerImage = "/background/bg_one.webp",
  typewriterWords = [
    "accessories",
    "gadgets",
    "electronics",
    "smart devices",
  ],
}: HeroSectionProps) => {

  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Banner */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImage}
          alt="Background default"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* typewriter effect */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-family-heading brand-heading text-white">
            <TypewriterText
              words={typewriterWords.length > 0 ? typewriterWords : [t("hero.typewriter.default")]}
              typeSpeed={120}
              deleteSpeed={80}
              delayBetweenWords={2000}
              className="neon-text urban-text-shadow typewriter-glow drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-5" />
    </section>
  )
}