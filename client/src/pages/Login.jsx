import React from 'react'
import { Link } from 'react-router-dom'
import { FormInput } from '../components'

const Login = () => {
  return (
          <div className='global'>


<div class="signup-container">
      <h1>Login</h1>
      <form>
        <FormInput type='email' name='email' labelText='Email' defaultValue='tobby@gmail.com' />
        <FormInput type='password' name='password' labelText='Password' defaultValue='tobby123' />
      </form>
      <button type="submit">Login</button><br />

      <Link to='/register'>Register</Link>
    </div>
    </div>
  )
}

export default Login

