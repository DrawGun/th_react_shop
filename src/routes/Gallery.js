import GalleryContainer from '~/src/containers/GalleryContainer';

import { galleryPath } from '~/src/helpers/routes/common';

const Gallery = {
  exact: true,
  strict: true,
  path: galleryPath(),
  component: GalleryContainer
};

export default Gallery;
