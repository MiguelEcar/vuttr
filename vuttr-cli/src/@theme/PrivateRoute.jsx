import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { storage } from '@http/storage';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        storage.get()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)