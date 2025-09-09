import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { MetricsDisplay } from "@/components/ui/metrics-display";
import { useTranslation } from "react-i18next";


const AboutPage = () => {
	const {t} = useTranslation();
	return (
		<section className="min-h-screen bg-gradient-to-bl from-black via-ink-700/80 to-black flex flex-col items-center justify-center">
			<div className="w-5xl h-full grid grid-cols-2 grid-rows-2 gap-4 p-4 items-center justify-center">
				{/* Image */}
				<AspectRatio>	
					<img
						src="/images/banners/about_one.jpg"
						alt="About us image 1"
						className="object-cover w-full h-full rounded-lg shadow-lg"
					/>
				</AspectRatio>
				{/* Text Content */}
				<div>
					<h2 className="text-2xl md:text-4xl font-family-heading">{t("about.our_mission")}</h2>
					<p className="mt-2 text-gray-300">
						{t("about.mission_description")}
					</p>
					<Button className="mt-4" variant="outline">{t("about.see_more")}</Button>
				</div>
				{/* Que hacemos */}
				<div>
					<h2 className="text-2xl md:text-4xl font-family-heading">{t("about.who_we_are")}</h2>
					<p className="mt-2 text-gray-300">
						{t("about.characteristics_description")}
					</p>
					<div className="flex space-x-4 mt-4">
					</div>
				</div>
				{/* Metricas */}
				<div>
					<MetricsDisplay />
				</div>
			</div>
		</section>
	)
};

export default AboutPage;