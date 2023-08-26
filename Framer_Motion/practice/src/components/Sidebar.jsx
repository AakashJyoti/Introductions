import { Link, useLocation } from "react-router-dom";
import { links } from "../lib/routes";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <nav className="sidebar h-screen w-1/6 bg-slate-400 overflow-auto">
      <ul className="flex flex-col gap-1 m-2">
        {links.map((link) => (
          <li key={link.link}>
            <Link to={link.link}>
              <p
                className={` p-2 rounded text-xl text-white hover:bg-slate-600 ${
                  active === link.link ? "bg-slate-600" : "bg-slate-500"
                }`}
                onClick={() => setActive(link.link)}
              >
                {link.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
