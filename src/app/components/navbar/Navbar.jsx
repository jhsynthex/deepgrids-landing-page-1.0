import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import '../../globals.css';
import '../../components/interactibles.css';



export default function Navbar() {
  return (
    <div className={styles.navContainer}>
        <div className={styles.navContentContainer + ' wrapper'}>
            <div className={styles.navLeftContainer}>
                <div className={styles.navLogoContainer}>
                    <Image src={'/assets/deepgridsNavLogo.svg'} alt='logo' width={150} height={100} className={styles.navLogo} />
                </div>
                <div className={styles.smallGrayDivider}></div>
                <div className={styles.navLinksContainer}>
                    <Link href="#"><h4>Company</h4></Link>
                    <Link href="#"><h4>Our Products</h4></Link>
                    <Link href="#"><h4>Our Team</h4></Link>
                    <Link href="#"><h4>Press Releases</h4></Link>
                </div>
            </div>
            <div className={styles.navRightContainer}>
                <Link href="#"><h4>For Investors</h4></Link>
                <button className="buttonBoilerplate contactButton">Contact Us</button>
            </div>
        </div>
        <div className={styles.grayDivider}></div> 
    </div>
  );
}