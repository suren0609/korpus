import React, { FC, useState } from "react";
import img1 from "../../assets/image 32.png";
import { NavLink as Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { ROOT_PATH } from "../../rootPath";
import { IProd } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { basketSliceSelecror, favSliceSelector } from "../../store/selectors";
import {
  deleteFromBasket,
  setBasketItem,
} from "../../store/slices/basketSlice";
import { deleteFromFav, setItemToFav } from "../../store/slices/favSlice";
import { moneyConvert } from "../../helpers/convertMoneyView";

interface IProps {
  prod: IProd;
  inGrid: boolean;
}

const ProductCard: FC<IProps> = ({ prod, inGrid }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [isFavourite, setFavourite] = useState<boolean>(false);

  const { basket } = useSelector(basketSliceSelecror);
  const { favourite } = useSelector(favSliceSelector);

  const dispatch = useDispatch();

  const favToggle = () => {
    isFavourite
      ? dispatch(deleteFromFav(prod.id))
      : dispatch(setItemToFav(prod));
    setFavourite((prev) => !prev);
  };

  const addToBasket = (prod: IProd) => {
    selected
      ? dispatch(deleteFromBasket(prod.id))
      : dispatch(setBasketItem(prod));
    setSelected((prev) => !prev);
  };
  return (
    <div className={inGrid ? styles.card : `${styles.card} ${styles.inGrid}`}>
      <div className={styles.cardTop}>
        <svg
          onClick={() => addToBasket(prod)}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <circle
            cx="7"
            cy="7"
            r="6.5"
            fill={basket.includes(prod) ? "#000000" : "white"}
            stroke="#E4E4E4"
          />
        </svg>

        {favourite.includes(prod) ? (
          <svg
            onClick={favToggle}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M8 15L6.95833 14.0625C5.56944 12.8264 4.42361 11.7674 3.52083 10.8854C2.61806 10.0035 1.90625 9.21875 1.38542 8.53125C0.864583 7.84375 0.503472 7.21528 0.302083 6.64583C0.100694 6.07639 0 5.49306 0 4.89583C0 3.65972 0.423611 2.61806 1.27083 1.77083C2.11806 0.923611 3.15972 0.5 4.39583 0.5C5.07639 0.5 5.73611 0.645833 6.375 0.9375C7.01389 1.22917 7.55556 1.63889 8 2.16667C8.44444 1.63889 8.98611 1.22917 9.625 0.9375C10.2639 0.645833 10.9236 0.5 11.6042 0.5C12.8403 0.5 13.8819 0.923611 14.7292 1.77083C15.5764 2.61806 16 3.65972 16 4.89583C16 5.49306 15.9028 6.06944 15.7083 6.625C15.5139 7.18056 15.1562 7.79861 14.6354 8.47917C14.1146 9.15972 13.3993 9.94792 12.4896 10.8438C11.5799 11.7396 10.4167 12.8264 9 14.1042L8 15Z"
              fill="#1C1B1F"
            />
          </svg>
        ) : (
          <svg
            onClick={favToggle}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M8.00006 14.4389L7.24687 13.7578C5.87936 12.5324 4.75089 11.4867 3.86146 10.6208C2.97204 9.75488 2.2736 8.99153 1.76612 8.33073C1.25864 7.66994 0.906873 7.07085 0.710831 6.53346C0.514776 5.99607 0.416748 5.45014 0.416748 4.89565C0.416748 3.78241 0.80163 2.84091 1.57139 2.07115C2.34116 1.30139 3.28266 0.916504 4.39589 0.916504C5.0818 0.916504 5.74152 1.07971 6.37506 1.40611C7.0086 1.7325 7.55027 2.19964 8.00006 2.80755C8.44985 2.19964 8.99152 1.7325 9.62506 1.40611C10.2586 1.07971 10.9183 0.916504 11.6042 0.916504C12.7175 0.916504 13.659 1.30139 14.4287 2.07115C15.1985 2.84091 15.5834 3.78241 15.5834 4.89565C15.5834 5.45014 15.4888 5.98913 15.2997 6.51263C15.1106 7.03613 14.7623 7.6248 14.2548 8.27865C13.7474 8.9325 13.0468 9.69932 12.1531 10.5791C11.2594 11.4589 10.1122 12.5324 8.71158 13.7995L8.00006 14.4389ZM8.00006 12.979C9.29173 11.8209 10.3542 10.8342 11.1876 10.019C12.0209 9.20388 12.6841 8.49421 13.1771 7.89005C13.6702 7.28588 14.014 6.74902 14.2084 6.27946C14.4028 5.80991 14.5001 5.34864 14.5001 4.89565C14.5001 4.07621 14.2223 3.38871 13.6667 2.83315C13.1112 2.27759 12.4237 1.99982 11.6042 1.99982C11.1128 1.99982 10.6539 2.10319 10.2276 2.30992C9.80134 2.51664 9.37666 2.84864 8.95358 3.30592L8.22441 4.16009H7.77571L7.04654 3.30592C6.61812 2.84331 6.18516 2.50997 5.74766 2.3059C5.31016 2.10185 4.85957 1.99982 4.39589 1.99982C3.5818 1.99982 2.89563 2.27759 2.33739 2.83315C1.77917 3.38871 1.50006 4.07621 1.50006 4.89565C1.50006 5.34864 1.59034 5.79949 1.77089 6.24821C1.95145 6.69693 2.28131 7.21991 2.76048 7.81713C3.23964 8.41435 3.89937 9.12268 4.73964 9.94213C5.57992 10.7616 6.66673 11.7739 8.00006 12.979Z"
              fill="#1A1A1A"
            />
          </svg>
        )}
      </div>
      <img src={img1} alt="" />
      <div className={styles.cardBottom}>
        <p>{prod.category}</p>
        <div className={styles.nameNCost}>
          <Link
            to={`${ROOT_PATH}/korpuses/${prod.id}`}
            className={styles.prodTitle}
          >
            {prod.name}
          </Link>
          <p>{moneyConvert(prod.price)}AMD</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
