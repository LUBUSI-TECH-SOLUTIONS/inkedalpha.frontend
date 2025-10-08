interface StoryBlockProps {
  image: string;
  title: string;
  description: string;
  side: "left" | "right";
  size?: "lg" | "sm";
}

export const StoryBlock = ({
  image,
  title,
  description,
  side,
  size = "lg",
}: StoryBlockProps) => {
  const isLeft = side === "left";

  const sizeClasses = {
    lg: {
      container: "py-8 md:py-12",
      gap: "gap-8 md:gap-12",
      image: "h-64 md:h-80 lg:h-96",
      overlap: isLeft ? "md:-ml-16" : "md:-mr-16",
      padding: "p-6 md:p-8",
      title: "text-2xl md:text-3xl lg:text-4xl",
      text: "text-base md:text-lg",
    },
    sm: {
      container: "py-4 md:py-6",
      gap: "gap-4 md:gap-6",
      image: "h-48 md:h-56 lg:h-64",
      overlap: isLeft ? "md:-ml-12" : "md:-mr-12",
      padding: "p-4 md:p-6",
      title: "text-xl md:text-2xl lg:text-3xl",
      text: "text-sm md:text-base",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      className={`relative w-full max-w-6xl mx-auto px-4 ${currentSize.container}`}>
      <div
        className={`flex flex-col ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center ${currentSize.gap}`}>
        {/* Image Container */}
        <div className="relative w-full md:w-1/2 flex-shrink-0">
          <div className="relative overflow-hidden shadow-2xl">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className={`w-full ${currentSize.image} object-cover transition-transform duration-500 hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
        {/* Text Container with Overlap Effect */}
        <div className={`relative w-full md:w-1/2 ${currentSize.overlap} z-10`}>
          <div
            className={`bg-black ${currentSize.padding} shadow-2xl border-l-4 border-white`}>
            <div className="space-y-4">
              <h3
                className={`${currentSize.title} font-black text-white leading-tight uppercase tracking-wide`}>
                {title}
              </h3>
              <div className="w-16 h-1 bg-white" />
              <p
                className={`text-gray-300 ${currentSize.text} leading-relaxed font-medium`}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
