import * as React from 'react'
import { Field, InjectedFormProps, reduxForm} from 'redux-form'
import { InputField, SelectField } from './Fields'
import './RegisterForm.css'
import { 
  required,
  maxLength,
  minLength
} from './Validation'


interface IRegisterFormProps  {
  handleSubmit: () => void
}

class RegisterForm extends React.Component<IRegisterFormProps & InjectedFormProps<{}, IRegisterFormProps>> {
  
  public render() {
    const { handleSubmit } = this.props
    return(
      <form onSubmit = { handleSubmit } >
        <Field 
          name="firstname" 
          component={InputField} 
          type="text" 
          label="First Name" 
          validate={[required]}
        />

        <Field 
          name="lastname" 
          component={InputField} 
          type="text" 
          label="Last Name" 
          validate={[required]}
        />

        <Field 
          name="username" 
          component={InputField} 
          type="text" 
          label="User Name" 
          validate={[required, minLength, maxLength]}
        />

        <Field 
          name="newsletter" 
          component={SelectField} 
          label="Preferred Formating" 
        />

        <Field 
          name="preference" 
          component={InputField} 
          type="checkbox" 
          label="Sign up for Newsletter" 
        />

        <Field 
          name="password" 
          component={InputField} 
          type="password" 
          label="Password" 
        />

        <button type="submit">Submit</button>
      </form>
    ) 
  }
}

const ReduxRegisterForm = reduxForm({
  form: 'register'
})(RegisterForm)

export default ReduxRegisterForm