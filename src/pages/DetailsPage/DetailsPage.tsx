import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../../assets/Image (4).png";
import img3 from "../../assets/Image (5).png";
import detail1Img from "../../assets/Imagedetail1.png";
import detail2Img from "../../assets/Imagedetail2.png";
import damperImg from "../../assets/Item Photo.png";
import img1 from "../../assets/detailImg.png";
import schemeImg from "../../assets/scheme.png";
import SuggestedProdList from "../../components/SuggestedProdList/SuggestedProdList";
import styles from "./DetailsPage.module.scss";
import CustomRadio from "../../components/CustomRadio/CustomRadio";

enum views {
  PRODUCTDETAILS = "productDetails",
  WHATSINCLUDED = "whatsIncluded",
  RETURNPOLICY = "returnPolicy",
}

const DetailsPage = () => {
  const [itemCount, setItemCount] = useState<number>(1);
  const [viewState, setViewState] = useState<string>(views.PRODUCTDETAILS);
  const [kitchenTypeShow, setKitchenTypeShow] = useState<boolean>(false);

  const kitchenTypeHandler = () => {
    setKitchenTypeShow((prev) => !prev);
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

  const viewChenger = (param: string) => {
    setViewState(param);
  };

  console.log(itemCount);

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
                <li onClick={kitchenTypeHandler}>
                  <span>Kitchen type (w/o handle)</span>{" "}
                  <span>
                    {kitchenTypeShow ? (
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
                {kitchenTypeShow && (
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
                )}

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
              <button className={styles.addCardBtn}>Add to card</button>
            </div>
          </div>
        </div>
        <div className={styles.schemeBlock}>
          <img src={schemeImg} alt="" />
          <img src={schemeImg} alt="" />
          <img src={schemeImg} alt="" />
        </div>
        <div className={styles.doorsBlock}>
          <div className={styles.txtBlock}>
            <h3>Wood base cabinet for sink with doors, white/gray frame</h3>
            <span>Material: Wood</span>
            <span>Color: Beige</span>
            <span>Height: 32x32”</span>
            <span>Width: 40x40”</span>
            <p>
              Extending the lifetime of our products is the single most
              important factor we can do to fight climate change. With smart
              tech being built into loudspeakers of today they become quickly
              outdated.
            </p>
            <button className={styles.assemblyBtn}>
              Assembly instructions{" "}
            </button>
          </div>
        </div>
        <div className={styles.viewSectionsBlock}>
          <div className={styles.viewControls}>
            <div
              onClick={() => viewChenger(views.PRODUCTDETAILS)}
              className={
                viewState === views.PRODUCTDETAILS
                  ? styles.controlActive
                  : styles.control
              }
            >
              <span>Product Details</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => viewChenger(views.WHATSINCLUDED)}
              className={
                viewState === views.WHATSINCLUDED
                  ? styles.controlActive
                  : styles.control
              }
            >
              <span>What’s Included</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => viewChenger(views.RETURNPOLICY)}
              className={
                viewState === views.RETURNPOLICY
                  ? styles.controlActive
                  : styles.control
              }
            >
              <span>Return Policy</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                    fill="#A3A3A3"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.views}>
            {viewState === views.PRODUCTDETAILS ? (
              <div className={styles.prodDetails}>
                <h4>Product Details</h4>
                <p>
                  With gray as a base, you create a warm and cozy feeling.
                  Perfect if you want a discreet color that goes with
                  everything. Modern or classic – you decide the style. <br />
                  <br />
                  Designed for sink and faucet with space for piping in the back
                  of the cabinet. The unique wedge dowels make assembly easy and
                  the fittings are nearly invisible. <br />
                  <br />
                  Choose to have the legs visible or hide them behind ENHET
                  plinth for a more uniform expression and easier cleaning.{" "}
                  <br />
                  <br />
                  10-year Limited Warranty. Read about the terms in the Limited
                  Warranty brochure.
                </p>
              </div>
            ) : viewState === views.WHATSINCLUDED ? (
              <div className={styles.whatsIncluded}>
                <h4>What’s included</h4>
                <p>
                  This product is made up of more than one component. You can
                  find the details of these components below.
                </p>
                <div className={styles.detail1}>
                  <img src={detail1Img} alt="" />
                  <div className={styles.detail1Info}>
                    <h5>Detail 1</h5>
                    <p>
                      Product description lorem ipsum dolor sit amet lorem ipsum
                      dolor sit amet{" "}
                    </p>
                    <button className={styles.quantity}>Quantity 1</button>
                  </div>
                </div>
                <div className={styles.detail1}>
                  <img src={detail2Img} alt="" />
                  <div className={styles.detail1Info}>
                    <h5>Detail 2</h5>
                    <p>
                      Product description lorem ipsum dolor sit amet lorem ipsum
                      dolor sit amet{" "}
                    </p>
                    <button className={styles.quantity}>Quantity 2</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.returnPolicy}>
                <div className={styles.shippingReturn}>
                  <h4>Shipping</h4>
                  <p>
                    We carry out our deliveries by contracted carriers,
                    depending on the location. We deliver in most parts of the
                    world all the products available for sale on the website. It
                    is not possible to schedule a date and time for deliveries.
                    The receipt of the goods can be carried out by third
                    parties, such as doormen of condominiums and family members,
                    as long as they sign the proof of receipt of the goods.
                  </p>
                </div>
                <div className={styles.shippingReturn}>
                  <h4>RETURN</h4>
                  <p>
                    You can ask for an exchange or return and still order parts
                    after assembly. The deadline for requests is up to 07
                    calendar days after delivery of the product. Illustrative
                    photos. Reduction scales are not proportional. The
                    decorative objects that appear in the products on offer are
                    not included in their prices. We reserve the right to
                    correct graphic errors. For more please visit the FAQ's
                    section and/or our Terms and Condition of Use
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.suggestedProds}>
          <h1>Suggested products</h1>
          <SuggestedProdList />
          <button className={styles.allKorpuses}>All Korpuses</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
