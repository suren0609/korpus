import React, { useState } from "react";
import productImg1 from "../../assets/ImageProduct1.png";
import styles from "./ProductInCart.module.scss";
import CustomRadio from "../CustomRadio/CustomRadio";

const ProductInCart = () => {
  const [itemCount, setItemCount] = useState<number>(1);
  const [isWidthOpen, setWidthOpen] = useState<boolean>(false);
  const [isHeightOpen, setHeightOpen] = useState<boolean>(false);

  const widthToggle = () => {
    setWidthOpen((prev) => !prev);
  };

  const heightToggle = () => {
    setHeightOpen((prev) => !prev);
  };

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
    <div className={styles.product}>
      <img src={productImg1} alt="" />
      <div className={styles.productContent}>
        <div className={styles.titleNshow}>
          <div className={styles.titleNPrice}>
            <h4>Base cabinet</h4>
            <p>REF. 1210/300</p>
            <span>47.000 amd</span>
          </div>
          <button className={styles.showHide}>Hide parts</button>
        </div>
        <ul className={styles.params}>
          <li onClick={widthToggle}>
            <span>Width (24”)</span>{" "}
            <span>
              {isWidthOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                >
                  <path
                    d="M1.0625 7L0 5.9375L5 0.9375L10 5.9375L8.9375 7L5 3.0625L1.0625 7Z"
                    fill="#747474"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                >
                  <path
                    d="M5 6.0625L0 1.0625L1.0625 0L5 3.9375L8.9375 0L10 1.0625L5 6.0625Z"
                    fill="#747474"
                  />
                </svg>
              )}
            </span>
          </li>
          {isWidthOpen && (
            <ul>
              <CustomRadio
                name="24"
                id="24"
                value='24"'
                text='24"'
                onChange={() => {}}
                // checked={false}
              />
              <CustomRadio
                name="28"
                id="28"
                value='28"'
                text='28"'
                onChange={() => {}}
                // checked={false}
              />
            </ul>
          )}
          <li onClick={heightToggle}>
            <span>Height (30”) </span>{" "}
            <span>
              {isHeightOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                >
                  <path
                    d="M1.0625 7L0 5.9375L5 0.9375L10 5.9375L8.9375 7L5 3.0625L1.0625 7Z"
                    fill="#747474"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                >
                  <path
                    d="M5 6.0625L0 1.0625L1.0625 0L5 3.9375L8.9375 0L10 1.0625L5 6.0625Z"
                    fill="#747474"
                  />
                </svg>
              )}
            </span>
          </li>
          {isHeightOpen && (
            <ul>
              <CustomRadio
                name="30"
                id="30"
                value='30"'
                text='30"'
                onChange={() => {}}
                // checked={false}
              />
              <CustomRadio
                name="40"
                id="40"
                value='40"'
                text='40"'
                onChange={() => {}}
                // checked={false}
              />
            </ul>
          )}
        </ul>
        <div className={styles.quantityNDelete}>
          <span>Quantity</span>
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
          <div className={styles.favAndDelete}>
            <button className={styles.fav}>Save to favorites</button>
            <button className={styles.del}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
