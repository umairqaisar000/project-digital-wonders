import React from 'react';
import styles from './ButtonWithIcon.module.scss'

interface ButtonWithIconProps {
    onClick: () => void;
    text: string;
    icon: React.ReactNode;
  }

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
    onClick,
    text,
    icon,
  }) => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      <span className={styles["button-text"]}>{text}</span>
      <span className={styles["button-icon"]}>{icon}</span>
    </button>
  );
};

export default ButtonWithIcon;