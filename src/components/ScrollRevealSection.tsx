import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

type ScrollReavealSectionProps = {
  text: string;
  startOffset?: number; // start offset from viewport top.
  endOffset?: number; // end offset from viewport top.
  mode?: "background" | "opacity";
}

export default function ScrollReavealSection ({ text, startOffset = .9, endOffset = .2, mode = "background" }: ScrollReavealSectionProps) {
  const [progress, setProgress] = useState(0);

  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const sectionEl = elementRef.current;

    const calculateProgress = () => {
      if (!sectionEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = startOffset * vh;
      const end = endOffset * vh;
      const distance = start - end;

      const pos = start - rect.y;
      const p = pos / distance;
      
      setProgress(
        Math.min(Math.max(0, p), 1)
      );
    };

    calculateProgress();

    window.addEventListener("scroll", calculateProgress);
    window.addEventListener("resize", calculateProgress);
    
    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, []);
  
  const chars = text.split("");

  return (
    <section
      className="h-screen flex justify-center items-center p-40"
    >
      <p ref={elementRef} className="text-2xl">
        {mode === "background" && (
          <span
            className={clsx(
              "bg-linear-to-r from-white to-white bg-clip-text",
              "bg-no-repeat",
              "text-white/10",

            )}
            style={{ backgroundSize: `${progress * 100}%` }}
          >
            
            {text}
          </span>
        )}

        {mode === "opacity" && (
          <span>
            {chars.map((char, index, arr) => (
              <span
                key={index}
                className={clsx(
                  "text-white",
                  {
                    "opacity-10": index >= progress * arr.length,
                  }
                )}
              >
                {char}
              </span>
            ))}
          </span>
        )}
        
      </p>
    </section>
  );
}
