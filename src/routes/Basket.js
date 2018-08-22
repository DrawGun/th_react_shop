import BasketContainer from '../containers/BasketContainer';

import { basketPath } from '../helpers/routes/common';

const Basket = {
  exact: true,
  strict: true,
  path: basketPath(),
  component: BasketContainer
};

export default Basket;
