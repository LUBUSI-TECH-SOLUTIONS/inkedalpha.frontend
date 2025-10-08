import { carouselData } from "@/app/dataExample/carouselData";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselInfo = () => {
  return (
    <div className="w-full overflow-x-auto px-15 bg-gradient-to-l from-black via-ink-700/80 to-black py-10">
      <div className="text-center mb-8 space-y-4 px-4">
        <h2 className="text-5xl font-family-heading">Nuetras Historias</h2>
        <p className="text-xl text-slate-200 max-w-2xl mx-auto text-pretty drop-shadow-md">
          Descubre las historias fascinantes detrás de cada diseño, desde su
          inspiración hasta su impacto cultural
        </p>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-2 grid-rows-1 gap-4">
                <div className="flex items-end justify-end">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-sm w-full h-auto object-contain rounded"
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <img
                    src="/images/logo/inkedalpha-logo.webp"
                    alt="InkedAlpha"
                    className="w-74 h-74 object-contain filter brightness-0 invert"
                  />
                  <h2 className="text-5xl font-family-heading text-white drop-shadow-md pb-5">
                    {item.title}
                  </h2>
                  <p className="w-90 text-gray-100 pl-5">{item.description}</p>
                  <Button
                    variant="outline"
                    className="mt-4 w-60 border-white text-white hover:bg-white hover:text-black"
                  >
                    Explora {item.category} Ahora
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
