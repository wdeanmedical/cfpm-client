import React from 'react'
import PropTypes from 'prop-types'
import FieldShape from '../../state/shapes/FieldShape'
import SelectInputStyled from './form_select_input_styles'
import { handleFieldChange } from '../../config/functions'

const FormSelectInput = props => {
  const { field, submitted, currentForm, value, errorMessage } = props
  return (
    <SelectInputStyled>
      <SelectInputStyled.itemLabel>{field.label}</SelectInputStyled.itemLabel>
      <SelectInputStyled.select
        {...props}
        disabled={submitted === true}
        options={field.options}
        value={value}
        onChange={e => handleFieldChange(field.name, e, currentForm)}
      >
        <SelectInputStyled.option value="">{field.placeholder}</SelectInputStyled.option>
        {field.options.map(option => (
          <SelectInputStyled.option key={option.id} value={option.value}>
            {option.label}
          </SelectInputStyled.option>
        ))}
      </SelectInputStyled.select>
      <SelectInputStyled.errorMsg>{errorMessage}</SelectInputStyled.errorMsg>
    </SelectInputStyled>
  )
}

FormSelectInput.propTypes = {
  handleFieldChange: PropTypes.func,
  submitted: PropTypes.bool,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  field: PropTypes.shape(FieldShape),
}

FormSelectInput.defaultProps = {
  handleFieldChange: undefined,
  submitted: false,
  value: '',
  errorMessage: '',
  field: {},
}

export default FormSelectInput
