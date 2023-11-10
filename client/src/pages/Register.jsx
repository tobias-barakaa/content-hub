import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FormInput } from "../components";
import { Form, redirect, useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch";
import formimage from "../assets/form-image.png"


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/register", data);
    return redirect("/login");

  } catch (error) {
    return error
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  








  return (
    <div className="form-image">
<img src={formimage} alt="formimage" className="imgg" /> 
    
    <div className="global">
      <div class="signup-container">
        <h2>Register to Ox-gang</h2>
        <Form method="post">
          <FormInput
            type="text"
            name="name"
            labelText="First Name"
            defaultValue="tobby baraka"
          />
          <FormInput
            type="text"
            name="lastName"
            labelText="Last Name"
            defaultValue="baraka karibu"
          />
          <FormInput
            type="email"
            name="email"
            labelText="Email"
            defaultValue="tobby@gmail.com"
          />
          <FormInput
            type="password"
            name="password"
            labelText="Password"
            defaultValue="tobby12343"
          />
          <button type="submit"
          disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Submit'}
            </button>
        </Form>

        <Link to="/login">Login</Link>
      </div>
    </div>
    </div>

  );
};

export default Register;
