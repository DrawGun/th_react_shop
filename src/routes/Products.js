import ProductsContainer from '../containers/ProductsContainer';

import { rootPath } from '../helpers/routes/common';

const Products = {
  exact: true,
  strict: true,
  path: rootPath,
  component: ProductsContainer
};

export default Products;
