import * as React from 'react'
import { SubmitHandler } from 'redux-form'
import RegisterForm from './components/RegisterForm'


class App extends React.Component {

  public submit = (event: React.FormEvent<SubmitHandler>) => {
    alert(JSON.stringify(event, null, 4))
  }
  public render() {
    return (
      <RegisterForm onSubmit={ this.submit } initialValues={ this.getInitialValues() }/>
    )
  }

  public getInitialValues() {
    return {
      newsletter: true,
      preference: 'spaces' 
    }
  }
}

export default App;

