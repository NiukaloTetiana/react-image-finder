import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={s.gallery}>
      {photos.map(({ id, urls, alt_description }) => (
        <ImageGalleryItem
          key={id}
          small={urls.small}
          alt={alt_description}
          openModal={openModal}
          full={urls.full}
        />
      ))}
    </ul>
  );
};
