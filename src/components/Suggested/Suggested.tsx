import SuggestedProdList from "../SuggestedProdList/SuggestedProdList";
import styles from "./Suggested.module.scss";

const Suggested = () => {
  return (
    <div className={styles.Suggested}>
      <div className={styles.titleNMore}>
        <h3>Suggested products</h3>
        <a href="#">
          See All{" "}
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
      <SuggestedProdList />
    </div>
  );
};

export default Suggested;
