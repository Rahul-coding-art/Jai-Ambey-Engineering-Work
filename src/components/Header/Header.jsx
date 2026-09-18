"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={styles.siteHeader}>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${styles.customNavbar}`}
      >
        <div className={`container ${styles.navbarContainer}`}>
          {/* Logo */}
          <Link
            className={`navbar-brand ${styles.logo}`}
            href="/"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo.png"
              alt="Jai Ambey Engineering Works"
              width={180}
              height={60}
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className={`navbar-toggler ${styles.toggler}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas */}
          <div
            id="main-navigation"
            className={`offcanvas offcanvas-end ${styles.offcanvas} ${
              menuOpen ? "show" : ""
            }`}
            tabIndex={-1}
            style={menuOpen ? { visibility: "visible" } : undefined}
          >
            {/* Offcanvas Header */}
            <div
              className={`offcanvas-header ${styles.offcanvasHeader}`}
            >
              <h5
                className={`offcanvas-title ${styles.offcanvasTitle}`}
              >
                <Image
                  src="/images/logo.png"
                  alt="Jai Ambey Engineering Works"
                  width={180}
                  height={60}
                  priority
                />
              </h5>

              <button
                type="button"
                className={`btn-close ${styles.close}`}
                aria-label="Close"
                onClick={closeMenu}
              />
            </div>

            {/* Offcanvas Body */}
            <div
              className={`offcanvas-body ${styles.offcanvasBody}`}
            >
              <ul
                className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${styles.nav}`}
              >
                {/* Home */}
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    className={`nav-link ${styles.navLink}`}
                    href="/"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>

                {/* About Us */}
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    className={`nav-link ${styles.navLink}`}
                    href="/about-us"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>

                {/* Products */}
                <li
                  className={`nav-item dropdown ${styles.dropdown}`}
                >
                  <button
                    type="button"
                    className={`nav-link dropdown-toggle ${styles.navLink} ${styles.dropdownToggle} ${
                      dropdownOpen ? "show" : ""
                    }`}
                    onClick={() =>
                      setDropdownOpen(!dropdownOpen)
                    }
                    aria-expanded={dropdownOpen}
                  >
                    All Products
                  </button>

                  <ul
                    className={`dropdown-menu ${styles.dropdownMenu} ${
                      dropdownOpen ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="/plastic-moulding-die"
                        onClick={closeMenu}
                      >
                        Plastic Moulding Die
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="/die-moulds"
                        onClick={closeMenu}
                      >
                        Die Moulds
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="/injection-mould"
                        onClick={closeMenu}
                      >
                        Injection Mould
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="/blow-mould"
                        onClick={closeMenu}
                      >
                        Blow Mould
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="/bottle-cap-die"
                        onClick={closeMenu}
                      >
                        Bottle Cap Die
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="/handle-die"
                        onClick={closeMenu}
                      >
                        Handle Die
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`dropdown-item ${styles.dropdownItem}`}
                        href="/cap-die"
                        onClick={closeMenu}
                      >
                        Cap Die
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Gallery */}
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    className={`nav-link ${styles.navLink}`}
                    href="/gallery"
                    onClick={closeMenu}
                  >
                    Gallery
                  </Link>
                </li>

                {/* Contact Us */}
                <li className={`nav-item ${styles.navItem}`}>
                  <Link
                    className={`nav-link ${styles.navLink}`}
                    href="/contact-us"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}