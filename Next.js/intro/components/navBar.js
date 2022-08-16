import Link from "next/link";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        width: "100vw",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <ul className="menuBar">
        <Link href="/">
          <a style={{ margin: "10px", fontSize: "20px", fontWeight: "bolder" }}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a style={{ margin: "10px", fontSize: "20px", fontWeight: "bolder" }}>
            About
          </a>
        </Link>
        <Link href="/blog">
          <a style={{ margin: "10px", fontSize: "20px", fontWeight: "bolder" }}>
            Blog
          </a>
        </Link>
        <Link href="/contact">
          <a style={{ margin: "10px", fontSize: "20px", fontWeight: "bolder" }}>
            Contact
          </a>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
