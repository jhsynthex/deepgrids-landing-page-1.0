import styles from "./page.module.css";
import Hero from '../components/hero/Hero';
import Recentpress from '../components/recent-press/Recentpress'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Recentpress />
    </div>
  );
}
