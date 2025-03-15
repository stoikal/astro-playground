import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

type ScrollReavealSectionProps = {
  text: string;
  startOffset?: number; // start offset from viewport top.
  endOffset?: number; // end offset from viewport top. 
}

export default function ScrollReavealSection ({ text, startOffset = .9, endOffset = .2 }: ScrollReavealSectionProps) {
  const [bgSize, setBgSize] = useState(0);

  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const sectionEl = elementRef.current;

    const calculateBgSize = () => {
      if (!sectionEl) return;
      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = startOffset * vh;
      const end = endOffset * vh;
      const distance = start - end;

      const pos = start - rect.y;
      const p = pos / distance;
      
      setBgSize(Math.max(0, p * 100));
    };

    calculateBgSize();

    window.addEventListener("scroll", calculateBgSize);
    window.addEventListener("resize", calculateBgSize);
    
    return () => {
      window.removeEventListener("scroll", calculateBgSize);
      window.removeEventListener("resize", calculateBgSize);
    };
  }, []);
  

  return (
    <section
      className="h-screen flex justify-center items-center p-40"
    >
      <p ref={elementRef}>
        <span
          className={clsx(
            "bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text",
            "bg-no-repeat",
            "text-white/10 text-2xl ",

          )}
          style={{ backgroundSize: `${bgSize}%` }}
        >
          
          {text}
        </span>
      </p>
    </section>
  );
}
