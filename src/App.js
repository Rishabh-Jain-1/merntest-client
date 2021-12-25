import { useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import PrivateRoute from "./Components/Privateroute";
import { useEffect } from "react";
import { getUser } from "./redux/actions/loginActions";
import Header from "./Components/Header/Header";
import Logout from "./Components/auth/Logout";
import EventList from "./Components/Events/EventList";
import EventForm from "./Components/Events/EventForm";
import Alert from "./Components/Alert/Alert";

export const history = createBrowserHistory();
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Router>
      <Alert />
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={EventList}></PrivateRoute>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/logout" exact component={Logout}></Route>
        <Route path="/register" exact component={Register}></Route>
        <PrivateRoute exact path="/create" component={EventForm} />
      </Switch>
    </Router>
  );
}

export default App;
