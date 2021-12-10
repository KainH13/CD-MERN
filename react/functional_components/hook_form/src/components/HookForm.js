import React, { useState } from "react";

// bootstrap
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

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
  
  // important to remember -- setting state variables is an async process, so logging them isn't too helpful as they could lag behind the value of e.target.value
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    console.log("firstName = ", e.target.value)
    if (e.target.value.length > 0 && e.target.value.length < 2) {
      setFirstNameError("First name must be at least 2 characters.");
    } else {
      setFirstNameError("");
    }
  };
  
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 2) {
      setLastNameError("Last name must be at least 2 characters.");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 2) {
      setEmailError("Email must be at least 2 characters.");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };
  
  return (
    <div>
      <Form className="col-sm-6 offset-sm-3 mt-2">

        {
          firstNameError ?
          <Alert variant="danger">{firstNameError}</Alert> :
          ''          
        }
        <Form.Group
          className="mb-3 row align-items-center"
          controlId="firstName"
          >
          <Form.Label className="col-sm-3">First Name:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="text"
              onChange={ handleFirstName }
              />
          </div>
        </Form.Group>

        {
          lastNameError ?
          <Alert variant="danger">{lastNameError}</Alert> :
          ''          
        }
        <Form.Group
          className="mb-3 row align-items-center"
          controlId="lastName"
        >
          <Form.Label className="col-sm-3">Last Name:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="text"
              onChange={handleLastName}
            />
          </div>
        </Form.Group>

        {
          emailError ?
          <Alert variant="danger">{emailError}</Alert> :
          ''          
        }
        <Form.Group
          className="mb-3 row align-items-center"
          controlId="email"
        >
          <Form.Label className="col-sm-3">Email:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="email"
              onChange={handleEmail}
            />
          </div>
        </Form.Group>

        {
          passwordError ?
          <Alert variant="danger">{passwordError}</Alert> :
          ''          
        }
        <Form.Group className="mb-3 row align-items-center" controlId="password">
          <Form.Label className="col-sm-3">Password:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="password"
              onChange={handlePassword}
            />
          </div>
        </Form.Group>

        {
          confirmPasswordError ?
          <Alert variant="danger">{confirmPasswordError}</Alert> :
          ''          
        }
        <Form.Group className="mb-3 row align-items-center" controlId="confirmPassword">
          <Form.Label className="col-sm-3">Confirm Password:</Form.Label>
          <div className="col-sm-9">
            <Form.Control
              type="password"
              onChange={handleConfirmPassword}
            />
          </div>
        </Form.Group>

      </Form>

      {/* <div className="col-sm-3 offset-sm-5 mt-2">
        <h1>Your form data</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div> */}
    </div>
  );
};

export default HookForm;
