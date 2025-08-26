import styles from './whoweare.module.css';
import Image from 'next/image';
import '../../globals.css';


export default function Whoweare() {
    return (
        <div className={styles.whoweareContainer}>
            <div className={styles.whoweareContentContainer + ' wrapper'}>
                <div className={styles.textContainer}>
                    <div className={styles.textContentContainer}>
                        <div className='sectionHeader'>
                            <Image src={'/assets/sectionHeaderBlack.svg'} width={20} height={20}></Image>
                            <h4>Who we are</h4>
                        </div>
                        <h1>We augment corporate strategy with agentic AI, starting with enterprise SaaS pricing.</h1>
                        <p>Our founding was shaped by the desire to disrupt the chaotic and fragmented processes of corporate strategy. We believe that agentic AI is the key to uniting the data, resources, and people that drive it.

        <br/><br/>We currently help mid-market and enterprise SaaS vendors design, adjust, and analyze plans, discounts, customer churn, and upsell opportunities with our cutting-edge AI-native platform Forge.</p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={'/assets/city.png'} width={400} height={400}/>
                </div>
                </div>
        </div>

    );
}