import React from "react";
import logo from "../../assets/Frame 1321314711.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerTop}>
        <img src={logo} alt="" />
        <div className={styles.footerContent}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Carriers</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Return & Refund</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                info@korpus.com{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M0.974252 10.7036L0.208252 9.93764L8.84609 1.29179H1.12011V0.208496H10.7034V9.79179H9.62011V2.06581L0.974252 10.7036Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Instagram{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M0.974252 10.7036L0.208252 9.93764L8.84609 1.29179H1.12011V0.208496H10.7034V9.79179H9.62011V2.06581L0.974252 10.7036Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                Facebook{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M0.974252 10.7036L0.208252 9.93764L8.84609 1.29179H1.12011V0.208496H10.7034V9.79179H9.62011V2.06581L0.974252 10.7036Z"
                      fill="#A3A3A3"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          Korpus — A collectible furniture studio backed by a manufacturing
          workshop.
        </p>
        <p>© 2024 Korpus All right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
