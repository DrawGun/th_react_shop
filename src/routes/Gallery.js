import GalleryContainer from '../containers/GalleryContainer';

import { galleryPath } from '../helpers/routes/common';

const Gallery = {
  exact: true,
  strict: true,
  path: galleryPath(),
  component: GalleryContainer
};

export default Gallery;
