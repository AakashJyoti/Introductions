import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Create Post</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
