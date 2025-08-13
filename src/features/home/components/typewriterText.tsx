import { useTypewriter, type TypewriterTextProps } from "@/features/home/hooks/useTypewriter";


export const TypewriterText = ({
  words,
  className = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true
}: TypewriterTextProps) => {
  const { text, isTyping } = useTypewriter({
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
    loop
  })

  return (
     <div className={`inline-flex items-center justify-center min-h-[1.2em] ${className}`}>
      <span className="text-center">
        {text}
        <span
          className={`ml-2 w-1 h-[0.9em] bg-ink-primary inline-block ${
            isTyping ? "animate-pulse opacity-100" : "animate-typewriter-blink"
          }`}
        />
      </span>
    </div>
  )

}