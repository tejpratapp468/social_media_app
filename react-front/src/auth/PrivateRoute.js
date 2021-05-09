import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

//this function is taking react Component and and rest of argument using ...rest as argument
const PrivateRoute = ({ component: Component, ...rest }) => (
    // props means components passed down to this pricate route component
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                //Render this component with all the props
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;