const thumbnailsTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelectorAll('.pictures');

const createThumbnail = ({comments, description, likes, url}) => {
  const thumbnail = thumbnailsTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').src = comments;
  thumbnail.querySelector('.picture__likes').src = likes;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export {renderThumbnails};
