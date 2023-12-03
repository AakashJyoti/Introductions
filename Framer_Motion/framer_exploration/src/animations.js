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

export const buttonVariants = {
  final: {
    x: [0, -20, 20, -20, 20, 0],
    transition: {
      delay: 1,
    },
  },
  hover: {
    scale: [1, 1.1, 1],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.2,
      duration: 0.4,
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
};

export const listVariants = {
  hover: {
    scale: 1.1,
    color: "#F8e112",
    originX: 0,
    transition: {
      type: "tween",
      duration: 0.1,
    },
  },
};
