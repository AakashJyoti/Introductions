export const containerVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const nextVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: "150",
    },
  },
};

export const childVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
  },
};
