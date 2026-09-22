import Link from "next/link";
import Image from "next/image";

import styles from "./AboutPreview.module.css";

const highlights = [
  {
    icon: "bi-award",
    title: "15+ Years",
    text: "Experience",
  },
  {
    icon: "bi-buildings",
    title: "Modern",
    text: "Manufacturing Facilities",
  },
  {
    icon: "bi-people",
    title: "Skilled &",
    text: "Experienced Team",
  },
];

export default function AboutPreview() {
  return (
    <section className={styles.aboutSection}>
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-stretch">

          {/* =========================================
              IMAGE
          ========================================= */}

          <div className="col-lg-5">
            <div className={styles.imageWrapper}>
              <Image
                src="/images/workshop.png"
                alt="Jai Ambey Engineering Works manufacturing workshop"
                fill
                sizes="(max-width: 991px) 100vw, 42vw"
                className={styles.aboutImage}
              />

              <div className={styles.imageOverlay}></div>

              <div className={styles.imageLabel}>
                <span>JAI AMBEY ENGINEERING WORKS</span>
                <strong>SINCE 2009</strong>
              </div>
            </div>
          </div>

          {/* =========================================
              CONTENT
          ========================================= */}

          <div className="col-lg-7">
            <div className={styles.aboutContent}>

              <span className={styles.sectionLabel}>
                ABOUT US
              </span>

              <h2 className={styles.title}>
                Jai Ambey Engineering Works
              </h2>

              <div className={styles.orangeLine}></div>

              <p className={styles.description}>
                Founded in 2009, Jai Ambey Engineering Works specializes
                in plastic moulding dies, Die Moulds, Injection Moulds
                and Blow Moulds.
              </p>

              <p className={styles.description}>
                We are committed to delivering precision, durability
                and consistent quality in the products we manufacture.
              </p>

              {/* =========================================
                  HIGHLIGHTS
              ========================================= */}

              <div className={styles.highlights}>

                {highlights.map((item) => (
                  <div
                    className={styles.highlight}
                    key={item.title}
                  >
                    <div className={styles.icon}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}

              </div>

              {/* =========================================
                  BUTTON
              ========================================= */}

              <Link
                href="/about"
                className={styles.aboutButton}
              >
                <span>Discover Our Company</span>

                <i className="bi bi-arrow-up-right"></i>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}