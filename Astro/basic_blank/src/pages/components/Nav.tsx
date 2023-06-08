import avatar from "/avatar.png";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="relative mx-8 mb-24">
      <svg
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img src={avatar} alt="profile picture of author" />
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold">
        <a href="/">Hua</a>
      </h1>
    </nav>
  );
}
