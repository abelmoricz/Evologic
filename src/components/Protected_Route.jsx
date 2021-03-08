import React from "react";
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollToTop from './scrollToTop';


const ProtectedRoute = ({ children, ...rest }) => {


  return (

<div>
    <ScrollToTop />
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

    </div>
  );


};
export default ProtectedRoute;
