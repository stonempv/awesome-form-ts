import * as cx  from 'classnames'
import * as React from 'react'
// import ReactJson from 'react-json-view'
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'


interface IInputField {
  label: string
  type: string
}

const getValidityClassName = (meta:WrappedFieldMetaProps) => {
  if(meta.active) {
    return undefined
  }
  if (meta.touched && meta.invalid){
    return 'invalid'
  }
  if (meta.touched && meta.valid){
    return 'valid'
  } else {
    return undefined
  }
}

export const InputField:React.SFC<IInputField & WrappedFieldProps> = props => {
  const { label, input, type, meta } = props
  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox'},
        { dirty: meta.dirty},
        getValidityClassName(meta)
      )}
    >
      <input {...input} type={type} />
      <label>{label}</label>
      {(meta.error && meta.touched) && 
      !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
    </div>
  )
}

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