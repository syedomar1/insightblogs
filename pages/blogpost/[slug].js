import React, { useState, useEffect } from 'react';
import * as fs from 'fs';
import {useRouter} from 'next/router'
import styles from "@/styles/BlogPost.module.css";

// Find the file correspondong to the slug
// Populate them inside the page
function createMarkup(c) {
  return {__html: c};
}
const Slug = (props) => {
const [blog, setBlog] = useState(props.myBlog);
// const router = useRouter();
//   useEffect(()=>{
//     if (!router.isReady) return;
//     const {slug} = router.query;
//     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
//       return a.json();
//     })
//     .then((parsed)=>{
//       setBlog(parsed);
//     })
//   }, [router.isReady])
  return (
    <div className={styles.container}>
      <main className={`${styles.main}`}>
      <h1>{blog && blog.title}</h1>
      <hr />
      {blog &&<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {slug: 'how-to-learn-javascript'}},
      {params: {slug: 'how-to-learn-next.js'}},
      {params: {slug: 'how-to-learn-react.js'}},
    ],
    fallback: true, // false or "blocking"
  }
}

export async function getStaticProps(context){
// console.log(context)
    const {slug} = context.params;
    let myBlog = await fs.promises.readFile(`./blogdata/${slug}.json`, "utf-8");
  return{
    props:{myBlog: JSON.parse(myBlog)},
  }
}

// export async function getServerSideProps(context){
// // console.log(context.req.url)
// // const router = useRouter();
//     const {slug} = context.query;
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//     let myBlog = await data.json()
//   return{
//     props:{myBlog},
//   }
// }

export default Slug;
