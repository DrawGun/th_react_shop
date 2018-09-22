import { connect } from 'react-redux';

import history from '~/src/helpers/routes/history';

import Pagination from '~/src/components/elements/Pagination';

const stateToProps = (state) => ({
  items: state.products.entries,
  maxProducts: state.products.maxProducts,
  step: state.products.step,
  page: state.products.page
});

const actionsToProps = (dispatch) => ({
  setStep: (page) => history.push({
    pathname: "/",
    search: `?page=${page}`,
    state: {}
  })
});

export default connect(stateToProps, actionsToProps)(Pagination);
