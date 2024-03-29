import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { NavLink as Link } from "react-router-dom";
import Logo from "../Logo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setLanguage } from "../../store/slices/languageSlice";
import { ROOT_PATH } from "../../rootPath";
import {
  basketSliceSelecror,
  favSliceSelector,
  languageSliceSelector,
} from "../../store/selectors";
import { setBasketActive } from "../../store/slices/basketSlice";

const Header = () => {
  const [isLangActive, setLangActive] = useState<boolean>(false);

  const { language } = useSelector(languageSliceSelector);
  const { isBasketActive, basket } = useSelector(basketSliceSelecror);
  const { favourite } = useSelector(favSliceSelector);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [curScrollY, setCurScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setCurScrollY(window.scrollY);

    // setPrevScrollY(currentScrollY);
    // if (currentScrollY < prevScrollY) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }

    setPrevScrollY(currentScrollY);
  };

  const languages = ["English", "Armenian", "Russian"];

  const dispatch = useDispatch();

  const showLangHandler = () => {
    setLangActive((prev) => !prev);
  };

  const basketSidebarHandler = () => {
    dispatch(setBasketActive(!isBasketActive));
  };
  const hideLanguagesPopup = (e: any) => {
    console.log(e.relatedTarget?.dataset?.name);

    if (e.relatedTarget?.dataset?.name === "insidePopup") {
      return;
    }

    setLangActive(false);
  };

  const changeLang = (l: string) => {
    dispatch(setLanguage(l));
    setLangActive(false);
  };

  return (
    <div
      className={
        isVisible
          ? curScrollY === 0
            ? `${styles.Header} ${styles.show} ${styles.shadowNone}`
            : `${styles.Header} ${styles.show}`
          : `${styles.Header} ${styles.hide}`
      }
    >
      <nav>
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Facade</a>
          </li>
          <li>
            <Link className={styles.korpusLink} to={`${ROOT_PATH}/korpuses`}>
              Korpus
            </Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Carriers</a>
          </li>
        </ul>
      </nav>
      <Link to={`${ROOT_PATH}/`} className={styles.Logo}>
        <Logo />
      </Link>

      <div className={styles.searchNLang}>
        <div className={styles.searchNBasket}>
          <button className={styles.search}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.99458 12.5001C8.51212 12.5001 9.80909 11.9656 10.8855 10.8967C11.9619 9.82789 12.5001 8.53082 12.5001 7.00554C12.5001 5.488 11.9632 4.19103 10.8894 3.11464C9.81553 2.03826 8.5191 1.50006 7.00006 1.50006C5.47326 1.50006 4.17489 2.03696 3.10496 3.11077C2.03503 4.18459 1.50006 5.48102 1.50006 7.00006C1.50006 8.52687 2.0345 9.82524 3.10337 10.8952C4.17223 11.9651 5.4693 12.5001 6.99458 12.5001ZM7.00006 13.5834C6.08795 13.5834 5.23332 13.4114 4.43619 13.0673C3.63903 12.7233 2.93837 12.2527 2.33421 11.6555C1.73005 11.0583 1.25944 10.361 0.922373 9.56379C0.58529 8.76655 0.416748 7.91183 0.416748 6.99962C0.416748 6.095 0.588762 5.24098 0.93279 4.43758C1.2768 3.63416 1.74591 2.93503 2.34012 2.34017C2.93435 1.7453 3.63078 1.27602 4.42941 0.932311C5.22807 0.588602 6.0843 0.416748 6.99812 0.416748C7.90433 0.416748 8.75914 0.588762 9.56254 0.93279C10.366 1.2768 11.0649 1.74608 11.6595 2.34062C12.254 2.93518 12.7233 3.63319 13.0673 4.43467C13.4114 5.23615 13.5834 6.0916 13.5834 7.001C13.5834 7.81233 13.4436 8.57856 13.164 9.29969C12.8844 10.0208 12.498 10.6742 12.0048 11.2597L15.5834 14.8382L14.8254 15.5834L11.2469 12.0177C10.6654 12.5105 10.0165 12.8947 9.30033 13.1702C8.58412 13.4456 7.81737 13.5834 7.00006 13.5834Z"
                fill="black"
              />
            </svg>
          </button>
          <button className={styles.face}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.00344 15.5834C6.96135 15.5834 5.97805 15.3842 5.05354 14.9859C4.12903 14.5876 3.32275 14.0454 2.63471 13.3593C1.94666 12.6732 1.405 11.8682 1.00971 10.9441C0.614401 10.0201 0.416748 9.03736 0.416748 7.99583C0.416748 6.9463 0.614401 5.96428 1.00971 5.04975C1.405 4.13522 1.94719 3.33073 2.63629 2.63629C3.3254 1.94186 4.13196 1.39833 5.05598 1.00571C5.97999 0.613068 6.96276 0.416748 8.00429 0.416748C9.05382 0.416748 10.0358 0.613068 10.9504 1.00571C11.8649 1.39833 12.6694 1.94186 13.3638 2.63629C14.0583 3.33073 14.6018 4.13522 14.9944 5.04975C15.3871 5.96428 15.5834 6.9463 15.5834 7.99583C15.5834 9.03736 15.3871 10.0201 14.9944 10.9441C14.6018 11.8682 14.0583 12.6747 13.3638 13.3638C12.6694 14.0529 11.8649 14.5951 10.9504 14.9904C10.0358 15.3857 9.05353 15.5834 8.00344 15.5834ZM8.00006 1.50006C6.55988 1.50006 5.25753 1.93596 4.093 2.80775C2.92847 3.67955 2.15924 4.79228 1.78531 6.14592C2.26181 6.09783 2.65524 5.92716 2.9656 5.63389C3.27598 5.34062 3.66834 4.82112 4.14271 4.0754C4.32112 3.79334 4.55455 3.57832 4.84298 3.43035C5.13142 3.28239 5.44767 3.20841 5.79173 3.20841H10.2084C10.5407 3.20841 10.8574 3.28801 11.1587 3.44719C11.46 3.60638 11.6998 3.82005 11.8782 4.08821C12.3024 4.79228 12.6857 5.30056 13.0281 5.61306C13.3705 5.92556 13.7661 6.10318 14.2148 6.14592C13.7992 4.7645 13.0148 3.64483 11.8614 2.78691C10.7081 1.92901 9.42101 1.50006 8.00006 1.50006ZM8.00006 14.5001C9.79173 14.5001 11.3216 13.866 12.5898 12.5978C13.858 11.3297 14.4947 9.80242 14.5001 8.01608V7.64989C14.5001 7.47628 14.4974 7.35689 14.492 7.29171C13.7859 7.27996 13.1291 7.05587 12.5217 6.61944C11.9143 6.18301 11.4061 5.5556 10.9969 4.73723C10.9061 4.59406 10.7939 4.48402 10.6603 4.4071C10.5268 4.33017 10.366 4.29171 10.178 4.29171H5.80027C5.59906 4.29171 5.43168 4.33365 5.29812 4.41752C5.16458 4.50138 5.06629 4.60795 5.00325 4.73723C4.58018 5.58338 4.06416 6.21773 3.45519 6.64027C2.84621 7.06281 2.19718 7.27996 1.50808 7.29171C1.50273 7.41244 1.50006 7.53184 1.50006 7.64989V8.00808C1.50006 9.82218 2.12853 11.3577 3.38548 12.6146C4.64242 13.8716 6.18062 14.5001 8.00006 14.5001ZM5.50241 9.50006C5.22307 9.50006 4.98617 9.40362 4.79173 9.21075C4.59728 9.01786 4.50006 8.78175 4.50006 8.50242C4.50006 8.22307 4.59381 7.98617 4.78131 7.79173C4.96881 7.59728 5.20492 7.50006 5.48964 7.50006C5.77437 7.50006 6.01395 7.5965 6.20839 7.78937C6.40284 7.98226 6.50006 8.21837 6.50006 8.49771C6.50006 8.77705 6.40362 9.01395 6.21075 9.2084C6.01786 9.40284 5.78175 9.50006 5.50241 9.50006ZM10.5024 9.50006C10.2231 9.50006 9.98617 9.40362 9.79173 9.21075C9.59728 9.01786 9.50006 8.78175 9.50006 8.50242C9.50006 8.22307 9.5965 7.98617 9.78937 7.79173C9.98226 7.59728 10.2184 7.50006 10.4977 7.50006C10.7771 7.50006 11.014 7.5965 11.2084 7.78937C11.4028 7.98226 11.5001 8.21837 11.5001 8.49771C11.5001 8.77705 11.4036 9.01395 11.2107 9.2084C11.0179 9.40284 10.7817 9.50006 10.5024 9.50006Z"
                fill="black"
              />
            </svg>
            {favourite.length ? <span>({favourite.length})</span> : null}
          </button>
          <button onClick={basketSidebarHandler} className={styles.basket}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
            >
              <path
                d="M0.416748 16.5834V4.41679H3.41675C3.41675 3.41787 3.76581 2.57093 4.46394 1.87595C5.16205 1.18098 6.00899 0.833496 7.00477 0.833496C8.00055 0.833496 8.84593 1.18209 9.54091 1.87929C10.2359 2.57648 10.5834 3.42232 10.5834 4.41679H13.5834V16.5834H0.416748ZM1.50006 15.5001H12.5001V5.5001H1.50006V15.5001ZM7.00477 10.5834C8.00055 10.5834 8.84593 10.2348 9.54091 9.53762C10.2359 8.84041 10.5834 7.99457 10.5834 7.0001H9.50006C9.50006 7.69454 9.257 8.28482 8.77089 8.77093C8.28478 9.25704 7.6945 9.5001 7.00006 9.5001C6.30562 9.5001 5.71534 9.25704 5.22923 8.77093C4.74312 8.28482 4.50006 7.69454 4.50006 7.0001H3.41675C3.41675 7.99902 3.76581 8.84597 4.46394 9.54095C5.16205 10.2359 6.00899 10.5834 7.00477 10.5834ZM4.50006 4.41679H9.50006C9.50006 3.72234 9.257 3.13207 8.77089 2.64595C8.28478 2.15984 7.6945 1.91679 7.00006 1.91679C6.30562 1.91679 5.71534 2.15984 5.22923 2.64595C4.74312 3.13207 4.50006 3.72234 4.50006 4.41679Z"
                fill="black"
              />
            </svg>
            {basket.length ? <span>({basket.length})</span> : null}
          </button>
        </div>
        <div className={styles.lang} onBlur={hideLanguagesPopup} tabIndex={0}>
          <button className={styles.selected} onClick={showLangHandler}>
            {language}
          </button>
          {isLangActive && (
            <div
              data-name="insidePopup"
              tabIndex={0}
              className={styles.langList}
            >
              {languages.map((lang, i) => (
                <div
                  onClick={() => changeLang(lang)}
                  key={i}
                  className={styles.langItem}
                  tabIndex={0}
                  data-name="insidePopup"
                  style={{ fontWeight: language === lang ? "500" : "400" }}
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
