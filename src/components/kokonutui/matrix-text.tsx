"use client";

/**
 * @author: @dorianbaffier
 * @description: Matrix Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface LetterState {
  char: string;
  isMatrix: boolean;
  isSpace: boolean;
}

interface MatrixTextProps {
  text?: string;
  className?: string;
  initialDelay?: number;
  letterAnimationDuration?: number;
  letterInterval?: number;
  matrixColor?: string;
  matrixShadow?: string;
}

const MatrixText = ({
  text = "HelloWorld!",
  className,
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
  matrixColor = "#00ff41",
  matrixShadow = "0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41",
}: MatrixTextProps) => {
  const [letters, setLetters] = useState<LetterState[]>(() =>
    text.split("").map((char) => ({
      char,
      isMatrix: false,
      isSpace: char === " ",
    }))
  );
  const [isAnimating, setIsAnimating] = useState(false);

  // ... (existing helper functions: getRandomChar, animateLetter, startAnimation, useEffect) ...

  // DNA nucleotide colors (standard sequence colors)
  const nucleotideColors: Record<string, { color: string; shadow: string }> = useMemo(() => ({
    'A': { color: '#22c55e', shadow: '0 0 10px #22c55e, 0 0 20px #22c55e' }, // Green - Adenine
    'T': { color: '#ef4444', shadow: '0 0 10px #ef4444, 0 0 20px #ef4444' }, // Red - Thymine
    'G': { color: '#eab308', shadow: '0 0 10px #eab308, 0 0 20px #eab308' }, // Yellow - Guanine
    'C': { color: '#3b82f6', shadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' }, // Blue - Cytosine
  }), []);

  const getRandomChar = useCallback(
    () => {
      const nucleotides = ['A', 'T', 'G', 'C'];
      return nucleotides[Math.floor(Math.random() * nucleotides.length)];
    },
    []
  );

  const animateLetter = useCallback(
    (index: number) => {
      // ... (same as original)
      if (index >= text.length) return;

      requestAnimationFrame(() => {
        setLetters((prev) => {
          const newLetters = [...prev];
          if (!newLetters[index].isSpace) {
            newLetters[index] = {
              ...newLetters[index],
              char: getRandomChar(),
              isMatrix: true,
            };
          }
          return newLetters;
        });

        setTimeout(() => {
          setLetters((prev) => {
            const newLetters = [...prev];
            newLetters[index] = {
              ...newLetters[index],
              char: text[index],
              isMatrix: false,
            };
            return newLetters;
          });
        }, letterAnimationDuration);
      });
    },
    [getRandomChar, text, letterAnimationDuration]
  );

  const startAnimation = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    let currentIndex = 0;

    const animate = () => {
      if (currentIndex >= text.length) {
        setIsAnimating(false);
        return;
      }

      animateLetter(currentIndex);
      currentIndex++;
      setTimeout(animate, letterInterval);
    };

    animate();
  }, [animateLetter, text, isAnimating, letterInterval]);

  useEffect(() => {
    const timer = setTimeout(startAnimation, initialDelay);
    return () => clearTimeout(timer);
  }, []);


  const motionVariants = useMemo(
    () => ({
      // initial: {
      //     color: "rgb(var(--foreground-rgb))",
      // },
      matrix: {
        color: matrixColor,
        textShadow: matrixShadow,
      },
      // normal: {
      //     color: "rgb(var(--foreground-rgb))",
      //     textShadow: "none",
      // },
    }),
    [matrixColor, matrixShadow]
  );

  return (
    <div
      aria-label="Matrix text animation"
      className={cn(
        "flex items-center justify-center text-black dark:text-white cursor-pointer",
        className
      )}
      onMouseEnter={startAnimation}
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          {letters.map((letter, index) => {
            const nucleotideStyle = letter.isMatrix && nucleotideColors[letter.char]
              ? nucleotideColors[letter.char]
              : null;

            return (
              <motion.div
                animate={nucleotideStyle ? {
                  color: nucleotideStyle.color,
                  textShadow: nucleotideStyle.shadow,
                } : {
                  color: undefined,
                  textShadow: 'none',
                }}
                className="w-[1ch] text-center font-mono"
                initial="initial"
                key={`${index}-${letter.char}`}
                style={{
                  display: "inline-block",
                  fontVariantNumeric: "tabular-nums",
                }}
                transition={{
                  duration: 0.1,
                  ease: "easeInOut",
                }}
              >
                {letter.isSpace ? "\u00A0" : letter.char}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatrixText;
