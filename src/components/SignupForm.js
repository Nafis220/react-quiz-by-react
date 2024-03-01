import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import CheckBox from "./CheckBox";
import { useAuth } from "./contexts/AuthContext";
import Form from "./Form";
import InputText from "./InputText";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();
  //signup function
  async function handleSubmit(e) {
    e.preventDefault();
    //do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(username, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to create an account");
    }
  }
  return (
    <div>
      <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
        <InputText
          placeholder='Enter Name'
          required
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputText
          placeholder='Enter Email'
          type='text'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputText
          placeholder='Enter password'
          required
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputText
          placeholder='Confirm password'
          type='password'
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CheckBox
          type='checkbox'
          text='I agree to the Terms &amp; Conditions'
          value={agree}
          required
          onChange={(e) => setAgree(e.target.value)}
        />
        <Button disabled={loading} type='submit'>
          <span>Submit now</span>
        </Button>
        {error && <p className='error'>{error}</p>}
        <div className='info'>
          Already have an account? <Link to='/login'>Login</Link> instead.
        </div>
      </Form>
    </div>
  );
}
