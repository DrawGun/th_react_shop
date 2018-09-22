import GalleryContainer from '~/src/containers/GalleryContainer';

import { fetchImagesById } from '~/src/actions/Gallery';
import { productGalleryPath } from '~/src/helpers/routes/products';

const ProductGallery = {
  exact: true,
  strict: true,
  path: productGalleryPath(),
  component: GalleryContainer,
  prepareData: (store, query, params) => {
    const { id } = params;

    return store.dispatch(fetchImagesById(id));
  }
};

export default ProductGallery;
