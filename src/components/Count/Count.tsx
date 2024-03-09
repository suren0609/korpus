import React, { useState } from "react";
import styles from "./Count.module.scss";

const Count = () => {
  const [itemCount, setItemCount] = useState<number>(1);

  const increment = () => {
    setItemCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (itemCount <= 1) {
      setItemCount(1);
      return;
    }

    setItemCount((prev) => prev - 1);
  };

  return (
    <div className={styles.count}>
      <button
        onClick={decrement}
        disabled={itemCount === 1}
        className={styles.incDecBtn}
      >
        {itemCount === 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
          >
            <path
              d="M0.500025 1.74995V0.25H13.5V1.74995H0.500025Z"
              fill="#C6C6C6"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
          >
            <path
              d="M0.500031 1.74995V0.25H13.5V1.74995H0.500031Z"
              fill="#1C1B1F"
            />
          </svg>
        )}
      </button>
      {/* <span>{itemCount}</span> */}
      <input
        type="number"
        value={itemCount}
        onChange={(e: any) => setItemCount(Number(e.target.value))}
        min={1}
        max={1000}
      />
      <button onClick={increment} className={styles.incDecBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M6.25003 7.74995H0.500031V6.25H6.25003V0.5H7.74998V6.25H13.5V7.74995H7.74998V13.5H6.25003V7.74995Z"
            fill="#1C1B1F"
          />
        </svg>
      </button>
    </div>
  );
};

export default Count;
