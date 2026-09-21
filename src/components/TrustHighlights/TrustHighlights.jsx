import styles from "./TrustHighlights.module.css";
import { highlights } from "@/data/highlights";

export default function TrustHighlights() {
  return (
    <section className={styles.trustSection}>
      <div className="container">
        <div className={styles.trustGrid}>
          {highlights.map((item, index) => (
            <div
              className={`${styles.trustItem} ${
                index !== highlights.length - 1
                  ? styles.withBorder
                  : ""
              }`}
              key={item.title}
            >
              <div className={styles.iconWrapper}>
                <i className={`bi ${item.icon}`}></i>
              </div>

              <div className={styles.content}>
                <h3>
                  {item.title}

                  {item.subtitle && (
                    <>
                      <br />
                      {item.subtitle}
                    </>
                  )}
                </h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}