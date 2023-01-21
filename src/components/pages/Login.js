import React from "react";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import InputText from "../InputText";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className='column'>
        <Illustration />
        <Form style={{ height: "330px" }}>
          <InputText placeholder='Enter Email' type='text' />
          <InputText placeholder='Enter password' type='text' />
          <Button>
            <span>Submit now</span>
          </Button>
          <div className='info'>
            Don't have an account? <a href='*'>Signup instead</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
