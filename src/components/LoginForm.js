import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "./contexts/AuthContext";
import Form from "./Form";
import InputText from "./InputText";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to login");
    }
  }
  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <InputText
        placeholder='Enter Email'
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputText
        placeholder='Enter password'
        type='password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={loading} type='submit'>
        <span>Submit now</span>
      </Button>
      {error && <p className='error'>{error}</p>}
      <div className='info'>
        Don't have an account? <Link to='/signup'>Signup instead</Link> instead.
      </div>
    </Form>
  );
}
