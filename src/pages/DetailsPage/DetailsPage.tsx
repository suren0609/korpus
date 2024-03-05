import React, { useState } from "react";
import img1 from "../../assets/detailImg.png";
import img2 from "../../assets/Image (4).png";
import img3 from "../../assets/Image (5).png";
import damperImg from "../../assets/Item Photo.png";
import styles from "./DetailsPage.module.scss";
import { useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const [itemCount, setItemCount] = useState<number>(1);

  const increment = () => {
    setItemCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (itemCount === 1) {
      return;
    }

    setItemCount((prev) => prev - 1);
  };

  const navigate = useNavigate();
  return (
    <div className={styles.DetailsPage}>
      <div className={styles.detailsHead}>
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M10.5 12.5836V5.04195H2.99837L5.766 7.8096L4.99198 8.5756L0.916687 4.50031L5 0.416992L5.766 1.18301L2.99837 3.95866H11.5833V12.5836H10.5Z"
                fill="#1C1B1F"
              />
            </svg>
          </span>{" "}
          Korpuses
        </button>
      </div>
      <div className={styles.detailsBody}>
        <div className={styles.imgsAndDetails}>
          <div className={styles.imgs}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.titleCodePrice}>
              <h3>Wood base cabinet</h3>
              <p className={styles.code}>REF. 1210/300</p>
              <p className={styles.desc}>
                Wood base cabinet for sink w doors, white/gray frame, 24x24
                3/4x30 "
              </p>
              <p className={styles.price}>47,000 amd</p>
            </div>
            <div className={styles.detailInfo}>
              <ul>
                <li>
                  <span>Kitchen type (w/o handle)</span>{" "}
                  <span>
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
                  </span>
                </li>
                <li>
                  <span>Color (american walnut) </span>{" "}
                  <span>
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
                  </span>
                </li>
                <li>
                  <span>Width (24”)</span>{" "}
                  <span>
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
                  </span>
                </li>
                <li>
                  <span>Height (30”) </span>{" "}
                  <span>
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
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.damperBlock}>
              <img src={damperImg} alt="" />
              <div className={styles.damperInfo}>
                <div className={styles.infoTop}>
                  <h3>Metallic kitchen damper</h3>
                  <p className={styles.priceWithDamper}>47.000 amd</p>
                  <p className={styles.damperDesc}>
                    A hinge with a built-in damper for kitchen cabinets,
                    enabling soft and quiet closing of doors.
                  </p>
                </div>
                <button className={styles.addToCard}>Add to card</button>
              </div>
            </div>
            <div className={styles.countAndAdd}>
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
                <span>{itemCount}</span>
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
              <button className={styles.addCardBtn}>Add to card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
