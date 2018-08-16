import ProductContainer from '../containers/ProductContainer';

import { productsPath } from '../helpers/routes/products';

const Products = {
  exact: true,
  strict: true,
  path: productsPath(),
  component: ProductContainer
};

export default Products;
