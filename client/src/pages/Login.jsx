import React from 'react'
import { Form, Link, Navigate, redirect, useNavigate, useNavigation } from 'react-router-dom'
import { FormInput } from '../components'
import customFetch from '../utils/customFetch';
import register from "../assets/register.png"


export const action = async({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  

  try {
    await customFetch.post('/login', data);
    alert('login successful');
    return redirect('/dashboard');
  } catch (error) {
    return error;
  }
}

const Login = () => {
const navigate = useNavigate();
const loginDemoUser = async () => {
  const data = {
    "email": "zippy@gmail.com",
    "password": "secret123",
  }
  try {
    await customFetch.post('/auth/login', data);
    alert('take a look at ');
    navigate('/dashboard')    
  } catch (error) {
    alert('error');
  }
}
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'Loading...';
  return (
    <div className="form-image">
    <img src={register} alt="formimage" className="imgg" />
    
    <div className="global">
      <div className="signup-container">
        <h2>Login to ox-gang</h2>
        <Form method='post'>
          <FormInput type='email' name='email' labelText='Email' defaultValue='tobby@gmail.com' />
          <FormInput type='password' name='password' labelText='Password' defaultValue='tobby123' />
         
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : 'Submit'}
          </button>
          <button onClick={loginDemoUser}>Explore The App</button>
        </Form>
        <br />

        <Link to='/register'>Register</Link>
      </div>
    </div>
  </div>

  )
}

export default Login

