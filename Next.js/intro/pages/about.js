import Navbar from "../components/navBar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next.js Introduction" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next.js" />
        <meta name="author" content="Aakash jyoti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
      </Head>
      <Navbar />
      <p style={{ display: "flex", justifyContent: "center", margin: "5%" }}>
        Mai sahi hu bhai tu bata..
      </p>
    </>
  );
}

export default About;
