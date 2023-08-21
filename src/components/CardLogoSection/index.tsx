import React from "react";
import Image from "next/image";
import AmericanExpress from "../../assets/images/345580_american express_amex_billing_credit card_payment_icon 3.svg";
import FinanceLogo from "../../assets/images/1156735_finance_logo_maestro_payment_icon 3.svg";
import MasteCardLogo from "../../assets/images/380809_card_master_mastercard_icon 3.svg";
import VisaCardLogo from "../../assets/images/294654_visa_icon 3.svg";
import styles from "./CardLogoSection.module.scss";

export default function CardLogoSection() {
  return (
    <div className={styles["column-container"]}>
      <div className={styles["row-container"]}>
        <Image
          className={styles["card-logo"]}
          src={AmericanExpress}
          alt="logo"
        />
        <Image className={styles["card-logo"]} src={FinanceLogo} alt="logo" />
        <Image className={styles["card-logo"]} src={MasteCardLogo} alt="logo" />
      </div>
      <div>
        <Image className={styles["card-logo"]} src={VisaCardLogo} alt="logo" />
      </div>
    </div>
  );
}
