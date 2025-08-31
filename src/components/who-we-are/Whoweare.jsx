"use client"

import styles from './whoweare.module.css';
import Image from 'next/image';
import '/src/app/globals.css';
import Link from 'next/link';
import { useEffect, useRef } from 'react';


export default function Whoweare() {
    const quoteRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add fadeIn to the quotation mark first
                    const quotationMark = entry.target.querySelector(`.${styles.quotationMark}`);
                    if (quotationMark) {
                        setTimeout(() => quotationMark.classList.add(styles.fadeIn), 100);
                    }
                    
                    // Add fadeIn to the h1 second
                    const h1 = entry.target.querySelector('h1');
                    if (h1) {
                        setTimeout(() => h1.classList.add(styles.fadeIn), 400);
                    }
                    
                    // Add fadeIn to the authorTag last
                    const authorTag = entry.target.querySelector(`.${styles.authorTag}`);
                    if (authorTag) {
                        setTimeout(() => authorTag.classList.add(styles.fadeIn), 1000);
                    }
                }
            },
            { threshold: 0.3 }
        );

        if (quoteRef.current) {
            observer.observe(quoteRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.whoweareEntireContainer + ' wrapper'}>
            <div className={styles.missionContainer}>
                <div className={styles.missionHeader}>
                    <h4>Mission Statement</h4>
                    <div className={styles.grayLine}></div>
                </div>
                <div className={styles.missionStatement}>
                    <div className={styles.whiteVertical}></div>
                    <div className={styles.grayGradient}>
                        <h1>We augment corporate strategy with agentic AI, <span className={styles.grayText}>starting with enterprise SaaS Pricing.</span></h1>
                        </div>
                </div>
            </div>
            <div >


            </div>




            <div className={styles.quoteContainer}>
                <div ref={quoteRef} className={styles.quoteContents + ' wrapper'}>
                    <Image src='/assets/quotationMark.svg' width={100} height={100} className={styles.quotationMark}/>
                    <div className={styles.quoteTextContainer}>
                        <h1>Gartner projects <strong className={styles.extraBold}>75% of large enterprises</strong> will adopt <strong className={styles.extraBold}>multi-agent systems</strong> by 2026 and BCG estimates these systems could generate 
                        <strong className={styles.extraBold}> $53 billion</strong> in business revenue by 2030.</h1>
                        <div className={styles.authorTag}>
                            <Link href="https://www.deloitte.com/cz-sk/en/services/consulting/blogs/where-is-the-value-of-AI-in-MA-why-multi-agent-systems-needs-modern-data-architecture.html" target="_blank" rel="noopener noreferrer" className={styles.tagContents}>
                                <p>Deloitte, 2025</p>
                                <Image src='/assets/externalLinkBlue.svg' width={25} height={25}/>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        

    );
}