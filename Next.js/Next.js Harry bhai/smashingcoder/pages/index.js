import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <style jsx global > */}

      <Head>
        <title>Smashing Coder 🚀</title>
        <meta name="description" content="work for excelence and fun" />
        <meta name="keywords" content="next blog Smashing Coder 🚀" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imageWraper}>
          <img
            src="/home.jpg"
            alt="blog Image"
            className={styles.myImg}
            width={400}
            height={250}
          />
        </div>
        <h1 className={styles.title}>
          <span className="mySpan">&lt; Smashing Coder 🚀/ &gt;</span>
        </h1>
        <div>
          <p className={styles.description}>A Blog for Coder by a Coder</p>
          <p className={styles.description2}>
            When learning to code or develop software, websites or apps, we
            usually will get stuck with a problem or a bug that refuses to be
            resolved, no matter what you do. In cases like this, programmers
            like you may need answers to questions related to various coding
            languages, development platforms, tools, APIs as well as services.
            We can provide you the solutions you need.
          </p>
        </div>

        <br />

        <div className={styles.blogs}>
          <div className="blogsItem">
            <h2 className={styles.h2}>Some of our Popular Blogs:-</h2>
            <h3 className={styles.h3}>How to learn JavaScript in 2022</h3>
            <p className={styles.p}>
              JavaScript (JS) is a lightweight, interpreted, or just-in-time
              compiled programming language with first-class functions. While it
              is most well-known as the scripting language for Web pages, many
              non-browser environments also use it, such as Node.js, Apache
              CouchDB and Adobe Acrobat.
            </p>
          </div>
          <div className="blogsItem">
            <h3 className={styles.h3}>How to learn Next.js in 2022</h3>
            <p className={styles.p}>
              Next.js gives you the best developer experience with all the
              features you need for production: hybrid static & server
              rendering, TypeScript support, smart bundling, route pre-fetching,
              and more. No config needed.
            </p>
          </div>
          <div className="blogsItem">
            <h3 className={styles.h3}>How to learn React.js in 2022</h3>
            <p className={styles.p}>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <h4>Copyright ©️ Smashing Coder 🚀</h4>
      </footer>
    </div>
  );
}
