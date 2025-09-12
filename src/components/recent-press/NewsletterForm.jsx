"use client"

import { useState } from 'react';
import styles from './recentpress.module.css';
import '/src/app/globals.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribeUser = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/company-updates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data.success) {
        setMessage("Successfully subscribed!");
        setEmail(""); 
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Subscription failed. Please try again.");
    }
  };

  return (
    <>
      <h4 className={styles.emailLabel}>Email</h4>
      <form className={styles.captureFields} onSubmit={subscribeUser}>
        <input className={'textInput ' + styles.input} placeholder='Enter your email' type='email' value={email} onChange={handleChange}/>
        <button className={'buttonBoilerplate ' + 'contactButton ' + styles.submit} type='submit'>Subscribe</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      <h4 className={styles.noSpam}>No spam. Unsubscribe anytime.</h4>
    </>
  );
}
