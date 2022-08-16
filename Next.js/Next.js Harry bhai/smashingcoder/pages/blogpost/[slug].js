import React, { useState } from "react";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

// Step 1 : Find the file Corresponding to the Slug
// Step 2 : Populate them inside the page

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        {blog && (
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        )}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir("blogData");
  allb = allb.map((item)=>{
    return { params: { slug: item.split(".")[0]} }
  })

  return {
    paths: allb,
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}
export default Slug;
