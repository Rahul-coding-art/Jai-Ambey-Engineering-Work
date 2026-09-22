
import Link from "next/link";
import styles from "./ProductsSection.module.css";
import {products} from "@/data/products"
import ProductsCards from "./ProductsCards";

export default function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <div className="container">

        <div className="row align-items-center g-5">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="col-lg-4">
            <div className={styles.intro}>

              <span className={styles.eyebrow}>
                Our Products & Services
              </span>

              <h2 className={styles.title}>
                Precision Moulds for
                
                <span> Endless Possibilities</span>
              </h2>

              <p className={styles.description}>
                We specialize in a wide range of moulds and dies,
                engineered for precision, durability and superior
                performance. Our products are crafted to meet
                the unique needs of various industries.
              </p>

              <Link
                href="/products"
                className={styles.viewAllButton}
              >
                <span>View All Products</span>
                <span className={styles.arrow}>→</span>
              </Link>

            </div>
          </div>

          {/* =========================
              RIGHT PRODUCTS
          ========================= */}
          <div className="col-lg-8">

            <div className="row g-3">

              {products.map((product) => (
                <div
                  className="
                       col-12 col-md-4"
                  
                  key={product.href}
                >
                 <ProductsCards product={product}/>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}