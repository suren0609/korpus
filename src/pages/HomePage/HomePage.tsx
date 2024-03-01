import React from "react";
import styles from "./HomePage.module.scss";
import DesignScratch from "../../components/DesignScratch";
import Suggested from "../../components/Suggested";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.headBlock}>
        <h2>
          A traditional approach while imagining what the furniture of tomorrow
          could be
        </h2>
        <p>
          A traditional approach while imagining what the furniture of tomorrow
          could be, in its use and representation.
        </p>
      </div>
      <div className={styles.designFromScratch}>
        <DesignScratch />
        <div className={styles.verticalLine}></div>
        <DesignScratch />
      </div>
      <Suggested />
      <div className={styles.joinUsBlock}>
        <h1>Join us traditional approach while imagining</h1>
        <p>
          A traditional approach while imagining what the furniture of tomorrow
          could be, in its use and representation.
        </p>
        <button>
          Learn More{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M12.1269 8.74995H0V7.25H12.1269L6.43077 1.55383L7.49997 0.5L15 7.99998L7.49997 15.5L6.43077 14.4461L12.1269 8.74995Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
