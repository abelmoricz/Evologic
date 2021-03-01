import React from "react";
import { Redirect, BrowserRouter, Route, withRouter, useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const ProtectedRoute = ({ children, ...rest }) => {


  return (



    <Route {...rest} render={({ location }) =>

        localStorage.getItem("token") ? (
          children
        ) : (
          createBrowserHistory().push(rest["path"]),
          <Redirect to={{
              pathname: "/wall",
              state: { from: location }
            }}
          />

        )

      }
    />
  );


};
export default ProtectedRoute;
