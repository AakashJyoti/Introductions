import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { bgVariants, modalVariants } from "../lib/animations";
import { closeModal } from "../features/modal";
import LoginModal from "./Login.modal";
import SignUpModal from "./Signup.modal";

const Modal = () => {
  const dispatch = useDispatch();

  const modalStatus = useSelector(
    (state: { modal: { value: { isModalActive: boolean; type: string } } }) =>
      state.modal.value
  );

  const handleCloseModal = () => dispatch(closeModal());

  return (
    <AnimatePresence mode="wait">
      {modalStatus.isModalActive && (
        <motion.div
          variants={bgVariants}
          animate="visible"
          initial="hidden"
          exit="exit"
          className="absolute bg-[#0000007a] z-10 top-0 right-0 flex justify-center items-center w-screen"
        >
          <motion.div
            variants={modalVariants}
            className="min-w-[500px] max-w-[600px] min-h-[400px] bg-white rounded-xl py-4 px-6 relative"
          >
            <button
              className="absolute top-3 right-4 p-1 hover:bg-slate-200 rounded"
              onClick={handleCloseModal}
            >
              &#x274c;
            </button>
            {modalStatus.type === "login" && <LoginModal />}
            {modalStatus.type === "signUp" && <SignUpModal />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
