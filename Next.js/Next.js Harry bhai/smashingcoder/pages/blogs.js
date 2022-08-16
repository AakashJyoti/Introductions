import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(1);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 1}`);
    setCount(count + 1);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} 
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug} className={styles.blogsItem}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h2>{blogItem.title}</h2>
                </Link>
                <p>{blogItem.metadesc}</p>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogData");
  let allCount = data.length;
  let myFile;
  let allBlogs = [];

  for (let index = 0; index < allCount; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile("blogData/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs, allCount },
  };
}

export default Blogs;
