import * as React from 'react'
import * as ReduxForm from 'redux-form';

interface IInputField {
  label: string
  type: string
}

export const InputField:React.SFC<IInputField & ReduxForm.WrappedFieldProps> = props => (
  <div>
    <label>{props.label}</label>
    <input {...props.input} type={props.type} />
  </div>
)

// export const SelectField:React.SFC<ISelectFieldProps> = props => (

// )