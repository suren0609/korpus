import React, { FC } from "react";
import styles from "./DesignScratch.module.scss";

interface IProps {
  cardImg: string;
}

const DesignScratch: FC<IProps> = ({ cardImg }) => {
  return (
    <div className={styles.DesignScratch}>
      <img src={cardImg} alt="" />
      <h4>Design from Scratch</h4>
      <p>
        A traditional approach while imagining what the furniture of tomorrow
        could be, in its use and representation.
      </p>
      <a href="">
        Learn More{" "}
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
      </a>
    </div>
  );
};

export default DesignScratch;
