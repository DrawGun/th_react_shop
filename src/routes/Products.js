import ProductsContainer from '~/src/containers/ProductsContainer';

import { fetchProducts } from '~/src/actions/Products';
import { rootPath } from '~/src/helpers/routes/common';

const Products = {
  exact: true,
  strict: false,
  path: rootPath(),
  component: ProductsContainer,
  prepareData: (store, query, params) => {
    const { step } = store.getState().products;
    const { page } = query;

    return store.dispatch(fetchProducts({ page, step }));
  }
};

export default Products;
