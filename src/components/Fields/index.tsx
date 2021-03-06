import * as cx  from 'classnames'
import * as React from 'react'
// import ReactJson from 'react-json-view'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'


interface IInputField {
  label: string
  type: string
  autoFocus?: boolean
}

const getValidityClassName = (meta:WrappedFieldMetaProps):string | undefined => {
  if(meta.asyncValidating) {
    return 'async-validating'
  }
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
  const { label, input, type, meta, autoFocus=false } = props
  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox'},
        { dirty: meta.dirty},
        getValidityClassName(meta)
      )}
    >
      <input {...input} type={type} autoFocus={autoFocus}/>
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

export const discount = ({fields}:any) => (
  <div className="custom-field-array-container">
    {fields.map((code:string, index:number) => (
      <div key={index} className="field-array-item">
        <Field 
          name={code}
          type="text"
          component={InputField}
          label={`Discount Code #${index + 1}`}
          autoFocus={true}
        />
        
        <button type="button" 
          // tslint:disable-next-line jsx-no-lambda
          onClick={() => fields.remove(index)}>
          &times;
        </button>
      </div>  
    ))}
    <button type="button"
      // tslint:disable-next-line jsx-no-lambda
      onClick={()=> fields.push()}>
      Add {!fields.length ? 'Discount Codes' : 'Another'}
    </button>
    
  </div>
)