import { useEffect, useState } from "react";

export interface TypewriterTextProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}


export function useTypewriter({
  words = [],
  typeSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 2000,
  loop = true,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (isWaiting) {
          setIsWaiting(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting){
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          }else {
            setIsDeleting(false)
            setCurrentWordIndex((prevIndex) => {
              if( loop ) {
                return (prevIndex + 1) % words.length;
              }
              return Math.min(prevIndex + 1, words.length -1);
            })
          }
        }else {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          }else {
            setIsWaiting(true)
          }
        }
      },
      isWaiting ? delayBetweenWords : isDeleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timeout);
  }, [currentWordIndex, currentText, isDeleting, isWaiting, words, typeSpeed, deleteSpeed, delayBetweenWords, loop]);

  return {
    text: currentText,
    isTyping: !isDeleting && !isWaiting,
    isDeleting,
    isWaiting
  }
}