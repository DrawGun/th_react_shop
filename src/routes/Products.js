import ProductsContainer from '../containers/ProductsContainer';

import { rootPath } from '../helpers/routes/common';

const Products = {
  exact: true,
  strict: false,
  path: rootPath(),
  path: rootPath,
  component: ProductsContainer
};

export default Products;
