"use client"

import styles from './recentpress.module.css'
import { useState } from 'react';
import Image from 'next/image';
import '/src/app/globals.css';


export default function Recentpress() { 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribeUser = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("❌ Please enter a valid email.");
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
        setMessage("✅ Successfully subscribed!");
        setEmail(""); 
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("❌ Subscription failed. Please try again.");
    }
  };
    
    return (
    <div className={styles.recentPressContainer}>
        <div className={styles.pressContainer}>
        </div>

        <div className={styles.newsletter}>
            <Image src='/assets/signupEnvelopes.svg' width={275} height={275}/>
            <div className={styles.emailCapture}>
                <h1>Sign up for company updates</h1>
                <p>Receive email updates about Deepgrids, its products, and other important information. Get the latest insights delivered to your inbox.</p>
                <div className={styles.emailContainer}>
                    <h4>Email</h4>
                    <form className={styles.captureFields} onSubmit={subscribeUser}>
                        <input className={'textInput ' + styles.input} placeholder='Enter your email' type='email' value={email} onChange={handleChange}/>
                        <button className={'buttonBoilerplate ' + styles.submit} type='submit'>Subscribe</button>
                    </form>
                    {message && <p className={styles.message}>{message}</p>}
                    <h4 className={styles.noSpam}>No spam. Unsubscribe anytime.</h4>
                </div>
                
            </div>
            <Image src='/assets/signupEnvelopes.svg' width={275} height={275}/>
        </div>
    </div>
); }