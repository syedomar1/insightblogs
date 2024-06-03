import React from 'react'
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Insight Blogs</h1>
      <h2>Introduction</h2>
      <p>
        Welcome to Insight Blogs, your ultimate destination for in-depth articles and insights into the world of technology, programming, and software development. Our mission is to empower coders, developers, and tech enthusiasts by providing high-quality content that is both informative and engaging. Whether you're a beginner just starting out or an experienced professional looking to stay updated with the latest trends, Insight Blogs has something for everyone.
      </p>
      
      <h2>Services Offered</h2>
      <p>
        At Insight Blogs, we strive to offer a range of services designed to enhance your learning experience and support your journey in the tech world. Our services include:
      </p>
      <ul>
        <li>Comprehensive tutorials on various programming languages and frameworks</li>
        <li>In-depth articles on software development best practices</li>
        <li>Regular updates on the latest trends and technologies in the tech industry</li>
        <li>Exclusive interviews with industry experts and thought leaders</li>
        <li>Community forums for networking and knowledge sharing</li>
      </ul>

      <h2>Our Team</h2>
      <p>
        Our team at Insight Blogs is comprised of passionate and experienced professionals dedicated to delivering the best content possible. Meet some of our key team members:
      </p>
      <ul>
        <li>
          <strong>Syed Omar</strong> - Founder & CEO
          <br />
          Omar has over 5 years of experience in the tech industry and founded Insight Blogs to create a platform where knowledge and innovation could thrive. He is a visionary leader who is always looking for ways to push the boundaries of technology.
        </li>
        <li>
          <strong>Syed Hamza</strong> - Chief Editor
          <br />
          Hamza is a seasoned editor with a keen eye for detail. He ensures that all content published on Insight Blogs meets the highest standards of quality and accuracy.
        </li>
      </ul>
    </div>
  )
}

export default About
