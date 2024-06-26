import React, { useState } from 'react'
import styles from "@/styles/Contact.module.css";


const Contact = () => {
const [name, setname] = useState('');
const [email, setemail] = useState('');
const [phone, setphone] = useState('');
const [desc, setdesc] = useState('');

const handleSubmit = (e) =>{
  e.preventDefault();
  const data = {name,email,phone,desc};

  fetch('http://localhost:3000/api/postcontact',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.text())
  .then(data =>{
    // console.log('Success:', data);
    alert("Thanks for contacting us");
    setphone('');
    setname('');
    setemail('');
    setdesc('');
  })
  .catch((error) =>{
    // console.error('Error:', error);
  });
}

const handleChange = (e) =>{
  if(e.target.name == 'name'){
    setname(e.target.value);
  }
  else if(e.target.name == 'email'){
    setemail(e.target.value);
  }
  else if(e.target.name == 'phone'){
    setphone(e.target.value);
  }
  else if(e.target.name == 'desc'){
    setdesc(e.target.value);
  }
  // console.log(e,"change");
}

  return (
    <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your Name</label>
          <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name="name" placeholder="Your name.." required/>
          </div>
          <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Enter your Email address</label>
          <input className={styles.input} type="email" value={email} onChange={handleChange} id="email" name="email" placeholder="Your email.." required/>
          <div id='emailHelp' className={styles.formtext}>We will never share your email with anyone else.</div>
          </div>
          <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Enter your Phone No.</label>
          <input className={styles.input} type="phone" value={phone} onChange={handleChange} id="phone" name="phone" placeholder="Your number.." required/>
          </div>
          <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>Enter your Concerns</label>
          <textarea className={styles.input} id="desc" value={desc} onChange={handleChange} name="desc" placeholder="Elaborate your concerns.." required/>
          </div>
          <button type="submit" className={styles.btn}>Submit</button>
        </form>
    </div>
  )
}

export default Contact
