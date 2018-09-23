import GalleryContainer from '~/src/containers/GalleryContainer';

import { fetchImages } from '~/src/actions/Gallery';
import { galleryPath } from '~/src/helpers/routes/common';

const Gallery = {
  exact: true,
  strict: true,
  path: galleryPath(),
  component: GalleryContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchImages());
  }
};

export default Gallery;
