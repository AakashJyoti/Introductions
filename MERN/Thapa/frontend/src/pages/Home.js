const Home = () => {
  return (
    <div
      className="w-full flex items-center justify-center flex-col gap-3 h-screen"
      style={{
        backgroundColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
      }}
    >
      <p className="text-white text-4xl font-semibold hover:font-bold">
        Welcome
      </p>
      <p className="text-3xl underline">Learning MERN developement</p>
    </div>
  );
};
export default Home;

