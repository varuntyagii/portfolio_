import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink1 = ({
  children,
  href,
  className = "",
  onClick,
  parentHovered = false,
}) => {
  const text = typeof children === "string" ? children : String(children);

  return (
   <motion.a
  initial="initial"
  animate={parentHovered ? "hovered" : "initial"}
  href={href}
  onClick={onClick}
  className={`relative inline-block overflow-hidden ${className}`}
  style={{
    lineHeight: 1,
    height: "1em",
  }}
>
      {/* FIRST TEXT */}
     <div className="block">
  {text.split("").map((l, i) => (
    <motion.span
      key={i}
      variants={{
        initial: { y: 0 },
        hovered: { y: "-100%" },
      }}
      transition={{
        duration: DURATION,
        ease: "easeInOut",
        delay: STAGGER * i,
      }}
      className="inline-block"
    >
      {l === " " ? "\u00A0" : l}
    </motion.span>
  ))}
</div>

      {/* SECOND TEXT */}
  <div className="absolute left-0 top-0 w-full h-full">
  {text.split("").map((l, i) => (
    <motion.span
      key={i}
      variants={{
        initial: { y: "100%" },
        hovered: { y: 0 },
      }}
      transition={{
        duration: DURATION,
        ease: "easeInOut",
        delay: STAGGER * i,
      }}
      className="inline-block"
    >
      {l === " " ? "\u00A0" : l}
    </motion.span>
  ))}
</div>
    </motion.a>
  );
};