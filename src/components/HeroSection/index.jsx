import { useState } from "react";
import Image from "next/image";
import HeroSectionImage from "src/assets/images/hero-section-image.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./HeroSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={styles["hero-section-container"]}>
      <div>
        <h1>Need assistance with your assignments?</h1>
        <p className="hero-section-paragraph">
          Struggling to manage your assignments? We can step in and ensure your
          success.
        </p>
        <div className={styles["subject-container"]}>
          <div className={styles["subject-heading"]}>Your Subject</div>
          <div className={styles["subject-bottom-container"]}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 358 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Select your subject name"
                displayEmpty
              >
                <MenuItem disabled value="">
                  <em>Select your subject name</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <div className={styles["subject-continue-button"]}>
              Continue <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
        </div>
      </div>

      <Image
        className={styles["organization-logo"]}
        src={HeroSectionImage}
        alt="logo"
      />
    </div>
  );
};

export default HeroSection;
