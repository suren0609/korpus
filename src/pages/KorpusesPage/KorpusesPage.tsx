import React from "react";
import styles from "./KorpusesPage.module.scss";
import CustomRadio from "../../components/CustomRadio";
import ProductCard from "../../components/ProductCard";

const KorpusesPage = () => {
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
          <h5>Filters</h5>
          <ul className={styles.filterList}>
            <li>
              <div className={styles.filterName}>
                <span>Kitchen type</span>{" "}
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
              </div>

              <ul>
                <CustomRadio
                  name="withAHandle"
                  id="withAHandle"
                  value="With a handle"
                  text="With a handle"
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="withoutHandle"
                  id="withoutHandle"
                  value="Without handle"
                  text="Without handle"
                  onChange={() => {}}
                  checked={false}
                />
              </ul>
            </li>
            <li>
              <div className={styles.filterName}>
                <span>Fasede</span>{" "}
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
              </div>

              <ul>
                <CustomRadio
                  name="with"
                  id="with"
                  value="With"
                  text="With"
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="without"
                  id="without"
                  value="Without"
                  text="Without"
                  onChange={() => {}}
                  checked={true}
                />
              </ul>
            </li>
            <li>
              <div className={styles.filterName}>
                <span>Position</span>{" "}
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
              </div>

              <ul>
                <CustomRadio
                  name="above"
                  id="above"
                  value="Above"
                  text="Above"
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="below"
                  id="below"
                  value="Below"
                  text="Below"
                  onChange={() => {}}
                  checked={false}
                />
              </ul>
            </li>
            <li>
              <div className={styles.filterName}>
                <span>Material</span>{" "}
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
              </div>

              <ul>
                <CustomRadio
                  name="wood"
                  id="wood"
                  value="Wood"
                  text="Wood"
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="solidWood"
                  id="solidWood"
                  value="Solid wood"
                  text="Solid wood"
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="glass"
                  id="glass"
                  value="Glass"
                  text="Glass"
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="woodVeneer"
                  id="woodVeneer"
                  value="Wood veneer"
                  text="Wood veneer"
                  onChange={() => {}}
                  checked={false}
                />
              </ul>
            </li>
            <li>
              <div className={styles.filterName}>
                <span>Color</span>{" "}
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
              </div>
            </li>
            <li>
              <div className={styles.filterName}>
                <span>Width</span>{" "}
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
              </div>

              <ul>
                <CustomRadio
                  name="0-9"
                  id="0-9"
                  value='0-9"'
                  text='0-9"'
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="10-19"
                  id="10-19"
                  value='10-19"'
                  text='10-19"'
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="20-29"
                  id="20-29"
                  value='20-29"'
                  text='20-29"'
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="30-39"
                  id="30-39"
                  value='30-39"'
                  text='30-39"'
                  onChange={() => {}}
                  checked={false}
                />
              </ul>
            </li>
            <li>
              <div className={styles.filterName}>
                <span>Height</span>{" "}
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
              </div>

              <ul>
                <CustomRadio
                  name="0-9"
                  id="0-9"
                  value='0-9"'
                  text='0-9"'
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="10"
                  id="10"
                  value='10"'
                  text='10"'
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="15"
                  id="15"
                  value='15"'
                  text='15"'
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="20"
                  id="20"
                  value='20"'
                  text='20"'
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="30"
                  id="30"
                  value='30"'
                  text='30"'
                  onChange={() => {}}
                  checked={false}
                />
                <CustomRadio
                  name="40"
                  id="40"
                  value='40"'
                  text='40"'
                  onChange={() => {}}
                  checked={false}
                />
              </ul>
            </li>
          </ul>
          <button className={styles.clearFilters}>Clear all filters</button>
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
