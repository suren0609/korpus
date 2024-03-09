import React, { useState } from "react";
import styles from "./KorpusesPage.module.scss";
import CustomRadio from "../../components/CustomRadio";
import ProductCard from "../../components/ProductCard";

const KorpusesPage = () => {
  const [isKitchenTypeOpen, setKitchenTypeOpen] = useState(false);
  const [isFasadeOpen, setFasadeOpen] = useState(false);
  const [isPosOpen, setPosOpen] = useState(false);
  const [isMaterialOpen, setMaterialOpen] = useState(false);
  const [isColorOpen, setColorOpen] = useState(false);
  const [isWidthOpen, setWidthOpen] = useState(false);
  const [isHeightOpen, setHeightOpen] = useState(false);

  const colors = [
    "#E0C29E",
    "#FFC164",
    "#D6C382",
    "#8C726F",
    "#DC906F",
    "#E09E9E",
    "#9F9678",
  ];

  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

  const selectColor = (color: string) => {
    setSelectedColor(color);
  };

  const colorToggle = () => {
    setColorOpen((prev) => !prev);
  };

  const heightToggle = () => {
    setHeightOpen((prev) => !prev);
  };

  const widthToggle = () => {
    setWidthOpen((prev) => !prev);
  };

  const materialToggle = () => {
    setMaterialOpen((prev) => !prev);
  };

  const posToggle = () => {
    setPosOpen((prev) => !prev);
  };

  const kitchenTypeToggle = () => {
    setKitchenTypeOpen((prev) => !prev);
  };

  const fasadeToggle = () => {
    setFasadeOpen((prev) => !prev);
  };
  return (
    <div className={styles.KorpusesPage}>
      <div className={styles.korpusesHeader}>
        <h5>Korpuses (200)</h5>
        <div className={styles.categories}>
          <ul>
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Kitchen</a>
            </li>
            <li>
              <a href="#">Shelf</a>
            </li>
            <li>
              <a href="#">Dresser</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.korpusesBody}>
        <div className={styles.filtersBlock}>
          <div className={styles.sideMenu}>
            <h5>Filters</h5>
            <ul className={styles.filterList}>
              <li>
                <div onClick={kitchenTypeToggle} className={styles.filterName}>
                  <span>Kitchen type</span>{" "}
                  <span>
                    {isKitchenTypeOpen ? (
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
                </div>
                {isKitchenTypeOpen && (
                  <ul>
                    <CustomRadio
                      name="withAHandle"
                      id="withAHandle"
                      value="With a handle"
                      text="With a handle"
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="withoutHandle"
                      id="withoutHandle"
                      value="Without handle"
                      text="Without handle"
                      onChange={() => {}}
                      // checked={false}
                    />
                  </ul>
                )}
              </li>
              <li>
                <div onClick={fasadeToggle} className={styles.filterName}>
                  <span>Facade</span>{" "}
                  <span>
                    {isFasadeOpen ? (
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
                </div>

                {isFasadeOpen && (
                  <ul>
                    <CustomRadio
                      name="with"
                      id="with"
                      value="With"
                      text="With"
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="without"
                      id="without"
                      value="Without"
                      text="Without"
                      onChange={() => {}}
                      // checked={true}
                    />
                  </ul>
                )}
              </li>
              <li>
                <div onClick={posToggle} className={styles.filterName}>
                  <span>Position</span>{" "}
                  <span>
                    {isPosOpen ? (
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
                </div>

                {isPosOpen && (
                  <ul>
                    <CustomRadio
                      name="above"
                      id="above"
                      value="Above"
                      text="Above"
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="below"
                      id="below"
                      value="Below"
                      text="Below"
                      onChange={() => {}}
                      // checked={false}
                    />
                  </ul>
                )}
              </li>
              <li>
                <div onClick={materialToggle} className={styles.filterName}>
                  <span>Material</span>{" "}
                  <span>
                    {isMaterialOpen ? (
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
                </div>

                {isMaterialOpen && (
                  <ul>
                    <CustomRadio
                      name="wood"
                      id="wood"
                      value="Wood"
                      text="Wood"
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="solidWood"
                      id="solidWood"
                      value="Solid wood"
                      text="Solid wood"
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="glass"
                      id="glass"
                      value="Glass"
                      text="Glass"
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="woodVeneer"
                      id="woodVeneer"
                      value="Wood veneer"
                      text="Wood veneer"
                      onChange={() => {}}
                      // checked={false}
                    />
                  </ul>
                )}
              </li>
              <li>
                <div onClick={colorToggle} className={styles.filterName}>
                  <span>Color</span>{" "}
                  <span>
                    {isColorOpen ? (
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
                </div>
                {isColorOpen && (
                  <ul className={styles.colorList}>
                    {colors.map((col, i) => (
                      <li
                        onClick={() => selectColor(col)}
                        key={i}
                        className={styles.colorItem}
                        style={{
                          border:
                            selectedColor === col
                              ? "1px solid #c6c6c6"
                              : "none",
                        }}
                      >
                        <span style={{ background: col }}></span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <div onClick={widthToggle} className={styles.filterName}>
                  <span>Width</span>{" "}
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
                </div>

                {isWidthOpen && (
                  <ul>
                    <CustomRadio
                      name="0-9"
                      id="0-9"
                      value='0-9"'
                      text='0-9"'
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="10-19"
                      id="10-19"
                      value='10-19"'
                      text='10-19"'
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="20-29"
                      id="20-29"
                      value='20-29"'
                      text='20-29"'
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="30-39"
                      id="30-39"
                      value='30-39"'
                      text='30-39"'
                      onChange={() => {}}
                      // checked={false}
                    />
                  </ul>
                )}
              </li>
              <li>
                <div onClick={heightToggle} className={styles.filterName}>
                  <span>Height</span>{" "}
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
                </div>

                {isHeightOpen && (
                  <ul>
                    <CustomRadio
                      name="0-9"
                      id="0-9"
                      value='0-9"'
                      text='0-9"'
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="10"
                      id="10"
                      value='10"'
                      text='10"'
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="15"
                      id="15"
                      value='15"'
                      text='15"'
                      onChange={() => {}}
                      // checked={false}
                    />
                    <CustomRadio
                      name="20"
                      id="20"
                      value='20"'
                      text='20"'
                      onChange={() => {}}
                      // checked={false}
                    />
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
              </li>
            </ul>
            <button className={styles.clearFilters}>Clear all filters</button>
          </div>
          <div className={styles.paginationNums}>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.49844 6.54195L6.76606 10.8096L6.00006 11.5836L0.416748 6.00031L6.00006 0.416992L6.76606 1.19101L2.49844 5.45866H11.5834V6.54195H2.49844Z"
                  fill="#1A1A1A"
                />
              </svg>
            </a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">...</a>
            <a href="#">20</a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M9.50169 6.54195H0.416748V5.45866H9.50169L5.23406 1.19101L6.00006 0.416992L11.5834 6.00031L6.00006 11.5836L5.23406 10.8096L9.50169 6.54195Z"
                  fill="#1A1A1A"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.productsBlock}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default KorpusesPage;
