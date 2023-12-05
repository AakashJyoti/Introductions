import { motion, AnimatePresence } from "framer-motion";
import { modalBackDropVariants, modalVariants } from "../animations";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Modal({ showModal }) {
  return (
    <AnimatePresence mode="wait">
      {showModal ? (
        <motion.div
          className="backdrop"
          variants={modalBackDropVariants}
          animate="final"
          initial="initial"
          exit="exit"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>Want another Pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
};
