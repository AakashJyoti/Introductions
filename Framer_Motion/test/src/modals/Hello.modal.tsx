import { motion } from "framer-motion";

type PropsType = {
  handleModal: () => void;
};

const HelloModal = ({ handleModal }: PropsType) => {
  return (
    <div className="absolute bg-[#0000007a] w-screen h-screen z-10 top-0 right-0 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring", ease: "easeOut" }}
        className="min-w-[500px] max-w-[600px] min-h-[400px] bg-white rounded-xl py-4 px-6 relative"
      >
        <button
          className="absolute top-3 right-4 p-1 hover:bg-slate-200 rounded"
          onClick={handleModal}
        >
          &#x274c;
        </button>
        <h1 className="mb-4 text-2xl">Hello there</h1>
        <p>
          3 As the file format.info page cited says, the character denoted by
          &#x274c;, i.e. CROSS MARK (U+274C) “❌”, was added to Unicode in
          version 6 in 2010. This means that most fonts don’t contain it. The
          font support page lists only a few fonts. Most computers in the world
          do not have any of these fonts installed; moreover, even if a suitable
          font exists, browsers may fail to use it unless you explicitly list it
          in a font-family declaration. So you would need to use @font-face to
          have it rendered in a cross-browser way. If you actually meant to use
          U+2717 BALLOT X “✗”, then you can use &#x2717; (or enter the character
          as such). But CROSS MARK is what refer to as the character you tried
          to use; note that a comment in the Unicode standard says about it:
          “forms a game tally pair with 2B55”. So if you want to use CROSS MARK
          “❌”, it would be consistent to pair it with U+2B55 HEAVY LARGE CIRCLE
          “⭕”.
        </p>
      </motion.div>
    </div>
  );
};
export default HelloModal;
