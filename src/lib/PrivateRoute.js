import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { context } from '../App';



const PrivateRoute = ({ children, ...rest }) => {
    const [loggedUser, setLoggedUser] = useContext(context);

    return (
        <Route
            {...rest}
            render={({ location }) =>
             loggedUser.email ? (
                    children

                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;