import React, { useState, useEffect } from "react";
import {
  Form,
  Container,
  Button,
  Card,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login, register } from "../../redux/actions/loginActions";

export default function Register(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector((state) => state);
  const [data, setData] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
    gender: "",
  });

  useEffect(() => {
    auth.isAuth && history.push(props.location.state?.from.pathname || "/");
  }, [auth.isAuth]);

  const { email, password, fullname, username, gender } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(data));
  };
  return (
    <div>
      <Container>
        <Card className="mt-4">
          <Card.Header>Register</Card.Header>
          <Container>
            <Form className="mt-4 mb-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full name"
                  name="fullname"
                  value={fullname}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
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
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={username}
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gender : &nbsp;</Form.Label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  onChange={handleChange}
                  required
                />{" "}
                Male&nbsp;
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={handleChange}
                  required
                />{" "}
                Female
              </Form.Group>
              <div className="d-flex justify-content-between container">
                <Button variant="primary" type="submit">
                  Register
                </Button>
                <Link to="/login">Login</Link>
              </div>
            </Form>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
