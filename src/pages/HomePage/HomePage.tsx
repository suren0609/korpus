import React from "react";
import styles from "./HomePage.module.scss";
import DesignScratch from "../../components/DesignScratch";
import Suggested from "../../components/Suggested";
import cardImg1 from "../../assets/Mask group (1).png";
import cardImg2 from "../../assets/Mask group (2).png";

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
        <DesignScratch cardImg={cardImg1} />
        <div className={styles.verticalLine}></div>
        <DesignScratch cardImg={cardImg2} />
      </div>
      <Suggested />
      <div className={styles.joinUsBlock}>
        <h1>Join us traditional approach while imagining</h1>
        <p>
          A traditional approach while imagining what the furniture of tomorrow
          could be, in its use and representation.
        </p>
        <button className={styles.learnMoreJoin}>
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
      <div className={styles.ratingBlock}>
        <div className={styles.verticalLine1}></div>
        <h1>Rating perfect lines and imposing a presence</h1>
        <p>
          Developed the concept of exclusivity, a Sol’ace features timeless
          furniture, with natural fabrics, curved lines, plenty of mirrors and
          classic design, which can be incorporated into any decor project.{" "}
        </p>
        <button className={styles.learnMoreRating}>
          Read More{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
            >
              <path
                d="M10.3558 7.62496H0.25V6.375H10.3558L5.60898 1.62819L6.49998 0.75L12.75 6.99998L6.49998 13.25L5.60898 12.3718L10.3558 7.62496Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.kitchenBg}></div>
    </div>
  );
};

export default HomePage;
