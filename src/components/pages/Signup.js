import React from "react";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import InputText from "../InputText";

export default function Signup() {
  return (
    <div>
      <h1>Create an Account</h1>
      <div class='column'>
        <Illustration />
        <Form className={`&{Classes.signup} `}>
          <InputText placeholder='Enter Name' type='text' />

          <InputText placeholder='Enter Email' type='text' />

          <InputText placeholder='Enter password' type='password' />

          <InputText placeholder='Confirm password' type='password' />
          <CheckBox
            type='checkbox'
            text='I agree to the Terms &amp; Conditions'
          />
          <Button>
            <span>Submit now</span>
          </Button>
          <div className='info'>
            Already have an account? <a href='login.html'>Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
