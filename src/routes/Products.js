import ProductsContainer from '../containers/ProductsContainer';

import { rootPath } from '../helpers/routes/common';

const Products = {
  exact: true,
  path: rootPath,
  strict: true,
  component: ProductsContainer
};

export default Products;
