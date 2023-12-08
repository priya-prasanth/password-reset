import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login= () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true; 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/login", {email, password})
      .then(res => {
          console.log("login:" + res.data);
          if (res.data.Status === "Success") {
            if (res.data.role === "admin") {
              navigate('/dashboard')
            } else {
              navigate("/")
            }
          }
            }).catch(err => console.log(err))
  }

  return (
    <div className="form width-10">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <strong>Email</strong>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        
      </Form>
      <p>
        Already have an Account
        <br></br>
        <Link to="/forgot-password">Forgot Password</Link>
      </p>
      <Link to="/register">
        <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Sign up
        </button>
      </Link>
    </div>
  );
};

export default Login;
