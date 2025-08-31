"use client"

import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import '/src/app/globals.css';
import '../interactibles.css';
import { useRouter } from 'next/navigation';




export default function Navbar() {
  const router = useRouter();

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    router.push('/');
  };

  return (
    <div className={styles.navContainer}>
        <div className={styles.navContentContainer + ' wrapper'}>
            <div className={styles.navLeftContainer}>
                <div className={styles.navLogoContainer} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <Image src={'/assets/navbarLogo.svg'} alt='logo' width={125} height={125} className={styles.navLogo} />
                </div>
                <div className={styles.smallGrayDivider}></div>
                <div className={styles.navLinksContainer}>
                    <Link href="#"><h4>Company</h4></Link>
                    <Link href="#"><h4>Our Products</h4></Link>
                    <Link href="/our-team"><h4>Our Team</h4></Link>
                    <Link href="#"><h4>Press Releases</h4></Link>
                </div>
            </div>
            <div className={styles.navRightContainer}>
                <Link href="#"><h4>For Investors</h4></Link>
                <button className="buttonBoilerplate contactButton">Contact Us</button>
            </div>
        </div>
    </div>
  );
}