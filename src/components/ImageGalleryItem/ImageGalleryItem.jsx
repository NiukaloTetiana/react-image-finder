import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ alt, small, full, openModal }) => {
  return (
    <li onClick={() => openModal(full)} className={s.galleryItem}>
      <img className={s.img} src={small} alt={alt} />
    </li>
  );
};
