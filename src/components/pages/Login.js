import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = ({ setIsAuthenticate }) => {
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticate(true);
    history.push("/jobs");
  };
  return (
    <Container className="mt-5">
      {/* <Link to="/">Go to Home</Link> */}

      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
      </Container>
      <Button variant="outline-primary" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
