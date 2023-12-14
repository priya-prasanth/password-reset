import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const ResetPassword = () => {
  const [password, setPassword] = useState();
    const navigate = useNavigate();
    const { id, token } = useParams();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://password-reset-9pjf.onrender.com/reset-password/${id}/${token}`, { password } )
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form width-10">
      <h3>Reset Password</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <strong>New Password</strong>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <button type="submit" className="btn btn-success w-100 rounded-0">
          Update
        </button>
      </Form>
    </div>
  );
};

export default ResetPassword;
