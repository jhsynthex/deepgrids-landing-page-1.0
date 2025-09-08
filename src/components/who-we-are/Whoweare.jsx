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
        <div className={styles.whoweareEntireContainer}>
            <div className={styles.missionContainer  + ' wrapper'}>
                <div className={styles.missionHeader}>
                    <h4>Mission Statement</h4>
                    <div className={styles.grayLine}></div>
                </div>
                <div className={styles.missionStatement}>
                    <div className={styles.blackVertical}></div>
                    <div className={styles.grayGradient}>
                        <h1>We augment corporate strategy with agentic AI, <span className={styles.grayText}>starting with enterprise SaaS Pricing.</span></h1>
                        </div>
                    </div>
            </div>
            <div className={styles.valuesContainer}>
                <div className={styles.valuesContentContainer}>
                    <div className={styles.valuesImageContainer}>
                        <Image className={styles.valuesImage} src='assets/missionImage.svg' width={500} height={500}/>
                        <h4 className={styles.valuesImageCaption}>"Corporate Orbit"</h4>
                    </div>
                    <p className={styles.valuesText}>Our founding was shaped by the desire to disrupt the chaotic and fragmented processes of corporate strategy. Corporate strategy is driven by three distinct components: data, resources, and people. We believe that cutting-edge agentic AI is the key to uniting these three components.<br/><br/>

    Agentic AI is already augmenting how organizations make decisions, streamlining complex workflows, and enabling business leaders to act with greater speed, precision, and confidence. However, it has yet to be fully applied by enterprises to age-old workflows, such as those in corporate strategy. This is where Deepgrids builds.

    </p>
                </div>
            </div>
            <div className={styles.excellenceWrapper}>
                <h1 className={styles.excellenceInAI}>Excellence in AI</h1>
            </div>
            <div className={styles.aiContainer}>
                <div className={styles.pledgeContainer + ' wrapper'}>
                    <div className={styles.pledge}>
                        <h1><span className={styles.firstDigit}>0</span>1</h1>
                        <h5>Always Innovating</h5>
                        <p>Our company is disrupting with AI agents, a new and powerful technology. As the application of these agents to enterprises continues to grow, we will be at the forefront of making them safe and applicable to your use case.</p>
                    </div>
                    <div className={styles.pledge}>
                        <h1><span className={styles.firstDigit}>0</span>2</h1>
                        <h5>Human-in-the-loop</h5>
                        <p>Our products are meant to augment human processes, not replace them. This encompasses safeguards that allow you to intervene and set permissions. It also requires us to work closely with each client to ensure alignment with organizational goals and governance standards.
                        </p>
                    </div>
                    <div className={styles.pledge}>
                        <h1><span className={styles.firstDigit}>0</span>3</h1>
                        <h5>Data Transparency</h5>
                        <p>Outcomes that are decided by our AI agents based upon your data that remains proprietary must be deeply explainable. Our technology is engineered so that you can see the reasoning behind every decision, trace insights back to their source, and trust results with confidence.</p>
                    </div>
                    <div className={styles.pledge}>
                        <h1><span className={styles.firstDigit}>0</span>4</h1>
                        <h5>Security-First</h5>
                        <p>We embed industry-leading security infrastructure into every product that we make. From compliance with industry standards, to regular cybersecurity audits, to customizable deployments, we ensure that your data is safe.</p>
                    </div>

                </div>

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