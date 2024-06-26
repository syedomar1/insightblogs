import Head from "next/head";
import Script from "next/script";
// import Image from "next/image"; 
import Link from 'next/link';
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Dummy from "@/components/dummy";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    {/* <style jsx>
      {`
      h2{
        font-size:38px;
      }
      h3{
        font-size:28px;
      }
      `}
    </style> */}
    {/* <Dummy/> */}
      <Head>
        <title>Insight Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Next.js, InsightBlogs, coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="example-inline-script" src='' strategy="lazyOnload">
        
      </Script>
      
      <main className={`${styles.main}`}>
        <div className={styles.imgWrap}>
          {/* <Image className={styles.myImg} src="/home.jpg" alt="Homeimg" width={237} height={158}/> */}
          <img className={styles.myImg} src="/home.jpg" alt="HomeImg" width={237} height={158}/>
        </div>
          <h1 className={styles.title}><span>&lt;InsightBlogs/&gt;</span></h1>
        <div>
        <h2 className={styles.h2}>Latest Blogs</h2>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn JavaScript in 2024?</h3>
            <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>

          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn Nextjs in 2024?</h3>
            <p className={styles.p}>Nextjs is the framework used for both frontend and backend for web applications</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className="blogItem">
            <h3 className={styles.h3}>How to learn Reactjs in 2024?</h3>
            <p className={styles.p}>Reactjs is the library of Javascript used to design web applications</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>
    </>
  );
}
