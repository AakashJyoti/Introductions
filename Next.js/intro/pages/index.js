import Navbar from "../components/navBar";
import styles from "../styles/index.module.css";
import Image from "next/image";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next.js Introduction" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next.js" />
        <meta name="author" content="Aakash jyoti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home Page</title>
      </Head>
      <style jsx>{`
        .p {
          color: blue;
          display: flex;
          justify-content: center;
          margin: 20px;
          font-weight: bold;
        }
      `}</style>
      <Navbar />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1 className={styles.heading}>Ghar</h1>
        <Image src="/kj.jpg" width="700" height="450" alt="jabba" />
        <p className="p">click clack Booomm!...</p>
      </div>
    </>
  );
}

export default index;
