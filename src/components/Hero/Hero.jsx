import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/banner3.png"
        alt="Hero banner"
        width={2009}
        height={783}
        priority
        sizes="100vw"
        className={styles.heroImage}
      />
    </section>
  );
}