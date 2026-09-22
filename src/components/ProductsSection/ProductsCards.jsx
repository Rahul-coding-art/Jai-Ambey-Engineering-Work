import Image from "next/image";
import Link from "next/link";
import styles from "./ProductsSection.module.css";

const ProductsCards = ({product}) => {
  return (
     <Link
                    href={product.href}
                    className={styles.productCard}
                  >

                    {/* Image */}
                    <div className={styles.imageWrapper}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.productImage}
                      />
                    </div>

                    {/* Card Footer */}
                    <div className={styles.cardFooter}>

                      <h3>{product.name}</h3>

                      <span className={styles.cardArrow}>
                        →
                      </span>

                    </div>

                  </Link>
  )
}

export default ProductsCards
