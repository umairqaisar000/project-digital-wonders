import { useRouter } from "next/router";
import Navbar from "src/components/Navbar2";
import Footer from "src/components/Footer";
import styles from "./howItWorks.module.scss";
import ImageWithText from "src/components/ImageWithText";
import AddTask from "src/assets/images/addTask.svg";
import AddCash from "src/assets/images/add-cash.svg";
import Payment from "src/assets/images/pay.svg";

const Content = [
  {
    imagePosition: "right",
    imageSrc: AddTask,
    heading: "Add and schedule your tasks",
    text: "Select a service and add your tasks, attach files, setdeadlines, estimate the budget and manage all your assignments in one place. Wait for our team to respond. It usually takes 30 minutes for our team to review your task and get back to you after task submission.",
  },
  {
    imagePosition: "left",
    imageSrc: AddCash,
    heading: "Add cash to our wallet",
    text: "After discussing the budget with our team member you will need to add certain amount of cash to our wallet.",
  },
  {
    imagePosition: "right",
    imageSrc: Payment,
    heading: "Pay After successful completion",
    text: "After successful delivery of task the amount will be automatically deducted from the wallet.",
  },
];

export default function howItWorks() {
  const router = useRouter();

  return (
    <>
      <Navbar pathname={router.pathname} />
      <div className={styles["container"]}>
        <p className={styles["content"]}>How to Get Started with</p>
        <p className={styles["heading"]}>Acadime</p>

        <div className={styles["imageWithText"]}>
          {Content.map((content, index) => (
            <div className={styles["card"]} key={index}>
              <ImageWithText
                imagePosition={content.imagePosition}
                imageSrc={content.imageSrc}
                heading={content.heading}
                text={content.text}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
