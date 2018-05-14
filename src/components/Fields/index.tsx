import * as React from 'react'
import { WrappedFieldProps }from 'redux-form';

interface IInputField {
  label: string
  type: string
}

export const InputField:React.SFC<IInputField & WrappedFieldProps> = props => (
  <div>
    <label>{props.label}</label>
    <input {...props.input} type={props.type} />
  </div>
)

interface ISelectField {
  label: string
}

export const SelectField:React.SFC<ISelectField & WrappedFieldProps> = props => (
  <div>
    <label>{props.label}</label>
    <select {...props.input}>
      <option value="tabs">Tabs</option>
      <option value="spaces">Spaces</option>
    </select>
  </div>
)