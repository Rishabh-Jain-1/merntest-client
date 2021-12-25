import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ component: Component, authed, ...rest }) {
  const { auth } = useSelector((state) => state);
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth.loading && auth.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          ></Redirect>
        )
      }
    />
  );
}
export default PrivateRoute;
