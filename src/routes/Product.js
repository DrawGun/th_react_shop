import ProductContainer from '~/src/containers/ProductContainer';

import { fetchProduct } from '~/src/actions/Product';

import { productsPath } from '~/src/helpers/routes/products';

const Products = {
  exact: true,
  strict: true,
  path: productsPath(),
  component: ProductContainer,
  prepareData: (store, query, params) => {
    const { id } = params;

    return store.dispatch(fetchProduct(id));
  }
};

export default Products;
