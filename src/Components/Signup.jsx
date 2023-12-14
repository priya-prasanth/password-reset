import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("https://password-reset-9pjf.onrender.com/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  }


  return (
    <div className="form width-10">
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>
            <strong>Name</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <strong>Email address</strong>
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
          Register
        </button>
      </Form>
      <p>You are agree to our terms and policies</p>
      <Link to="/login">
        <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Signup;
