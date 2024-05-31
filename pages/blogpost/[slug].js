import React from 'react';
import {useRouter} from 'next/router'
import styles from "@/styles/BlogPost.module.css";


const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div>
      <main className={`${styles.main}`}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt repellendus, voluptatibus eos incidunt quam architecto vitae, consectetur blanditiis maxime, omnis cum nisi.</div>

    </main>
    </div>
  )
}

export default slug
