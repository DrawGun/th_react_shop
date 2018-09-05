import ProductsContainer from '~/src/containers/ProductsContainer';

import { rootPath } from '~/src/helpers/routes/common';

const Products = {
  exact: true,
  strict: false,
  path: rootPath(),
  component: ProductsContainer
};

export default Products;
