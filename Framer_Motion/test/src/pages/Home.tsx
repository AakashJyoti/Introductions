import { useState } from "react";
import HelloModal from "../modals/Hello.modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <p className="text-2xl">Trying to open modal</p>
      <button onClick={handleModal} className="border-2 px-4 py-1 rounded mt-2">
        Open Modal
      </button>

      <HelloModal handleModal={handleModal} isModalOpen={isModalOpen} />
    </>
  );
};
export default Home;
