import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handlsSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postContact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handlsSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className={styles.formlabel}
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={styles.formlabel}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className="form-label">
            Enter Your Phone Number
          </label>
          <input
            type="number"
            className={styles.formlabel}
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate Concern</label>
          <textarea
            className={styles.formlabel}
            placeholder="Write your concern here"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            id="desc"
            value={desc}
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
