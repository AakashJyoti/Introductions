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
            className="overflow-hidden rounded w-40 "
          />
          <div>
            {/* texh sstack */}
            <p>React.js</p>
            <p>Next.js</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
        </div>
        <div className="flex flex-col gap-28 w-full">
          {/* profile info */}
          <div className="flex justify-between w-full">
            {/* name and credentials */}
            <div>
              <p>Aakash Jyoti</p>
              <p>Web Developer</p>
              <p>
                <span>Ranking</span> <span>1/10</span>
              </p>
            </div>
            <div>
              <button>Edit Profile</button>
            </div>
          </div>
          <div>
            {/* user Data */}
            <p>
              <span>About</span> <span>Timeline</span>{" "}
            </p>
            <div className="flex gap-40" >
              <div>
                {/* user list */}
                <p>User Id</p>
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Profession</p>
              </div>
              <div>
                {/* user info */}
                <p>98734978937432</p>
                <p>Aakash Jyoti</p>
                <p>jabba@gmail.com</p>
                <p>9999999999</p>
                <p>Web dDeveloper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
