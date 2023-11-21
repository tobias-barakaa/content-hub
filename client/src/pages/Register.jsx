import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { FormInput } from "../components";
import { Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import formimage from "../assets/form-image.png"
import SubmitButton from "../components/SubmitButton";
import register from "../assets/register.png";


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


return (
  <div className="form-image container">
  <img src={register} alt="formimage" />

  <div className="signup-container">
    <Form method="post">
      <div className="input-group">
        <FormInput
          type="text"
          name="name"
          labelText="First Name"
        />
        <FormInput
          type="text"
          name="lastName"
          labelText="Last Name"
          className="right-form"
        />
      </div>

      <FormInput
        type="email"
        name="email"
        labelText="Email"
      />

      <FormInput
        type="password"
        name="password"
        labelText="Password"
      />

      <SubmitButton />
    </Form>
    <Link to='/login'>Login</Link>
  </div>
</div>

  );
};

export default Register;
