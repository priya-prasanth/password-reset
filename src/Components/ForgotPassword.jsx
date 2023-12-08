import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/forgot-password", {email})
      .then(res => {
        if (res.data.Status === "Success") {
          navigate("/login");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form width-10">
      <h3>Forgot Password</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <strong>Email</strong>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
         

        <button type="submit" className="btn btn-success w-100 rounded-0">
          Send
        </button>
      </Form>
    </div>
  )
}

export default ForgotPassword;
