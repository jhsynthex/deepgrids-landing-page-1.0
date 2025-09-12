"use client"

import styles from './hero.module.css';
import Image from 'next/image';
import '/src/app/globals.css';
import { useEffect, useRef } from 'react';


export default function Hero() {
    const callToActionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.fadeInFromLeft);
                }
            },
            { threshold: 0.3 }
        );

        if (callToActionRef.current) {
            observer.observe(callToActionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const scrollToNewsletter = () => {
        const newsletterElement = document.getElementById('newsletter');
        if (newsletterElement) {
            newsletterElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleContactClick = () => {
        window.location.href = 'mailto:matthew.jeanty@deepgrids.com';
    };

    return (
        <div className={styles.heroContainer}>
            <Image className={styles.heroBackground} src='/assets/heroBackground4.svg' width={500} height={500} />
            <div className={styles.heroContentContainer + ' wrapper'}>
            <Image src='/assets/cylinders.svg'  className={styles.cylinders} width={200} height={200}/>
            <Image src='/assets/cubes.svg'  className={styles.cubes} width={200} height={200}/>
            <div className={styles.heroTextContainer}>
                <Image className={styles.logo} src='/assets/logoWhite.svg' width={125} height={50}/>
                <h1 className={styles.headLine}>An agentic AI system that accelerates <span className={styles.gray}>pricing decisions.</span></h1>
                <p className={styles.secondary}>We are building an end-to-end enterprise pricing system that uses AI agents to help companies drive revenue.</p>
                <div className={styles.buttonContainer}>
                    <button className={'buttonBoilerplate ' + 'contactButton ' + styles.updates} onClick={scrollToNewsletter}>Company Updates</button>
                    <button className={'buttonBoilerplate ' + 'darkButton ' + styles.contact} onClick={handleContactClick}>Contact Us</button>
                </div>
            </div>
            </div>
            
        </div>
    );
}
/*
<h1 className={styles.callToAction}>Drive Revenue Through Agentic AI Pricing.</h1>
                        <div className={styles.bottomTextButtons}>
                            <p className={styles.secondaryText}>From dynamic pricing to negotiation, Forge leverages a team of AI agents to help your enterprise sell software smarter.</p>
                            <div className={styles.buttonContainer}>
                                <button className='buttonBoilerplate'>Explore Forge</button>
                                <button className='buttonBoilerplate'>Contact Us</button>
                            </div>
                        </div>

<Image className={styles.heroImage}src={'/assets/heroImage.svg'} alt='Two people making a deal standing on floating orbs in a cubism world.' width={700} height={700}></Image>
*/