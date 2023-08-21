import React from 'react';
import styles from './ImageWithText.module.scss'
import Image from 'next/image';


interface ImageWithTextProps {
  imagePosition: string;
  imageSrc: { src: string; height: number; width: number; blurWidth: number; blurHeight: number };
  heading: string;
  text: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({
  imagePosition,
  imageSrc,
  heading,
  text,
}) => {
  return (
    <div className={styles['image-with-text']}>
      {imagePosition === 'left' && (
        <div className={styles["image-container"]}>
          <Image src={imageSrc} alt="Image" />
        </div>
      )}
      <div className={styles["content-container"]}>
        <p className={styles["heading"]}>{heading}</p>
        <p className={styles["text"]}>{text}</p>
      </div>
      {imagePosition === 'right' && (
        <div className={styles["image-container"]}>
          <Image src={imageSrc} alt="Image" />
        </div>
      )}
    </div>
  );
};

export default ImageWithText;
