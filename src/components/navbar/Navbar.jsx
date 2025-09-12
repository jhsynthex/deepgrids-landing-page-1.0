"use client"

import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import '/src/app/globals.css';
import '../interactibles.css';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:matthew.jeanty@deepgrids.com';
  };

  const scrollToNewsletter = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const newsletterElement = document.getElementById('newsletter');
    if (newsletterElement) {
      newsletterElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If not on homepage, navigate to homepage first
      router.push('/');
      // Wait a bit for the page to load, then scroll
      setTimeout(() => {
        const newsletterElement = document.getElementById('newsletter');
        if (newsletterElement) {
          newsletterElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`${styles.navContainer} ${isVisible ? styles.navVisible : styles.navHidden}`}>
        <div className={styles.navContentContainer + ' wrapper'}>
            <div className={styles.navLeftContainer}>
                <div className={styles.navLogoContainer} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <Image src={'/assets/logoWhite.svg'} alt='logo' width={125} height={50} className={styles.navLogo} />
                </div>
                <div className={styles.smallGrayDivider}></div>
                <div className={styles.navLinksContainer}>
                    <Link href="#" onClick={scrollToNewsletter}><h4>Company Updates</h4></Link>
                    <Link href="/our-team"><h4>Our Team</h4></Link>
                    <Link href="/"><h4>Privacy Policy</h4></Link>
                </div>
            </div>
            <div className={styles.navRightContainer}>
                <button className={'buttonBoilerplate ' + 'contactButton ' + styles.contactButton} onClick={handleContactClick}>Contact Us</button>
            </div>
            <button className={styles.hamburgerMenu} onClick={toggleMobileMenu}>
                <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLine1 : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLine2 : ''}`}></span>
                <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLine3 : ''}`}></span>
            </button>
        </div>
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <div className={styles.mobileMenuContent}>
                <Link href="#" onClick={scrollToNewsletter}><h4>Company Updates</h4></Link>
                <Link href="/our-team" onClick={() => setIsMobileMenuOpen(false)}><h4>Our Team</h4></Link>
                <button className={'buttonBoilerplate ' + 'contactButton ' + styles.mobileContactButton} onClick={() => { handleContactClick(); setIsMobileMenuOpen(false); }}>Contact Us</button>
            </div>
        </div>
    </div>
  );
}
