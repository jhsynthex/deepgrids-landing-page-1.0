import Image from "next/image";
import styles from "./page.module.css";
import Hero from '../components/hero/Hero';
import Recentpress from '../components/recent-press/Recentpress'
import Footer from '../components/footer/Footer'
import Whoweare from '../components/who-we-are/Whoweare'
import Product from '../components/product/Product'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Recentpress />
    </div>
  );
}
