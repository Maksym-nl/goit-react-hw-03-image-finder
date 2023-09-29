import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export function ImageGallery(items) {
  return (
    <ul class="gallery">
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          smallImage={item.webformatURL}
          largeImage={item.largeImageURL}
          tag={item.tag}
        />
      ))}
    </ul>
  );
}
{
}
