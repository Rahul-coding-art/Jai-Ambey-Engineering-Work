
"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./GalleryPreview.module.css";
import {galleryImages} from "@/data/gallery"


export default function GalleryPreview() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <section
      className={styles.gallerySection}
      aria-labelledby="gallery-title"
    >
      <div className="container">
        {/* HEADER */}

        <div className={styles.galleryHeader}>
          <div className={styles.headingGroup}>
            <span className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              OUR GALLERY
            </span>

            <h2 id="gallery-title" className={styles.title}>
              A Glimpse Into Our Work
              <span className={styles.titleAccent}>.</span>
            </h2>

            <p className={styles.description}>
              Explore our manufacturing capabilities,
              precision tooling, and quality craftsmanship.
            </p>
          </div>

          <Link
            href="/gallery"
            className={styles.viewGallery}
            aria-label="View the complete gallery"
          >
            <span>View Gallery</span>
            <i
              className="bi bi-arrow-up-right"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* GALLERY SLIDER */}

        <div className={styles.galleryCarousel}>
          <Swiper
            className={styles.gallerySwiper}
            modules={[Autoplay, Navigation, A11y]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={14}
            loop={true}
            speed={700}
            watchOverflow={false}
            grabCursor={true}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            a11y={{
              enabled: true,
            }}
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <Link
                  href="/gallery"
                  className={styles.galleryItem}
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, (max-width: 1199px) 25vw, 20vw"
                    className={styles.galleryImage}
                  />

                  <span
                    className={styles.imageOverlay}
                    aria-hidden="true"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* LEFT / RIGHT ARROWS */}

          <div className={styles.sliderNavigation}>
            <button
              ref={prevButtonRef}
              type="button"
              className={styles.navButton}
              aria-label="Previous gallery images"
            >
              <i className="bi bi-arrow-left" aria-hidden="true" />
            </button>

            <button
              ref={nextButtonRef}
              type="button"
              className={styles.navButton}
              aria-label="Next gallery images"
            >
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
