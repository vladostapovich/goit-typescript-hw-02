import React from "react";
import styles from "./ImageCard.module.css";

interface Image {
  id: string;
  alt_description: string;
  urls: { small: string; regular: string };
  description: string | null;
  user: { name: string };
  likes: number;
}

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={styles.ImageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.ImageCardImage}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

export default ImageCard;
