import { motion } from "motion/react";
const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href, className = "", onClick }) => {
  const text = typeof children === "string" ? children : String(children);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      onClick={onClick}
      className={`relative inline-block overflow-hidden whitespace-nowrap ${className}`}
      style={{ lineHeight: 0.9 }}
    >
      <div>
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
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
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
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

