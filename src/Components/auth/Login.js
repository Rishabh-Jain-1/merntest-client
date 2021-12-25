import React, { useEffect, useState } from "react";
import { Form, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/loginActions";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector((state) => state);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    auth.isAuth && history.push(props.location.state?.from.pathname || "/");
  }, [auth.isAuth]);

  const { email, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(data));
  };

  return (
    <div>
      <Container>
        <Card className="mt-4">
          <Card.Header>Login</Card.Header>
          <Container>
            <Form className="mt-4 mb-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-between container">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Link to={"/register"} variant="primary" type="submit">
                  Register
                </Link>
              </div>
            </Form>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
