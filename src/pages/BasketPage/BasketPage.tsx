import React, { useEffect, useState } from "react";
import productImg1 from "../../assets/ImageProduct1.png";
import styles from "./BasketPage.module.scss";
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import { useSelector } from "react-redux";
import { basketSliceSelecror } from "../../store/selectors";

const BasketPage = () => {
  const [itemCount, setItemCount] = useState<number>(1);

  const { basket } = useSelector(basketSliceSelecror);

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
    <div className={styles.BasketPage}>
      <div className={styles.titleBlock}>
        <h1>Cart</h1>
      </div>
      <div className={styles.basketContent}>
        <div className={styles.products}>
          {basket.map((el) => (
            <ProductInCart key={el.id} prod={el} />
          ))}
          {/* <ProductInCart />
          <ProductInCart />
          <ProductInCart />
          <ProductInCart /> */}
        </div>
        <div className={styles.orderSummary}>
          <div className={styles.orderBlock}>
            <h2>Order summary</h2>
            <div className={styles.productsPrice}>
              <span>Products price</span> <span>47,000AMD</span>
            </div>
            <div className={styles.productsPrice}>
              <span>Delivery</span> <span>Excluding delivery</span>
            </div>
            <div className={styles.total}>
              <span>Total</span>{" "}
              <span className={styles.totalPrice}>47,000AMD</span>
            </div>
            <button className={styles.conToChOut}>Continue to checkhout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
