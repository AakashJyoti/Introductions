import { useDispatch } from "react-redux";
import { openModal } from "../features/modal";

const LoginModal = () => {
  const dispatch = useDispatch();
  const handleOpenModal = (type: string) => dispatch(openModal(type));

  return (
    <div>
      <h1 className="text-xl mb-2">LoginModal</h1>

      <button
        className="border-2 w-20 h-8 rounded"
        onClick={() => handleOpenModal("signUp")}
      >
        Sign up
      </button>
    </div>
  );
};
export default LoginModal;
