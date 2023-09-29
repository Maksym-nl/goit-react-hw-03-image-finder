export function ImageGalleryItem({ smallImage, tag, onClick }) {
  return (
    <li onClick={() => onClick(smallImage, tag)}>
      <img src="smallImage" alt="tag" />
    </li>
  );
}
