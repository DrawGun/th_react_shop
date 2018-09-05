import BasketContainer from '~/src/containers/BasketContainer';

import { basketPath } from '~/src/helpers/routes/common';

const Basket = {
  exact: true,
  strict: true,
  path: basketPath(),
  component: BasketContainer
};

export default Basket;
