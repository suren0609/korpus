import React, { useEffect, useState } from "react";
import styles from "./BasketSidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { basketSliceSelecror } from "../../store/selectors";
import {
  deleteFromBasket,
  setBasketActive,
} from "../../store/slices/basketSlice";
import { useNavigate } from "react-router-dom";
import prodInCartImg1 from "../../assets/ImageInCart.png";
import { ROOT_PATH } from "../../rootPath";
import Count from "../Count/Count";
import { moneyConvert } from "../../helpers/convertMoneyView";

const BasketSidebar = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { isBasketActive, basket } = useSelector(basketSliceSelecror);

  useEffect(() => {
    const total = basket.reduce((acc, cur) => acc + cur.price, 0);
    setTotalPrice(total);
  }, [basket]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const closeBasketHandler = () => {
    dispatch(setBasketActive(false));
  };

  const navigateToCart = () => {
    navigate(`${ROOT_PATH}/cart`);
    dispatch(setBasketActive(false));
  };
  useEffect(() => {
    if (isBasketActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isBasketActive]);

  const deleteFromCart = (id: number) => {
    dispatch(deleteFromBasket(id));
  };

  return (
    <div
      onClick={closeBasketHandler}
      className={
        isBasketActive ? `${styles.back} ${styles.active}` : styles.back
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          isBasketActive
            ? `${styles.BasketSidebar} ${styles.active}`
            : styles.BasketSidebar
        }
      >
        <div className={styles.basketHead}>
          <h4>Cart</h4>
          <span onClick={closeBasketHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M1.40002 13.6534L0.346191 12.5995L5.94619 6.99953L0.346191 1.39953L1.40002 0.345703L7.00002 5.9457L12.6 0.345703L13.6538 1.39953L8.05384 6.99953L13.6538 12.5995L12.6 13.6534L7.00002 8.05335L1.40002 13.6534Z"
                fill="#1C1B1F"
              />
            </svg>
          </span>
        </div>
        <div className={styles.basketBody}>
          <div className={styles.basketList}>
            {basket.length
              ? basket.map((prod) => (
                  <div key={prod.id} className={styles.productCardInCart}>
                    <img src={prodInCartImg1} alt="" />
                    <div className={styles.prodInfo}>
                      <div className={styles.infoTop}>
                        <h4>Base cabinet</h4>
                        <p>REF. 1210/300</p>
                        <span>{moneyConvert(prod.price)}AMD</span>
                      </div>
                      <div className={styles.quantDel}>
                        <div className={styles.quant}>
                          <span>Quantity</span>
                          <Count />
                        </div>
                        <button
                          onClick={() => deleteFromCart(prod.id)}
                          className={styles.delete}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : "Empty"}
          </div>
        </div>
        <div className={styles.basketFoot}>
          <div className={styles.totalSum}>
            <span className={styles.total}>Total</span>
            <span className={styles.sum}>{moneyConvert(totalPrice)}AMD</span>
          </div>
          <button onClick={navigateToCart} className={styles.continueToCard}>
            Continue to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketSidebar;
