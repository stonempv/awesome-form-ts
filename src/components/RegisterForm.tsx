import * as React from 'react'
import { Field, InjectedFormProps, reduxForm} from 'redux-form'
import { InputField } from './Fields'


interface IRegisterFormProps  {
  handleSubmit: () => void
}

class RegisterForm extends React.Component<IRegisterFormProps & InjectedFormProps<{}, IRegisterFormProps>> {
  
  public render() {
    const { handleSubmit } = this.props
    return(
      <form onSubmit = { handleSubmit }>
        <Field name='name' component={InputField} type="text" label="Name"  />
        <div>
          <label>Preferred Format</label>
          <Field name="preference" component="select" >
            <option />
            <option value="tabs">Tabs</option>
            <option value="spaces">Spaces</option>
          </Field>
        </div>
        <div>
          <label>Newsletter?</label>
          <Field name="newsletter" component="input" type="checkbox" />
        </div>
        <button type="submit">Submit</button>
      </form>
    ) 
  }
}

const ReduxRegisterForm = reduxForm({
  form: 'register'
})(RegisterForm)

export default ReduxRegisterForm