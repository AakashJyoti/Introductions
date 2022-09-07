import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>Welcome to Repair Store</h1>
      </header>
      <main>
        <p>Located in Beautiful Downtown Foo City, Repair store provider</p>
        <p>&nbsp;</p>
        <address>
          Repair Store <br />
          555 Foo Drive <br />
          <a href="tel: +91 9999999999">(555) 555-5555</a>
        </address>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
