import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface Image {
  urls: { regular: string };
  alt_description: string;
  description: string | null;
  user: { name: string };
  likes: number;
}

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <p>{image.description || "No description"}</p>
      <p>{image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
};

export default ImageModal;
