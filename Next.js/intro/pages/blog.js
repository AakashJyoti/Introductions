import Navbar from "../components/navBar";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

function Blog({ data }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next.js Introduction" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Next.js" />
        <meta name="author" content="Aakash jyoti" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blogs</title>
      </Head>
      <Navbar />
      {data.slice(0, 5).map((currElem) => {
        return (
          <div
            key={currElem.id}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px auto",
              border: "2px solid Skyblue",
              height: "50px",
              width: "50vw",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <h4 style={{ margin: "5px" }}>{currElem.id}</h4>
            <h5>{currElem.title}</h5>
          </div>
        );
      })}
    </>
  );
}

export default Blog;
