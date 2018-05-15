import * as React from 'react'
import RegisterForm from './components/RegisterForm'
import { IFormFields } from './components/Validation'


class App extends React.Component {

  public submit = <T extends IFormFields>(values:T): void => {
    alert(JSON.stringify(values, null, 4)) 
  }

  public render() {
    return (
      <RegisterForm 
        onSubmit={ this.submit } 
        initialValues={ this.getInitialValues() }
      />
    )
  }

  

  public getInitialValues(){
    return {
      newsletter: 'true',
      preference: 'spaces' 
    }
  }
}

export default App;

