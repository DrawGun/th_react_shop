import React from 'react';

import { FormGroup, Label, Input, FormText } from 'reactstrap';

const FieldGroup = ({ id, label, help, validationState, ...props }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input {...props} />
    {help && <FormText color="muted">{help}</FormText>}
  </FormGroup>
)

export default FieldGroup;
