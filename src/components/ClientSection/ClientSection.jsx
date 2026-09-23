import Image from "next/image";

import styles from "./ClientSection.module.css";

export default function ClientSection() {
  return (
    <section className={styles.clientSection}>
      <div className="container">
        <div className="row align-items-center g-4">

          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className="col-lg-5">
            <div className={styles.content}>

              <span className={styles.label}>
                OUR VALUED CLIENT
              </span>

              <h2 className={styles.title}>
                V-JHON COMPANY
              </h2>

              <div className={styles.line}></div>

              <p className={styles.description}>
                We are proud to work with V-JHON COMPANY and
                look forward to building strong and successful
                business partnerships.
              </p>

            </div>
          </div>


          {/* =========================================
              CLIENT LOGO / NAME
          ========================================= */}

          <div className="col-lg-4">
            <div className={styles.clientCard}>

              {/* 
                If you have the real V-JHON logo,
                replace this text with next/image.
              */}

              <div className={styles.logoBox}>
                <span className={styles.logoText}>
                  V-JHON
                </span>

                <span className={styles.logoSubText}>
                  COMPANY
                </span>
              </div>

            </div>
          </div>


          {/* =========================================
              QUOTE
          ========================================= */}

          <div className="col-lg-3">
            <div className={styles.quote}>

              <span className={styles.quoteIcon}>
                "
              </span>

              <p>
                Quality, precision and trust —
                that's what we value in our partnerships.
              </p>

              <span className={styles.author}>
                — Jai Ambey Engineering Works
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}