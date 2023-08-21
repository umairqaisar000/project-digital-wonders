import { useRouter } from "next/router";
import React from "react";
import Navbar from "src/components/Navbar2";
import styles from "./about.module.scss";
import AboutHero from "src/assets/images/aboutHero.svg";
import Image from "next/image";
import Footer from "src/components/Footer";
import ButtonWithIcon from "src/components/ButtonWithIcon";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import OurStory from "src/assets/images/ourStory.svg";
import OurMission from "src/assets/images/ourMission.svg";
import TeamMemberCard from "src/components/TeamMemberCard";
import ProfilePicture from "src/assets/images/profile-pic.svg";

export default function about() {
  const router = useRouter();
  const handleButtonClick = () => {
    // Handle button click logic
    console.log("Button clicked");
  };

  const points = [
    {
      heading: "16 years of intense research",
      text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the dummy text ever since the",
    },
    {
      heading: "Audience segmentation",
      text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the dummy text ever since the",
    },
    {
      heading: "Contact Monitoring",
      text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the dummy text ever since the",
    },
  ];

  const teamMembers = [
    {
      name: "John Doe",
      profilePic: ProfilePicture,
      experience: 6,
      subject: "Chemistry",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
      },
    },
    {
      name: "Jane Smith",
      profilePic: ProfilePicture,
      experience: 8,
      subject: "Physics",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
      },
    },
    {
      name: "Jane Smith",
      profilePic: ProfilePicture,
      experience: 8,
      subject: "Physics",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
      },
    },
  ];

  return (
    <>
      <Navbar pathname={router.pathname} />
      <div className={styles["hero-section"]}>
        <p>
          Our Team is here <br /> to help you!{" "}
        </p>
        <ButtonWithIcon
          onClick={handleButtonClick}
          text="Add your first task"
          icon={<SendOutlinedIcon />}
        />
        <Image
          className={styles["hero-image"]}
          src={AboutHero}
          alt="hero-section-image"
        />
      </div>
      <div className={styles["our-story"]}>
        <div className={styles["our-story-left"]}>
          <p className={styles["heading"]}>Our Story</p>
          <p className={styles["text1"]}>
            Simply dummy text of the printing and typesetting industry.
            industry's standard
          </p>
          <Image
            className={styles["our-story-image"]}
            src={OurStory}
            alt="Our story icon"
          />
          <p className={styles["text2"]}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            dummy text ever since the{" "}
          </p>
        </div>
        <div className={styles["our-story-right"]}>
          {points.map((point, index) => (
            <div className="point" key={index}>
              <div className={styles["heading"]}>
                <p className={styles["number"]}>{`${index + 1 < 10 ? "0" : ""}${
                  index + 1
                }.`}</p>
                <p className={styles["text"]}>{point.heading}</p>
              </div>
              <p className={styles["content"]}>{point.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles["our-mission"]}>
        <div>
          <p className={styles["heading"]}>Our Mission</p>
          <p className={styles["text"]}>
            Simply dummy text of the printing and Simply dummy text of the
            printing and typesetting industry. typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the dummy
            text ever since the{" "}
          </p>
        </div>
        <Image
          className={styles["our-mission-image"]}
          src={OurMission}
          alt="our mission image"
        />
      </div>
      <div className={styles["team"]}>
        <p className={styles["heading"]}>
          Our Leading, Talented and Strong{" "}
          <span className={styles["team"]}>Team</span>
        </p>
        <div className={styles["card"]}>
          {teamMembers.map((teamMember, index) => (
            <TeamMemberCard
              key={index}
              name={teamMember.name}
              profilePic={teamMember.profilePic}
              experience={teamMember.experience}
              subject={teamMember.subject}
              socialLinks={teamMember.socialLinks}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
