import styles from './hero.module.css';
import Image from 'next/image';
import '../../globals.css';



export default function Hero() {
    return (
        <div className={styles.heroContainer + ' wrapper'}>
            <div className={styles.heroBox}>
                <div className={styles.topBezels}>
                    <div className={styles.topBezelOne}></div>
                    <div className={styles.topBezelTwo}></div>
                    <div className={styles.topBezelThree}></div>
                    <div className={styles.topBezelFour}></div>
                </div>
                <div className={styles.bottomBezels}>
                    <div className={styles.bottomBezelOne}></div>
                    <div className={styles.bottomBezelTwo}></div>
                    <div className={styles.bottomBezelThree}></div>
                    <div className={styles.bottomBezelFour}></div>
                </div>
                <div className={styles.textBox}>
                    <div className={styles.textContainer}>
                    <Image className='productImage' src={'/assets/productLogo.svg'} width={100} height={80}></Image>
                    <h1 className={styles.callToAction}>Drive Revenue Through <span className={styles.lightGrayText}>Agentic AI Pricing.</span></h1>
                    <div className={styles.whiteDivider}></div>
                        <div className={styles.bottomTextButtons}>
                            <p className={styles.secondaryText}>From dynamic pricing to negotiation, Forge leverages a team of AI agents to help your enterprise sell software smarter.</p>
                            <div className={styles.buttonContainer}>
                                <button className={'buttonBoilerplate ' + styles.exploreForge}>
                                    Explore Forge
                                    <Image className={styles.arrowBlack} src={'/assets/arrowBlack.svg'} alt='arrow' width={20} height={20} />
                                    <Image className={styles.arrowWhite} src={'/assets/arrowWhite.svg'} alt='arrow' width={20} height={20} />
                                </button>
                                <button className={'buttonBoilerplate ' + styles.contactUsHeroButton}>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.heroImageContainer}>
                    <Image className={styles.heroImage}src={'/assets/heroImage.svg'} alt='Two people making a deal standing on floating orbs in a cubism world.' width={500} height={500}></Image>
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