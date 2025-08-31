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

    return (
        <div className={styles.heroContainer + ' wrapper'}>
            <div className={styles.textContainer}>
                <div className={styles.textContentContainer}>
                    <Image src={'/assets/visilinkLogo.svg'} width={100} height={50}/>
                    <div className={styles.callToActionContainer}>
                        <div className={styles.callToAction}>
                            <div className={styles.whiteVertical}></div>
                            <div className={styles.grayGradient}>
                                <h1>Sell Software Smarter With <span className={styles.grayText}>Agentic AI Pricing.</span></h1>
                            </div>
                        </div>
                        <p>Visilink is an end-to-end pricing platform for enterprise SaaS vendors. It uses a team of AI agents to unite all relevant data and stakeholders to streamline pricing workflows and optimize pricing strategies.</p>
                        <div className={styles.buttonContainer}>
                            <button className='buttonBoilerplate'>Explore Visilink</button>
                            <button className='buttonBoilerplate contactButton heroContactButton'>Contact Us</button>
                        </div>
                    </div>
                    <div className={styles.securityContainer}>
                        <h4>Industry-leading Security</h4>
                        <div className={styles.certificationContainer}>
                            <div className={styles.certification}>
                                <div className={styles.cert}>
                                    <Image src='/assets/check.svg' width={20} height={20}/>
                                    <h4>SOC 2</h4>
                                </div>
                                <div className={styles.cert}>
                                    <Image src='/assets/check.svg' width={20} height={20}/>
                                    <h4>HIPAA</h4>
                                </div>
                                <div className={styles.cert}>
                                    <Image src='/assets/check.svg' width={20} height={20}/>
                                    <h4>GDRP</h4>
                                </div>
                                <div className={styles.cert}>
                                    <Image src='/assets/check.svg' width={20} height={20}/>
                                    <h4>CCPA</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
               <Image src={'/assets/heroImage4.svg'} width={550} height={550}/>
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