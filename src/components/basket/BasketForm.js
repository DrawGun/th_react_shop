import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { translate } from 'react-i18next';
import { Button } from 'reactstrap';

import FieldGroup from '~/src/components/elements/FieldGroup';

class renderField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      input: { name, ...inputAttr }, label, type, meta: { touched, error, warning }
    } = this.props;

    let fieldState;
    if (error) {
      fieldState = 'error';
    }

    if (warning) {
      fieldState = 'warning';
    }

    return (
      <FieldGroup
        id={`formControlsFull${name}`}
        name={name}
        type={type}
        label={label}
        placeholder={`Enter ${label}`}
        validationState={fieldState}
        help={error || warning}
        {...inputAttr}
      />
    );
  }
}

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};


class BasketForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  render() {
    const { t, pristine, invalid } = this.props

    return (
      <div className='blog-page edit-post'>
        <h1>{t('Yours order')}</h1>

        <form onSubmit={ this.handleSubmit }>
          <Field
            label={t('Name')}
            component={renderField}
            type='text'
            name='name' />

          <Field
            label={t('Email')}
            component={renderField}
            type='text'
            name='email' />

          <Button type='submit' disabled={pristine || invalid}>
            {t('Submit')}
          </Button>
        </form>
      </div>
    );
  }
}

export default translate()(BasketForm);
