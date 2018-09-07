import GalleryContainer from '~/src/containers/GalleryContainer';

import { productGalleryPath } from '~/src/helpers/routes/products';

const ProductGallery = {
  exact: true,
  strict: true,
  path: productGalleryPath(),
  component: GalleryContainer
};

export default ProductGallery;
