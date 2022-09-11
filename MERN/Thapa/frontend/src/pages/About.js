import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
    <div className="w-full flex items-center justify-center bg-blue-200 flex-col gap-10 h-screen ">
      <div className="w-2/4 bg-white h-2/4 rounded-lg shadow-lg flex p-10 gap-20">
        <div className="flex flex-col gap-10 w-52">
          {/* profile pic */}
          <img
            src={profilePic}
            alt="profile-pic"
            className="overflow-hidden rounded h-40 w-40"
          />
          <div className="font-medium">
            {/* texh sstack */}
            <p>React.js</p>
            <p>Next.js</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div className="flex flex-col gap-20 w-full">
          {/* profile info */}
          <div className="flex justify-between w-full">
            {/* name and credentials */}
            <div>
              <p className="text-3xl font-semibold">Aakash Jyoti</p>
              <p>Web Developer</p>
              <p>
                <span className="text-xs">Ranking:</span>{" "}
                <span className="text-blue-700 font-semibold">1/10</span>
              </p>
            </div>
            <div>
              <button className="py-2 px-3 bg-blue-600 rounded-full text-white shadow-md shadow-blue-300 hover:bg-blue-400">
                Edit Profile
              </button>
            </div>
          </div>
          <div>
            {/* user Data */}
            <p className="border-b-2">
              <span className="mr-3 font-semibold text-xl border-b-2 border-blue-600 cursor-pointer">
                About
              </span>{" "}
              <span className="font-semibold text-xl text-blue-600 cursor-pointer">
                Timeline
              </span>
            </p>
            <div className="flex gap-36 pt-2">
              <div className="font-medium">
                {/* user list */}
                <p>User Id</p>
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Profession</p>
              </div>
              <div className="font-medium text-blue-700">
                {/* user info */}
                <p>98734978937432</p>
                <p>Aakash Jyoti</p>
                <p>jabba@gmail.com</p>
                <p>9999999999</p>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
