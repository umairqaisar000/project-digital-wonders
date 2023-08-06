import { useRouter } from "next/router";
import Navbar from "src/components/Navbar";
import styles from "./Home.module.scss";
import HeroSection from "../../components/HeroSection";
import OverviewSection from "../../components/OverviewSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firstCardImage from "../../assets/images/Group 73.svg";
import {
  faCircleCheck,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles["container"]}>
      <Navbar pathname={router.pathname} />
      <HeroSection />
      <OverviewSection />
      <div className={styles["services-section-container"]}>
        <div className={styles["services-heading"]}>Services</div>
        <div className={styles["services-sub-heading"]}>
          we are provinding !
        </div>
        <hr className={styles["pink-line"]} />
        <div className={styles["cards-container"]}>
          <div className={styles["services-card"]}>
            <h2>
              Assignments <hr className={styles["green-line"]} />
            </h2>
            <div className={styles["starting-text"]}>Starting from</div>
            <div>
              <span className={styles["price-text"]}>$16</span>
              <span className={styles["discount-text"]}>
                <del className={styles["cut-line"]}>$25</del>
              </span>
            </div>

            <div className={styles["services-card-list"]}>
              <ul className={styles["custom-list"]}>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#d9d9d9",
                      marginRight: "17px",
                      fontSize: "20px",
                    }}
                  />
                  Physics, Chemistry Biology Mathematics
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#d9d9d9",
                      marginRight: "17px",
                      fontSize: "20px",
                    }}
                  />
                  Payments after task completion
                </li>
              </ul>
              <div className={styles["learn-more-card-container"]}>
                <div className={styles["learn-more-text"]}>
                  learn more
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                      color: "#f16363",
                      fontSize: "17px",
                      marginLeft: "5px",
                      verticalAlign: "middle",
                    }}
                  />
                </div>
                <div className={styles["svg-section"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="45"
                    viewBox="0 0 41 45"
                    fill="none"
                  >
                    <path
                      d="M31.7989 18.1946L9.66685 17.7605L9.75393 13.3214L31.886 13.7556M31.6247 27.0727L9.49269 26.6386L9.57977 22.1995L31.7118 22.6337M24.811 35.8206L9.31853 35.5167L9.40561 31.0776L24.898 31.3815M20.9941 4.66036C21.5811 4.67188 22.1394 4.91676 22.5463 5.34115C22.9532 5.76553 23.1753 6.33465 23.1638 6.92331C23.1522 7.51196 22.908 8.07193 22.4848 8.48003C22.0615 8.88813 21.494 9.11093 20.907 9.09942C20.3201 9.08791 19.7617 8.84302 19.3548 8.41864C18.9479 7.99425 18.7258 7.42513 18.7374 6.83648C18.7489 6.24782 18.9932 5.68785 19.4164 5.27975C19.8396 4.87165 20.4071 4.64885 20.9941 4.66036ZM36.4865 4.96427L27.2353 4.7828C26.3563 2.18991 23.9584 0.277749 21.0812 0.221308C18.204 0.164868 15.7329 1.98151 14.7529 4.53793L5.50168 4.35645C4.32773 4.33342 3.19268 4.77902 2.34623 5.59522C1.49979 6.41142 1.01129 7.53137 0.988194 8.70868L0.378637 39.7821C0.355542 40.9594 0.799745 42.0976 1.61353 42.9464C2.42731 43.7952 3.54401 44.2849 4.71797 44.308L35.7028 44.9158C36.8768 44.9388 38.0118 44.4932 38.8583 43.677C39.7047 42.8608 40.1932 41.7409 40.2163 40.5636L40.8259 9.49016C40.849 8.31285 40.4048 7.17461 39.591 6.32584C38.7772 5.47707 37.6605 4.9873 36.4865 4.96427Z"
                      fill="#EB8F8F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["services-card"]}>
            <h2>
              Tutoring <hr className={styles["green-line"]} />
            </h2>
            <div className={styles["starting-text"]}>Starting from</div>
            <div>
              <span className={styles["price-text"]}>$23</span>
              <span className={styles["discount-text"]}>
                <del className={styles["cut-line"]}>$35</del>
              </span>
            </div>

            <div className={styles["services-card-list"]}>
              <ul className={styles["custom-list"]}>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#d9d9d9",
                      marginRight: "17px",
                      fontSize: "20px",
                    }}
                  />
                  Physics, Chemistry Biology Mathematics
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#d9d9d9",
                      marginRight: "17px",
                      fontSize: "20px",
                    }}
                  />
                  Payments after task completion
                </li>
              </ul>
              <div className={styles["learn-more-card-container"]}>
                <div className={styles["learn-more-text"]}>
                  learn more
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                      color: "#f16363",
                      fontSize: "17px",
                      marginLeft: "5px",
                      verticalAlign: "middle",
                    }}
                  />
                </div>
                <div className={styles["svg-section"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="58"
                    viewBox="0 0 59 58"
                    fill="none"
                  >
                    <path
                      d="M53.2439 43.5C56.4098 43.5 59 40.89 59 37.7V5.8C59 2.61 56.4098 0 53.2439 0H23.0244C23.8878 1.74 24.4634 3.77 24.4634 5.8H53.2439V37.7H27.3415V43.5M38.8537 14.5V20.3H21.5854V58H15.8293V40.6H10.0732V58H4.31707V34.8H0V20.3C0 17.11 2.59024 14.5 5.7561 14.5H38.8537ZM18.7073 5.8C18.7073 8.99 16.1171 11.6 12.9512 11.6C9.78537 11.6 7.19512 8.99 7.19512 5.8C7.19512 2.61 9.78537 0 12.9512 0C16.1171 0 18.7073 2.61 18.7073 5.8ZM44.6098 11.6H50.3659V34.8H44.6098V11.6ZM35.9756 23.2H41.7317V34.8H35.9756V23.2ZM27.3415 23.2H33.0976V34.8H27.3415V23.2Z"
                      fill="#65CDBA"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["services-card"]}>
            <h2>
              Writing <hr className={styles["green-line"]} />
            </h2>
            <div className={styles["starting-text"]}>Starting from</div>
            <div>
              <span className={styles["price-text"]}>$20</span>
              <span className={styles["discount-text"]}>
                <del className={styles["cut-line"]}>$27</del>
              </span>
            </div>

            <div className={styles["services-card-list"]}>
              <ul className={styles["custom-list"]}>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#d9d9d9",
                      marginRight: "17px",
                      fontSize: "20px",
                    }}
                  />
                  Physics, Chemistry Biology Mathematics
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{
                      color: "#d9d9d9",
                      marginRight: "17px",
                      fontSize: "20px",
                    }}
                  />
                  Payments after task completion
                </li>
              </ul>
              <div className={styles["learn-more-card-container"]}>
                <div className={styles["learn-more-text"]}>
                  learn more
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                      color: "#f16363",
                      fontSize: "17px",
                      marginLeft: "5px",
                      verticalAlign: "middle",
                    }}
                  />
                </div>
                <div className={styles["svg-section"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="55"
                    viewBox="0 0 57 55"
                    fill="none"
                  >
                    <path
                      d="M51.3 28.9474H39.9C39.9 32.1316 37.335 34.7368 34.2 34.7368H22.8C19.665 34.7368 17.1 32.1316 17.1 28.9474H5.7L0 43.4211V49.2105C0 52.3947 2.565 55 5.7 55H51.3C54.435 55 57 52.3947 57 49.2105V43.4211M11.4 49.2105C8.8635 49.2105 7.581 46.0842 9.3765 44.2605C11.172 42.4368 14.25 43.7395 14.25 46.3158C14.25 47.9079 12.9675 49.2105 11.4 49.2105ZM22.8 49.2105C20.2635 49.2105 18.981 46.0842 20.7765 44.2605C22.572 42.4368 25.65 43.7395 25.65 46.3158C25.65 47.9079 24.3675 49.2105 22.8 49.2105ZM34.2 49.2105C31.6635 49.2105 30.381 46.0842 32.1765 44.2605C33.972 42.4368 37.05 43.7395 37.05 46.3158C37.05 47.9079 35.7675 49.2105 34.2 49.2105ZM45.6 49.2105C43.0635 49.2105 41.781 46.0842 43.5765 44.2605C45.372 42.4368 48.45 43.7395 48.45 46.3158C48.45 47.9079 47.1675 49.2105 45.6 49.2105ZM45.6 20.2632V0H11.4V20.2632H2.85V26.0526H54.15V20.2632M17.1 5.78947H39.9V8.68421H17.1M17.1 11.5789H34.2V14.4737H17.1"
                      fill="#D265BA"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["how-it-work-container"]}>
        <div>
          <span className={styles["how-text"]}>How</span>
          <span className={styles["it-work-text"]}>it Works</span>
          <hr className={styles["pink-line"]} />
        </div>

        <div className={styles["card-container"]}>
          <div className={styles["how-it-work-card"]}>
            <div className={styles["svg-card"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="67"
                viewBox="0 0 60 67"
                fill="none"
              >
                <path
                  d="M37 47.2099V37.5455H39.5V45.1336V45.7064L39.994 45.9962L46.4632 49.7912L45.2011 52.012L37 47.2099ZM49 21.3182V20.3182H48H6H5V21.3182V54.8182V55.8182H6H20.01H21.5785L20.9166 54.3962C19.6872 51.755 19 48.7925 19 45.6818C19 40.2883 21.1107 35.1186 24.8632 31.3094C28.6151 27.5006 33.7006 25.3636 39 25.3636C42.0572 25.3636 44.9697 26.0596 47.5675 27.3057L49 27.9929V26.4041V21.3182ZM9 7.09091H10V6.09091V1H14V6.09091V7.09091H15H39H40V6.09091V1H44V6.09091V7.09091H45H48C49.3212 7.09091 50.5914 7.62356 51.5302 8.57666C52.4696 9.53028 53 10.8268 53 12.1818V30.7591V31.1642L53.282 31.4551C56.8254 35.1102 59 40.1309 59 45.6818C59 51.0753 56.8893 56.245 53.1368 60.0543C49.3849 63.863 44.2994 66 39 66C33.5456 66 28.6069 63.7983 25.0068 60.2016L24.7139 59.9091H24.3H6C3.23964 59.9091 1 57.6334 1 54.8182V12.1818C1 9.33942 3.23641 7.09091 6 7.09091H9ZM39 29.9114C34.871 29.9114 30.9142 31.5766 27.9992 34.5358C25.0847 37.4944 23.45 41.504 23.45 45.6818C23.45 54.3817 30.3936 61.4523 39 61.4523C41.0442 61.4523 43.0679 61.0435 44.9557 60.2498C46.8433 59.456 48.5576 58.293 50.0008 56.8279C51.444 55.3628 52.5881 53.6243 53.3683 51.712C54.1486 49.7998 54.55 47.7508 54.55 45.6818C54.55 36.9819 47.6064 29.9114 39 29.9114Z"
                  fill="white"
                  stroke="#545454"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className={styles["card-heading"]}>Step 1</div>
            <div className={styles["card-text"]}>
              Select service add your task, attach files, and set a deadline
            </div>
          </div>
          <div className={styles["how-it-work-card"]}>
            <div className={styles["svg-card"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="63"
                viewBox="0 0 35 63"
                fill="none"
              >
                <path
                  d="M13.25 7.63V1H21.75V7.63V8.40984L22.5063 8.59986C28.914 10.2097 33.4377 14.7491 33.9512 20H28.9089C28.5573 18.0857 27.2201 16.4372 25.445 15.251C23.353 13.8532 20.5306 13 17.5 13C14.4694 13 11.647 13.8532 9.55505 15.251C7.47767 16.6391 6 18.6605 6 21C6 22.131 6.27087 23.1372 6.85362 24.0231C7.42839 24.8968 8.26348 25.5881 9.28877 26.1702C11.3027 27.3137 14.2749 28.1542 18.1017 29.0762C21.847 30.0125 25.845 31.0219 28.9221 32.9471C31.9222 34.8242 34 37.5396 34 42C34 47.6676 29.3175 52.689 22.5063 54.4001L21.75 54.5902V55.37V62H13.25V55.37V54.5902L12.4937 54.4001C6.08602 52.7903 1.56232 48.2509 1.04878 43H6.09114C6.44269 44.9143 7.77993 46.5628 9.55505 47.749C11.647 49.1468 14.4694 50 17.5 50C20.5306 50 23.353 49.1468 25.445 47.749C27.5223 46.3609 29 44.3395 29 42C29 40.869 28.7291 39.8628 28.1464 38.9769C27.5716 38.1032 26.7365 37.4119 25.7112 36.8298C23.6973 35.6863 20.7251 34.8458 16.8983 33.9238C13.153 32.9875 9.15497 31.9781 6.07791 30.0529C3.07782 28.1758 1 25.4604 1 21C1 15.3324 5.68248 10.311 12.4937 8.59986L13.25 8.40984V7.63Z"
                  fill="white"
                  stroke="#545454"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className={styles["card-heading"]}>Step 1</div>
            <div className={styles["card-text"]}>
              Add your estimated budget for the task
            </div>
          </div>
          <div className={styles["how-it-work-card"]}>
            <div className={styles["svg-card"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="69"
                viewBox="0 0 63 69"
                fill="none"
              >
                <mask id="path-1-inside-1_9_449" fill="white">
                  <path d="M62.5532 57.7091C62.8691 57.7091 62.8691 58.0227 62.5532 58.3364L59.394 63.6682C59.078 63.9818 58.7621 63.9818 58.4462 63.9818L54.6551 62.7273C53.7073 63.3545 53.0755 63.6682 52.1277 64.2955L51.4958 68.3727C51.4958 68.6864 51.1799 69 50.864 69H44.5455C44.2295 69 43.9136 68.6864 43.5977 68.3727L42.9658 64.2955C42.0181 63.9818 41.0703 63.3545 40.4384 62.7273L36.6473 64.2955C36.3314 64.2955 36.0155 64.2955 35.6996 63.9818L32.5403 58.65C32.2244 58.3364 32.5403 58.0227 32.8562 57.7091L36.3314 55.2V52.0636L32.8562 49.5545C32.5403 49.2409 32.5403 48.9273 32.5403 48.6136L35.6996 43.2818C36.0155 42.9682 36.3314 42.9682 36.6473 42.9682L40.4384 44.5364C41.3862 43.9091 42.0181 43.5955 42.9658 42.9682L43.5977 38.8909C43.5977 38.5773 43.9136 38.2636 44.5455 38.2636H50.864C51.1799 38.2636 51.4958 38.5773 51.4958 38.8909L52.1277 42.9682C53.0755 43.2818 54.0232 43.9091 54.971 44.5364L58.7621 42.9682C59.078 42.9682 59.7099 42.9682 59.7099 43.2818L62.8691 48.6136C63.1851 48.9273 62.8691 49.2409 62.5532 49.5545L59.078 52.0636V55.2L62.5532 57.7091ZM52.1277 53.3182C52.1277 50.8091 49.9162 48.6136 47.3888 48.6136C44.8614 48.6136 42.6499 50.8091 42.6499 53.3182C42.6499 55.8273 44.8614 58.0227 47.3888 58.0227C49.9162 58.0227 52.1277 55.8273 52.1277 53.3182ZM31.5925 40.7727V21.9545H25.274V40.7727M37.911 0H18.9555V6.27273H37.911V0ZM26.2218 59.5909C15.1644 58.3364 6.31851 48.9273 6.31851 37.6364C6.31851 25.4045 16.1122 15.6818 28.4333 15.6818C38.5429 15.6818 47.0729 22.2682 49.6003 31.3636C52.1277 31.6773 54.3392 32.3045 56.5506 33.2455C55.6029 28.2273 53.7073 23.8364 50.548 20.0727L55.2869 15.6818C53.7073 14.1136 52.1277 12.5455 50.548 11.2909L46.1251 15.6818C41.3862 11.6045 35.0677 9.40909 28.4333 9.40909C12.637 9.40909 0 21.9545 0 37.6364C0 53.3182 12.637 65.8636 28.4333 65.8636H29.3811C27.8014 63.9818 26.8537 61.7864 26.2218 59.5909Z" />
                </mask>
                <path
                  d="M62.5532 57.7091C62.8691 57.7091 62.8691 58.0227 62.5532 58.3364L59.394 63.6682C59.078 63.9818 58.7621 63.9818 58.4462 63.9818L54.6551 62.7273C53.7073 63.3545 53.0755 63.6682 52.1277 64.2955L51.4958 68.3727C51.4958 68.6864 51.1799 69 50.864 69H44.5455C44.2295 69 43.9136 68.6864 43.5977 68.3727L42.9658 64.2955C42.0181 63.9818 41.0703 63.3545 40.4384 62.7273L36.6473 64.2955C36.3314 64.2955 36.0155 64.2955 35.6996 63.9818L32.5403 58.65C32.2244 58.3364 32.5403 58.0227 32.8562 57.7091L36.3314 55.2V52.0636L32.8562 49.5545C32.5403 49.2409 32.5403 48.9273 32.5403 48.6136L35.6996 43.2818C36.0155 42.9682 36.3314 42.9682 36.6473 42.9682L40.4384 44.5364C41.3862 43.9091 42.0181 43.5955 42.9658 42.9682L43.5977 38.8909C43.5977 38.5773 43.9136 38.2636 44.5455 38.2636H50.864C51.1799 38.2636 51.4958 38.5773 51.4958 38.8909L52.1277 42.9682C53.0755 43.2818 54.0232 43.9091 54.971 44.5364L58.7621 42.9682C59.078 42.9682 59.7099 42.9682 59.7099 43.2818L62.8691 48.6136C63.1851 48.9273 62.8691 49.2409 62.5532 49.5545L59.078 52.0636V55.2L62.5532 57.7091ZM52.1277 53.3182C52.1277 50.8091 49.9162 48.6136 47.3888 48.6136C44.8614 48.6136 42.6499 50.8091 42.6499 53.3182C42.6499 55.8273 44.8614 58.0227 47.3888 58.0227C49.9162 58.0227 52.1277 55.8273 52.1277 53.3182ZM31.5925 40.7727V21.9545H25.274V40.7727M37.911 0H18.9555V6.27273H37.911V0ZM26.2218 59.5909C15.1644 58.3364 6.31851 48.9273 6.31851 37.6364C6.31851 25.4045 16.1122 15.6818 28.4333 15.6818C38.5429 15.6818 47.0729 22.2682 49.6003 31.3636C52.1277 31.6773 54.3392 32.3045 56.5506 33.2455C55.6029 28.2273 53.7073 23.8364 50.548 20.0727L55.2869 15.6818C53.7073 14.1136 52.1277 12.5455 50.548 11.2909L46.1251 15.6818C41.3862 11.6045 35.0677 9.40909 28.4333 9.40909C12.637 9.40909 0 21.9545 0 37.6364C0 53.3182 12.637 65.8636 28.4333 65.8636H29.3811C27.8014 63.9818 26.8537 61.7864 26.2218 59.5909Z"
                  fill="white"
                />
                <path
                  d="M62.5532 57.7091L61.3825 59.3306L61.9067 59.7091H62.5532V57.7091ZM62.5532 58.3364L61.1441 56.917L60.9628 57.097L60.8326 57.3168L62.5532 58.3364ZM59.394 63.6682L60.803 65.0875L60.9843 64.9075L61.1146 64.6877L59.394 63.6682ZM58.4462 63.9818L57.8179 65.8806L58.1239 65.9818H58.4462V63.9818ZM54.6551 62.7273L55.2834 60.8285L54.3613 60.5234L53.5513 61.0595L54.6551 62.7273ZM52.1277 64.2955L51.0239 62.6276L50.2867 63.1156L50.1513 63.9892L52.1277 64.2955ZM51.4958 68.3727L49.5194 68.0664L49.4958 68.2187V68.3727H51.4958ZM43.5977 68.3727L41.6213 68.679L41.722 69.3288L42.1886 69.7921L43.5977 68.3727ZM42.9658 64.2955L44.9423 63.9892L44.755 62.7809L43.5942 62.3967L42.9658 64.2955ZM40.4384 62.7273L41.8475 61.3079L40.9033 60.3706L39.674 60.8791L40.4384 62.7273ZM36.6473 64.2955V66.2955H37.0447L37.4118 66.1436L36.6473 64.2955ZM35.6996 63.9818L33.9789 65.0013L34.1092 65.2212L34.2905 65.4012L35.6996 63.9818ZM32.5403 58.65L34.2609 57.6305L34.1307 57.4107L33.9494 57.2307L32.5403 58.65ZM32.8562 57.7091L31.6855 56.0876L31.5584 56.1793L31.4472 56.2897L32.8562 57.7091ZM36.3314 55.2L37.5022 56.8215L38.3314 56.2228V55.2H36.3314ZM36.3314 52.0636H38.3314V51.0408L37.5022 50.4421L36.3314 52.0636ZM32.8562 49.5545L31.4472 50.9739L31.5584 51.0843L31.6855 51.1761L32.8562 49.5545ZM32.5403 48.6136L30.8197 47.5941L30.5403 48.0656V48.6136H32.5403ZM35.6996 43.2818L34.2905 41.8625L34.1092 42.0425L33.9789 42.2623L35.6996 43.2818ZM36.6473 42.9682L37.4118 41.1201L37.0447 40.9682H36.6473V42.9682ZM40.4384 44.5364L39.674 46.3845L40.656 46.7907L41.5423 46.2042L40.4384 44.5364ZM42.9658 42.9682L44.0697 44.636L44.8069 44.1481L44.9423 43.2745L42.9658 42.9682ZM43.5977 38.8909L45.5741 39.1972L45.5977 39.045V38.8909H43.5977ZM51.4958 38.8909H49.4958V39.045L49.5194 39.1972L51.4958 38.8909ZM52.1277 42.9682L50.1513 43.2745L50.3385 44.4828L51.4993 44.8669L52.1277 42.9682ZM54.971 44.5364L53.8672 46.2042L54.7534 46.7907L55.7355 46.3845L54.971 44.5364ZM58.7621 42.9682V40.9682H58.3648L57.9976 41.1201L58.7621 42.9682ZM59.7099 43.2818H57.7099V43.8299L57.9893 44.3013L59.7099 43.2818ZM62.8691 48.6136L61.1485 49.6332L61.2788 49.853L61.4601 50.033L62.8691 48.6136ZM62.5532 49.5545L63.724 51.1761L63.851 51.0843L63.9623 50.9739L62.5532 49.5545ZM59.078 52.0636L57.9073 50.4421L57.078 51.0408V52.0636H59.078ZM59.078 55.2H57.078V56.2228L57.9073 56.8215L59.078 55.2ZM31.5925 21.9545H33.5925V19.9545H31.5925V21.9545ZM25.274 21.9545V19.9545H23.274V21.9545H25.274ZM37.911 0H39.911V-2H37.911V0ZM18.9555 0V-2H16.9555V0H18.9555ZM18.9555 6.27273H16.9555V8.27273H18.9555V6.27273ZM37.911 6.27273V8.27273H39.911V6.27273H37.911ZM26.2218 59.5909L28.1438 59.0378L27.7744 57.7542L26.4473 57.6037L26.2218 59.5909ZM49.6003 31.3636L47.6733 31.8991L48.0304 33.1842L49.354 33.3484L49.6003 31.3636ZM56.5506 33.2455L55.7676 35.0858L59.2102 36.5505L58.5159 32.8743L56.5506 33.2455ZM50.548 20.0727L49.1887 18.6057L47.7918 19.9L49.0162 21.3586L50.548 20.0727ZM55.2869 15.6818L56.6463 17.1489L58.1758 15.7316L56.696 14.2625L55.2869 15.6818ZM50.548 11.2909L51.7919 9.72475L50.4002 8.61947L49.139 9.87156L50.548 11.2909ZM46.1251 15.6818L44.8207 17.1979L46.2221 18.4037L47.5342 17.1012L46.1251 15.6818ZM29.3811 65.8636V67.8636H33.6711L30.9129 64.5778L29.3811 65.8636ZM62.5532 59.7091C62.3241 59.7091 61.8564 59.6526 61.4193 59.2729C60.9452 58.861 60.7902 58.3162 60.7902 57.9051C60.7902 57.5357 60.9062 57.2765 60.9691 57.1595C61.0397 57.0281 61.11 56.951 61.1441 56.917L63.9623 59.7557C64.2731 59.4471 64.7902 58.806 64.7902 57.9051C64.7902 57.3764 64.5956 56.7336 64.0425 56.2531C63.5264 55.8048 62.9403 55.7091 62.5532 55.7091V59.7091ZM60.8326 57.3168L57.6733 62.6487L61.1146 64.6877L64.2738 59.3559L60.8326 57.3168ZM57.9849 62.2488C58.0265 62.2075 58.0919 62.1536 58.1819 62.1033C58.2725 62.0527 58.3619 62.0205 58.4383 62.0015C58.5101 61.9837 58.5575 61.9809 58.5593 61.9808C58.5601 61.9807 58.5533 61.9811 58.5336 61.9814C58.5122 61.9818 58.4883 61.9818 58.4462 61.9818V65.9818C58.7897 65.9818 59.8654 66.0183 60.803 65.0875L57.9849 62.2488ZM59.0745 62.0831L55.2834 60.8285L54.0267 64.626L57.8179 65.8806L59.0745 62.0831ZM53.5513 61.0595C53.1211 61.3441 52.763 61.5578 52.3679 61.7931C51.9731 62.0282 51.5415 62.285 51.0239 62.6276L53.2315 65.9633C53.6616 65.6786 54.0198 65.465 54.4149 65.2296C54.8096 64.9945 55.2412 64.7377 55.7589 64.3951L53.5513 61.0595ZM50.1513 63.9892L49.5194 68.0664L53.4722 68.679L54.1041 64.6017L50.1513 63.9892ZM49.4958 68.3727C49.4958 67.8739 49.7265 67.5462 49.8893 67.3846C50.053 67.2222 50.3766 67 50.864 67V71C51.6673 71 52.3068 70.621 52.7074 70.2233C53.1072 69.8265 53.4958 69.1852 53.4958 68.3727H49.4958ZM50.864 67H44.5455V71H50.864V67ZM44.5455 67C44.8016 67 44.9955 67.064 45.1053 67.1117C45.1606 67.1357 45.2009 67.1583 45.2253 67.173C45.2497 67.1878 45.2636 67.198 45.266 67.1998C45.2677 67.2011 45.2477 67.186 45.1972 67.139C45.1459 67.0913 45.0901 67.0361 45.0068 66.9534L42.1886 69.7921C42.3205 69.923 42.5831 70.1892 42.8772 70.4081C43.151 70.612 43.7395 71 44.5455 71V67ZM45.5741 68.0664L44.9423 63.9892L40.9894 64.6017L41.6213 68.679L45.5741 68.0664ZM43.5942 62.3967C42.9725 62.191 42.2852 61.7425 41.8475 61.3079L39.0294 64.1466C39.8554 64.9666 41.0636 65.7726 42.3375 66.1942L43.5942 62.3967ZM39.674 60.8791L35.8829 62.4473L37.4118 66.1436L41.2029 64.5754L39.674 60.8791ZM36.6473 62.2955C36.6053 62.2955 36.5813 62.2954 36.5599 62.2951C36.5402 62.2948 36.5334 62.2943 36.5343 62.2944C36.536 62.2945 36.5834 62.2973 36.6552 62.3151C36.7317 62.3341 36.821 62.3664 36.9116 62.417C37.0016 62.4672 37.067 62.5212 37.1086 62.5625L34.2905 65.4012C35.2281 66.332 36.3038 66.2955 36.6473 66.2955V62.2955ZM37.4202 62.9623L34.2609 57.6305L30.8197 59.6695L33.9789 65.0013L37.4202 62.9623ZM33.9494 57.2307C34.1155 57.3956 34.3389 57.7092 34.3963 58.1649C34.4509 58.599 34.3245 58.9264 34.2476 59.0792C34.1762 59.2209 34.1091 59.2899 34.1296 59.2667C34.1466 59.2474 34.1762 59.2169 34.2653 59.1284L31.4472 56.2897C31.3702 56.3661 30.9324 56.769 30.6751 57.2799C30.5192 57.5895 30.3532 58.0738 30.4276 58.6646C30.5048 59.2771 30.8072 59.7476 31.1312 60.0694L33.9494 57.2307ZM34.027 59.3306L37.5022 56.8215L35.1607 53.5785L31.6855 56.0876L34.027 59.3306ZM38.3314 55.2V52.0636H34.3314V55.2H38.3314ZM37.5022 50.4421L34.027 47.933L31.6855 51.1761L35.1607 53.6852L37.5022 50.4421ZM34.2653 48.1352C34.3069 48.1765 34.362 48.2421 34.4137 48.3334C34.4658 48.4254 34.4994 48.5167 34.5192 48.5957C34.5379 48.67 34.5411 48.7197 34.5413 48.7232C34.5414 48.7249 34.541 48.7188 34.5407 48.6998C34.5403 48.6789 34.5403 48.6555 34.5403 48.6136H30.5403C30.5403 48.9591 30.5048 50.0383 31.4472 50.9739L34.2653 48.1352ZM34.2609 49.6332L37.4202 44.3013L33.9789 42.2623L30.8197 47.5941L34.2609 49.6332ZM37.1086 44.7012C37.067 44.7425 37.0016 44.7964 36.9116 44.8467C36.821 44.8973 36.7317 44.9295 36.6552 44.9485C36.5834 44.9663 36.536 44.9691 36.5343 44.9692C36.5334 44.9693 36.5402 44.9689 36.5599 44.9686C36.5813 44.9682 36.6053 44.9682 36.6473 44.9682V40.9682C36.3038 40.9682 35.2281 40.9317 34.2905 41.8625L37.1086 44.7012ZM35.8829 44.8163L39.674 46.3845L41.2029 42.6882L37.4118 41.1201L35.8829 44.8163ZM41.5423 46.2042C41.9724 45.9195 42.3306 45.7059 42.7256 45.4705C43.1204 45.2354 43.552 44.9786 44.0697 44.636L41.862 41.3004C41.4319 41.585 41.0737 41.7987 40.6786 42.034C40.2839 42.2691 39.8523 42.526 39.3346 42.8686L41.5423 46.2042ZM44.9423 43.2745L45.5741 39.1972L41.6213 38.5846L40.9894 42.6619L44.9423 43.2745ZM45.5977 38.8909C45.5977 39.4461 45.3101 39.8546 45.029 40.0638C44.7608 40.2636 44.5465 40.2636 44.5455 40.2636V36.2636C43.3952 36.2636 41.5977 36.9661 41.5977 38.8909H45.5977ZM44.5455 40.2636H50.864V36.2636H44.5455V40.2636ZM50.864 40.2636C50.3766 40.2636 50.053 40.0415 49.8893 39.879C49.7265 39.7174 49.4958 39.3897 49.4958 38.8909H53.4958C53.4958 38.0785 53.1072 37.4371 52.7074 37.0403C52.3068 36.6426 51.6673 36.2636 50.864 36.2636V40.2636ZM49.5194 39.1972L50.1513 43.2745L54.1041 42.6619L53.4722 38.5846L49.5194 39.1972ZM51.4993 44.8669C52.1441 45.0803 52.8592 45.5371 53.8672 46.2042L56.0748 42.8686C55.1872 42.2811 54.0068 41.4834 52.756 41.0694L51.4993 44.8669ZM55.7355 46.3845L59.5266 44.8163L57.9976 41.1201L54.2065 42.6882L55.7355 46.3845ZM58.7621 44.9682C58.9604 44.9682 58.9947 44.975 58.965 44.9691C58.9595 44.968 58.738 44.9306 58.4734 44.7487C58.3245 44.6464 58.1257 44.4733 57.9642 44.2024C57.7944 43.9175 57.7099 43.5971 57.7099 43.2818H61.7099C61.7099 42.3924 61.2072 41.774 60.739 41.4523C60.3461 41.1822 59.9469 41.086 59.744 41.0457C59.3193 40.9614 58.8798 40.9682 58.7621 40.9682V44.9682ZM57.9893 44.3013L61.1485 49.6332L64.5898 47.5941L61.4305 42.2623L57.9893 44.3013ZM61.4601 50.033C61.294 49.8681 61.0705 49.5544 61.0131 49.0987C60.9585 48.6647 61.0849 48.3372 61.1619 48.1844C61.2332 48.0428 61.3003 47.9737 61.2799 47.9969C61.2628 48.0162 61.2332 48.0467 61.1441 48.1352L63.9623 50.9739C64.0392 50.8975 64.4771 50.4946 64.7344 49.9837C64.8903 49.6741 65.0562 49.1899 64.9818 48.599C64.9047 47.9865 64.6023 47.516 64.2782 47.1943L61.4601 50.033ZM61.3825 47.933L57.9073 50.4421L60.2488 53.6852L63.724 51.1761L61.3825 47.933ZM57.078 52.0636V55.2H61.078V52.0636H57.078ZM57.9073 56.8215L61.3825 59.3306L63.724 56.0876L60.2488 53.5785L57.9073 56.8215ZM54.1277 53.3182C54.1277 49.6908 51.007 46.6136 47.3888 46.6136V50.6136C48.8254 50.6136 50.1277 51.9273 50.1277 53.3182H54.1277ZM47.3888 46.6136C43.7706 46.6136 40.6499 49.6908 40.6499 53.3182H44.6499C44.6499 51.9273 45.9522 50.6136 47.3888 50.6136V46.6136ZM40.6499 53.3182C40.6499 56.9455 43.7706 60.0227 47.3888 60.0227V56.0227C45.9522 56.0227 44.6499 54.709 44.6499 53.3182H40.6499ZM47.3888 60.0227C51.007 60.0227 54.1277 56.9455 54.1277 53.3182H50.1277C50.1277 54.709 48.8254 56.0227 47.3888 56.0227V60.0227ZM33.5925 40.7727V21.9545H29.5925V40.7727H33.5925ZM31.5925 19.9545H25.274V23.9545H31.5925V19.9545ZM23.274 21.9545V40.7727H27.274V21.9545H23.274ZM37.911 -2H18.9555V2H37.911V-2ZM16.9555 0V6.27273H20.9555V0H16.9555ZM18.9555 8.27273H37.911V4.27273H18.9555V8.27273ZM39.911 6.27273V0H35.911V6.27273H39.911ZM26.4473 57.6037C16.3541 56.4585 8.31851 47.8637 8.31851 37.6364H4.31851C4.31851 49.9908 13.9747 60.2142 25.9963 61.5782L26.4473 57.6037ZM8.31851 37.6364C8.31851 26.5228 17.203 17.6818 28.4333 17.6818V13.6818C15.0214 13.6818 4.31851 24.2863 4.31851 37.6364H8.31851ZM28.4333 17.6818C37.6663 17.6818 45.3922 23.69 47.6733 31.8991L51.5273 30.8282C48.7536 20.8464 39.4195 13.6818 28.4333 13.6818V17.6818ZM49.354 33.3484C51.6849 33.6377 53.7163 34.213 55.7676 35.0858L57.3336 31.4051C54.962 30.3961 52.5704 29.7169 49.8466 29.3789L49.354 33.3484ZM58.5159 32.8743C57.515 27.575 55.4936 22.8536 52.0799 18.7869L49.0162 21.3586C51.921 24.8191 53.6907 28.8795 54.5854 33.6166L58.5159 32.8743ZM51.9074 21.5398L56.6463 17.1489L53.9276 14.2148L49.1887 18.6057L51.9074 21.5398ZM56.696 14.2625C55.1353 12.7131 53.4747 11.0612 51.7919 9.72475L49.3042 12.8571C50.7807 14.0297 52.2793 15.5142 53.8779 17.1012L56.696 14.2625ZM49.139 9.87156L44.716 14.2625L47.5342 17.1012L51.9571 12.7103L49.139 9.87156ZM47.4295 14.1657C42.2936 9.74689 35.4994 7.40909 28.4333 7.40909V11.4091C34.636 11.4091 40.4788 13.4622 44.8207 17.1979L47.4295 14.1657ZM28.4333 7.40909C11.5462 7.40909 -2 20.8363 -2 37.6364H2C2 23.0728 13.7278 11.4091 28.4333 11.4091V7.40909ZM-2 37.6364C-2 54.4364 11.5462 67.8636 28.4333 67.8636V63.8636C13.7278 63.8636 2 52.1999 2 37.6364H-2ZM28.4333 67.8636H29.3811V63.8636H28.4333V67.8636ZM30.9129 64.5778C29.5733 62.9819 28.7292 61.0719 28.1438 59.0378L24.2998 60.1441C24.9781 62.5008 26.0295 64.9817 27.8492 67.1495L30.9129 64.5778Z"
                  fill="#545454"
                  mask="url(#path-1-inside-1_9_449)"
                />
              </svg>
            </div>
            <div className={styles["card-heading"]}>Step 1</div>
            <div className={styles["card-text"]}>
              Wait for the response from our team
            </div>
          </div>
          <div className={styles["how-it-work-card"]}>
            <div className={styles["svg-card"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                <mask id="path-1-inside-1_9_458" fill="white">
                  <path d="M48.2222 0H13.7778C6.16556 0 0 6.16556 0 13.7778V48.2222C0 55.8344 6.16556 62 13.7778 62H55.1111C58.9344 62 62 58.9344 62 55.1111V20.6667C62 16.8778 58.9344 13.7778 55.1111 13.7778V6.88889C55.1111 3.1 52.0456 0 48.2222 0ZM48.2222 6.88889V13.7778H13.7778C11.2633 13.7778 8.92111 14.4667 6.88889 15.6378V13.7778C6.88889 9.98889 9.98889 6.88889 13.7778 6.88889M43.0556 43.0556C40.1967 43.0556 37.8889 40.7478 37.8889 37.8889C37.8889 35.03 40.1967 32.7222 43.0556 32.7222C45.9144 32.7222 48.2222 35.03 48.2222 37.8889C48.2222 40.7478 45.9144 43.0556 43.0556 43.0556Z" />
                </mask>
                <path
                  d="M48.2222 0H13.7778C6.16556 0 0 6.16556 0 13.7778V48.2222C0 55.8344 6.16556 62 13.7778 62H55.1111C58.9344 62 62 58.9344 62 55.1111V20.6667C62 16.8778 58.9344 13.7778 55.1111 13.7778V6.88889C55.1111 3.1 52.0456 0 48.2222 0ZM48.2222 6.88889V13.7778H13.7778C11.2633 13.7778 8.92111 14.4667 6.88889 15.6378V13.7778C6.88889 9.98889 9.98889 6.88889 13.7778 6.88889M43.0556 43.0556C40.1967 43.0556 37.8889 40.7478 37.8889 37.8889C37.8889 35.03 40.1967 32.7222 43.0556 32.7222C45.9144 32.7222 48.2222 35.03 48.2222 37.8889C48.2222 40.7478 45.9144 43.0556 43.0556 43.0556Z"
                  fill="white"
                />
                <path
                  d="M55.1111 13.7778H53.1111V15.7778H55.1111V13.7778ZM48.2222 13.7778V15.7778H50.2222V13.7778H48.2222ZM6.88889 15.6378H4.88889V19.0986L7.88749 17.3706L6.88889 15.6378ZM48.2222 -2H13.7778V2H48.2222V-2ZM13.7778 -2C5.06099 -2 -2 5.06099 -2 13.7778H2C2 7.27012 7.27012 2 13.7778 2V-2ZM-2 13.7778V48.2222H2V13.7778H-2ZM-2 48.2222C-2 56.939 5.06099 64 13.7778 64V60C7.27013 60 2 54.7299 2 48.2222H-2ZM13.7778 64H55.1111V60H13.7778V64ZM55.1111 64C60.039 64 64 60.039 64 55.1111H60C60 57.8299 57.8299 60 55.1111 60V64ZM64 55.1111V20.6667H60V55.1111H64ZM64 20.6667C64 15.7797 60.0455 11.7778 55.1111 11.7778V15.7778C57.8234 15.7778 60 17.9758 60 20.6667H64ZM57.1111 13.7778V6.88889H53.1111V13.7778H57.1111ZM57.1111 6.88889C57.1111 2.00195 53.1566 -2 48.2222 -2V2C50.9345 2 53.1111 4.19805 53.1111 6.88889H57.1111ZM46.2222 6.88889V13.7778H50.2222V6.88889H46.2222ZM48.2222 11.7778H13.7778V15.7778H48.2222V11.7778ZM13.7778 11.7778C10.891 11.7778 8.20677 12.57 5.89029 13.9049L7.88749 17.3706C9.63545 16.3633 11.6356 15.7778 13.7778 15.7778V11.7778ZM8.88889 15.6378V13.7778H4.88889V15.6378H8.88889ZM8.88889 13.7778C8.88889 11.0935 11.0935 8.88889 13.7778 8.88889V4.88889C8.88432 4.88889 4.88889 8.88432 4.88889 13.7778H8.88889ZM43.0556 41.0556C41.3012 41.0556 39.8889 39.6432 39.8889 37.8889H35.8889C35.8889 41.8523 39.0921 45.0556 43.0556 45.0556V41.0556ZM39.8889 37.8889C39.8889 36.1346 41.3012 34.7222 43.0556 34.7222V30.7222C39.0921 30.7222 35.8889 33.9254 35.8889 37.8889H39.8889ZM43.0556 34.7222C44.8099 34.7222 46.2222 36.1346 46.2222 37.8889H50.2222C50.2222 33.9254 47.019 30.7222 43.0556 30.7222V34.7222ZM46.2222 37.8889C46.2222 39.6432 44.8099 41.0556 43.0556 41.0556V45.0556C47.019 45.0556 50.2222 41.8523 50.2222 37.8889H46.2222Z"
                  fill="#545454"
                  mask="url(#path-1-inside-1_9_458)"
                />
              </svg>
            </div>
            <div className={styles["card-heading"]}>Step 1</div>
            <div className={styles["card-text"]}>Add cash to our wallet</div>
          </div>
          <div className={styles["how-it-work-card"]}>
            <div className={styles["svg-card"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="67"
                height="67"
                viewBox="0 0 67 67"
                fill="none"
              >
                <mask id="path-1-inside-1_9_445" fill="white">
                  <path d="M60.3 13.4H6.7V6.7H60.3M60.3 46.9H6.7V26.8H60.3M60.3 0H6.7C2.9815 0 0 2.9815 0 6.7V46.9C0 48.677 0.70589 50.3811 1.96238 51.6376C3.21888 52.8941 4.92305 53.6 6.7 53.6H60.3C62.077 53.6 63.7811 52.8941 65.0376 51.6376C66.2941 50.3811 67 48.677 67 46.9V6.7C67 2.9815 63.985 0 60.3 0ZM16.75 60.3H23.45V67H16.75V60.3ZM30.15 60.3H36.85V67H30.15V60.3ZM43.55 60.3H50.25V67H43.55V60.3Z" />
                </mask>
                <path
                  d="M60.3 13.4H6.7V6.7H60.3M60.3 46.9H6.7V26.8H60.3M60.3 0H6.7C2.9815 0 0 2.9815 0 6.7V46.9C0 48.677 0.70589 50.3811 1.96238 51.6376C3.21888 52.8941 4.92305 53.6 6.7 53.6H60.3C62.077 53.6 63.7811 52.8941 65.0376 51.6376C66.2941 50.3811 67 48.677 67 46.9V6.7C67 2.9815 63.985 0 60.3 0ZM16.75 60.3H23.45V67H16.75V60.3ZM30.15 60.3H36.85V67H30.15V60.3ZM43.55 60.3H50.25V67H43.55V60.3Z"
                  fill="white"
                />
                <path
                  d="M6.7 13.4H4.7V15.4H6.7V13.4ZM6.7 6.7V4.7H4.7V6.7H6.7ZM6.7 46.9H4.7V48.9H6.7V46.9ZM6.7 26.8V24.8H4.7V26.8H6.7ZM0 46.9H-2H0ZM65.0376 51.6376L66.4518 53.0518L65.0376 51.6376ZM16.75 60.3V58.3H14.75V60.3H16.75ZM23.45 60.3H25.45V58.3H23.45V60.3ZM23.45 67V69H25.45V67H23.45ZM16.75 67H14.75V69H16.75V67ZM30.15 60.3V58.3H28.15V60.3H30.15ZM36.85 60.3H38.85V58.3H36.85V60.3ZM36.85 67V69H38.85V67H36.85ZM30.15 67H28.15V69H30.15V67ZM43.55 60.3V58.3H41.55V60.3H43.55ZM50.25 60.3H52.25V58.3H50.25V60.3ZM50.25 67V69H52.25V67H50.25ZM43.55 67H41.55V69H43.55V67ZM60.3 11.4H6.7V15.4H60.3V11.4ZM8.7 13.4V6.7H4.7V13.4H8.7ZM6.7 8.7H60.3V4.7H6.7V8.7ZM60.3 44.9H6.7V48.9H60.3V44.9ZM8.7 46.9V26.8H4.7V46.9H8.7ZM6.7 28.8H60.3V24.8H6.7V28.8ZM60.3 -2H6.7V2H60.3V-2ZM6.7 -2C1.87693 -2 -2 1.87693 -2 6.7H2C2 4.08607 4.08607 2 6.7 2V-2ZM-2 6.7V46.9H2V6.7H-2ZM-2 46.9C-2 49.2074 -1.0834 51.4203 0.548171 53.0518L3.3766 50.2234C2.49518 49.342 2 48.1465 2 46.9H-2ZM0.548171 53.0518C2.17974 54.6834 4.39261 55.6 6.7 55.6V51.6C5.45348 51.6 4.25802 51.1048 3.3766 50.2234L0.548171 53.0518ZM6.7 55.6H60.3V51.6H6.7V55.6ZM60.3 55.6C62.6074 55.6 64.8203 54.6834 66.4518 53.0518L63.6234 50.2234C62.742 51.1048 61.5465 51.6 60.3 51.6V55.6ZM66.4518 53.0518C68.0834 51.4203 69 49.2074 69 46.9H65C65 48.1465 64.5048 49.342 63.6234 50.2234L66.4518 53.0518ZM69 46.9V6.7H65V46.9H69ZM69 6.7C69 1.87042 65.083 -2 60.3 -2V2C62.8869 2 65 4.09258 65 6.7H69ZM16.75 62.3H23.45V58.3H16.75V62.3ZM21.45 60.3V67H25.45V60.3H21.45ZM23.45 65H16.75V69H23.45V65ZM18.75 67V60.3H14.75V67H18.75ZM30.15 62.3H36.85V58.3H30.15V62.3ZM34.85 60.3V67H38.85V60.3H34.85ZM36.85 65H30.15V69H36.85V65ZM32.15 67V60.3H28.15V67H32.15ZM43.55 62.3H50.25V58.3H43.55V62.3ZM48.25 60.3V67H52.25V60.3H48.25ZM50.25 65H43.55V69H50.25V65ZM45.55 67V60.3H41.55V67H45.55Z"
                  fill="#545454"
                  mask="url(#path-1-inside-1_9_445)"
                />
              </svg>
            </div>
            <div className={styles["card-heading"]}>Step 1</div>
            <div className={styles["card-text"]}>
              Pay after successful completion of task
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
