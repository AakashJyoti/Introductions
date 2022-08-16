import { useEffect } from "react";
import Router from "next/router";
import Link from "next/link";

function ErrorPage() {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1 style={{ color: "red" }}>404 error !..</h1>
        <h1>Bhai galat aa gya tu !...</h1>
        <h3>Niche wale Button pr click kr orr waps ja Home pr..</h3>
        <button style={{ height: "40px", width: "10%", marginTop: "13px" }}>
          <Link href="/" style={{ fontSize: "20px", fontWeight: "bolder" }}>
            Home
          </Link>
        </button>
      </div>
    </>
  );
}

export default ErrorPage;
