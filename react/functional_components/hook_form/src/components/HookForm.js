import React, { useState } from "react";

// bootstrap
import Form from "react-bootstrap/Form";

const HookForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    if (e.target.value.length < 2) {
      setFirstNameError("First name must be at least 2 characters.");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastName = (e) => {
    if (e.target.value.length < 2) {
      setLastNameError("Last name must be at least 2 characters.");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    if (e.target.value.length < 2) {
      setEmailError("Email must be at least 2 characters.");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 2 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    if (e.target.value.length !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div>
      <Form className="col-sm-6 offset-sm-3 mt-2">
        <Form.Group
          className="mb-3 row align-items-center"
          controlId="firstName"
        >
          <Form.Label className="col-sm-3">First Name:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3 row align-items-center"
          controlId="firstName"
        >
          <Form.Label className="col-sm-3">Last Name:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </Form.Group>
        <Form.Group
          className="mb-3 row align-items-center"
          controlId="firstName"
        >
          <Form.Label className="col-sm-3">Email:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 row align-items-center" controlId="email">
          <Form.Label className="col-sm-3">Password:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 row align-items-center" controlId="email">
          <Form.Label className="col-sm-3">Confirm Password:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </Form.Group>
      </Form>

      <div className="col-sm-3 offset-sm-5 mt-2">
        <h1>Your form data</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default HookForm;
