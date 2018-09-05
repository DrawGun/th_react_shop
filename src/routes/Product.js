import ProductContainer from '~/src/containers/ProductContainer';

import { productsPath } from '~/src/helpers/routes/products';

const Products = {
  exact: true,
  strict: true,
  path: productsPath(),
  component: ProductContainer
};

export default Products;
