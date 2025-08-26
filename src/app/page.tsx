import Image from "next/image";
import styles from "./page.module.css";
import Hero from './components/hero/Hero';
import Whoweare from './components/who-we-are/Whoweare'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Whoweare />
    </div>
  );
}
