import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariants, homeVariants } from "../animations";

export default function Home() {
  return (
    <motion.div
      className="home container"
      variants={homeVariants}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          animate="final"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
}
