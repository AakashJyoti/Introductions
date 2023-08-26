import { motion } from "framer-motion";

export default function AnimationPage() {
  return (
    <div className="h-full flex gap-16 items-center justify-center flex-col">
      <p>AnimationPage</p>
      <motion.div
        className="w-52 h-52 rounded-full bg-blue-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.5 }}
      />
    </div>
  );
}
