import React, { useState } from "react";
import { Form, Container, Button, Card, Alert } from "react-bootstrap";
import moment from "moment";
import { useDispatch } from "react-redux";
import { createEvent } from "../../redux/actions/eventAction";
import { useHistory } from "react-router-dom";
export default function EventForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const date = moment(new Date()).format("YYYY-MM-DD");
  const [data, setData] = useState({
    name: "",
    organiser: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const { name, description, startDate, endDate, organiser } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const response = dispatch(createEvent(data));
    if (response) {
      history.push("/");
    }
  };
  return (
    <div>
      <Container>
        <Card className="mt-4 mb-4">
          <Card.Header className="d-flex justify-content-center">
            Create Event
          </Card.Header>
          <Container>
            <Form className="mt-4 mb-4" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Event Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Organiser</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Organiser"
                  name="organiser"
                  value={organiser}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Group
                  className=" mb-3 w-50"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={handleChange}
                    min={date}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={handleChange}
                    min={startDate}
                    required
                  />
                </Form.Group>
              </div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Card>
      </Container>
    </div>
  );
}
