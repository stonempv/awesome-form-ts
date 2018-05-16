export interface IFormFields  {
  firstname: string
  lastname: string
  username: string
  password: string
  confirmPassword: string
  preference: string
  newsletter: string
}

export const required = <T>(value:T) => 
  value ? undefined : 'Value is Required'

export const minLength = (value:string) => 
  value.length < 4 
    ? 'Value must be at least 4 chars'
    : undefined

export const maxLength = (value:string) => 
  value.length > 10 
    ? 'Value is too long'
    : undefined

export const matchesPassword = (value: string, allValues:IFormFields) =>
  value === allValues.password
    ? undefined
    : 'Passwords need to match'

export const asyncValidate = async(values: IFormFields) => {
  const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))
  await sleep(1000)
  if(['kent', 'andy', 'joel', 'john'].includes(values.username)) {
    return Promise.reject({
      username: 'Username already taken'
    })
  } else {
    return Promise.resolve()
  }
}