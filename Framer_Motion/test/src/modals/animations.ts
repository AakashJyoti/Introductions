export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.3,
    },
  },
};

export const bgVariants = {
  hidden: {
    height: "0px",
  },
  visible: {
    height: "100vh",
  },
  exit: {
    height: "0px",
    transition: {
      delay: 0.5,
    },
  },
};
