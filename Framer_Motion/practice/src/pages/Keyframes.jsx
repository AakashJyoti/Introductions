import { motion } from "framer-motion";

export default function KeyframesPage() {
  return (
    <div className="h-full flex gap-16 items-center justify-center flex-col">
      <h1>KeyframesPage</h1>
      <motion.div
        className="w-52 h-52 rounded-full bg-blue-500"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 180, 360, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}
