import styles from './footer.module.css'
import Image from 'next/image';
import '/src/app/globals.css';
import Link from 'next/link';

const handleLogoClick = () => {
    window.scrollTo(0, 0);
    router.push('/');
  };


export default async function Footer() { 
    
    return (
      <section className={styles.footerContainer}>
        <div className={styles.footerContentContainer + ' wrapper'}>
            <div className={styles.companyInformation}>
                <div className={styles.topContainer}>
                    <div className={styles.companyDescription}>
                        <Image src='/assets/logoWhite.svg' width={200} height={50}/>
                        <p>Deepgrids is an investment-backed AI automation company transforming enterprise strategy by deploying intelligent agents that eliminate inefficiency and accelerate decision-making in enterprise pricing processes.                
                        </p>
                    </div>
                    <div className={styles.linkContainer}>
                        <p className={styles.links}>Links</p>
                        <Link className={styles.link} href="/"><p>Home</p></Link>
                        <Link className={styles.link} href="/our-team"><p>Our Team</p></Link>
                        <Link className={styles.link} href="#"><p>Privacy Policy</p></Link>
                        <Link className={styles.link} href="#"><p>Contact Us</p></Link>
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                    <h4>Copyright © 2025 Deepgrids. All rights reserved.</h4>
                    <div className={styles.linkContainer}>
                        <Link href="https://www.linkedin.com/company/deepgrids" target="_blank" rel="noopener noreferrer">
                            <Image src='/assets/linkedinLogo.svg' width={25} height={25}/>
                        </Link>
                    </div>
            </div>
        
        </div>
           
        </div>
        
        
            

      </section>
    );
  }
  