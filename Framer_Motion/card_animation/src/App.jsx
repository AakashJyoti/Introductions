import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={toggle}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <motion.h2 layout="position">Motion 🚀</motion.h2>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="content"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              dolor, voluptates maiores beatae assumenda omnis tempora!
              Temporibus accusamus eum quibusdam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectet ur adipisicing elit. Cum,
              aspernatur.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
