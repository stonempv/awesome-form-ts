import * as React from 'react'
import { Field, Form, InjectedFormProps, reduxForm} from 'redux-form'
import { InputField, SelectField } from './Fields'


interface IRegisterFormProps  {
  handleSubmit: () => void
}

class RegisterForm extends React.Component<IRegisterFormProps & InjectedFormProps<{}, IRegisterFormProps>> {
  
  public render() {
    const { handleSubmit } = this.props
    return(
      <Form onSubmit = { handleSubmit } >
        <Field name="name" component={InputField} type="text" label="Name"  />
        <Field name="newsletter" component={SelectField} label="Preferred Formating" />
        <Field name="preference" component={InputField} type="checkbox" label="Sign up for Newsletter" />
        <button type="submit">Submit</button>
      </Form>
    ) 
  }
}

const ReduxRegisterForm = reduxForm({
  form: 'register'
})(RegisterForm)

export default ReduxRegisterForm