"use client";

import { m, type Transition } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 18
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  const transition: Transition = { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay };

  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </m.div>
  );
}
