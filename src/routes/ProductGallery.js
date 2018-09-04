import GalleryContainer from '../containers/GalleryContainer';

import { productGalleryPath } from '../helpers/routes/products';

const ProductGallery = {
  exact: true,
  strict: true,
  path: productGalleryPath(),
  component: GalleryContainer
};

export default ProductGallery;
