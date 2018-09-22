import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { createOrder, clearBasket } from '~/src/actions/Basket';

import BasketForm from '~/src/components/basket/BasketForm';

const stateToProps = (state) => ({
  entries: state.basket.entries
});

const validate = (values) => {
  const errors = {};

  if (!values.name || !values.name.length)
    errors.name = 'Имя должно присутствовать';
  
  if (!values.email || !values.email.length)
    errors.email = 'Имя должно присутствовать';

  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (values.name && values.name.length < 3)
    warnings.name = 'Слишком короткое имя';

  return warnings;
};

export default connect(stateToProps)(
  reduxForm({
    form: 'basketForm',
    validate,
    warn,
    enableReinitialize: true,
    onSubmit: (values, dispatch, props) => {
      const { products } = props;

      return dispatch(createOrder({ values, products })).then((response) => {
        dispatch(clearBasket())
      })
    }
  })(BasketForm)
);