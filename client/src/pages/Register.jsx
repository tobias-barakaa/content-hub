import React from 'react'
import { Link } from 'react-router-dom';
import "./Register.css";
import { FormInput } from '../components';

const Register = () => {
  return (
    <div className='global'>


      <div class="signup-container">
        <h2>Sign Up</h2>
        <form>
          <FormInput type='text' name='firstName' labelText='First Name' defaultValue="tobby" />
           <FormInput type='text' name='lastName' labelText='Last Name' defaultValue='barak' />
          <FormInput type='email' name='email' labelText='Email' defaultValue='tobby@gmail.com' />
          <FormInput type='password' name='password' labelText='Password' defaultValue="tobby123" />
            <button type="submit">Sign Up</button>
        </form>

      <Link to='/login'>Login</Link>

    </div>














    </div>
  )
}

export default Register
