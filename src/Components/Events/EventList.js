import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { getEventList } from "../../redux/actions/eventAction";
export default function EventList() {
  const dispatch = useDispatch();
  const { event } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getEventList());
  }, []);
  const demo = () => {
    return "1";
  };
  return (
    <div>
      <Link to="/create" className="container">
        Create Event
      </Link>
      <Container className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SNo</th>
              <th>Name</th>
              <th>Organiser</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
            {event &&
              event.map((e, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.organiser}</td>
                  <td>{e.description}</td>
                  <td>{moment(e.startDate).format("MM/DD/YYYY")}</td>
                  <td>{moment(e.endDate).format("MM/DD/YYYY")}</td>
                </tr>
              ))}
          </thead>
        </Table>
        <h1>{demo}</h1>
      </Container>
    </div>
  );
}
