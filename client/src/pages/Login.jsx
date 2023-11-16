import React from 'react'
import { Form, Link, Navigate, redirect, useNavigate, useNavigation } from 'react-router-dom'
import { FormInput } from '../components'
import customFetch from '../utils/customFetch';
import formimage from "../assets/form-image.png"


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
    email: 'tobbyy@gmail.com',
    password: '12345678'
  }
  try {
    await customFetch.post('/login', data);
    alert('take a test');
    navigate('/dashboard')    
  } catch (error) {
    alert('error');
  }
}


  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'Loading...';
  return (
    <div className="form-image">
    <img src={formimage} alt="formimage" className="imgg" /> 
        
        <div className="global">
          <div class="signup-container">
      <h2>Login to ox-gang</h2>
      <Form method='post'>
        <FormInput type='email' name='email' labelText='Email' defaultValue='tobby@gmail.com' />
        <FormInput type='password' name='password' labelText='Password' defaultValue='tobby123' />
     
        <button type="submit" disabled={isSubmitting}
        onClick={loginDemoUser}
        >
        {isSubmitting ? 'Loading...' : 'Submit'}
        
        </button>
      </Form>
    <br />

      <Link to='/register'>Register</Link>
    </div>
    </div>
    </div>

  )
}

export default Login

