import * as React from 'react'
import { SubmissionError } from 'redux-form'
import RegisterForm from './components/RegisterForm'

interface IFormFields  {
  firstname?: string
  lastname?: string
  username?: string
  password?: string
  confirmPassword?: string
}


class App extends React.Component {

  public submit = (values:IFormFields): void => {
    if(['kent', 'andy', 'joel', 'john'].includes(values.username as string)) {
      throw new SubmissionError({
        username: 'Username already taken'
      })
    } else {
      alert(JSON.stringify(values, null, 4)) 
    }
  }
  public render() {
    return (
      <RegisterForm 
        onSubmit={ this.submit } 
        initialValues={ this.getInitialValues() }
      />
    )
  }

  public getInitialValues() {
    return {
      newsletter: 'true',
      preference: 'spaces' 
    }
  }
}

export default App;

