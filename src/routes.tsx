import React from 'react';
import {Route, Switch} from "react-router-dom";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <div>main page</div>
            </Route>
            <Route path="/about">
                <div>about page</div>
            </Route>
            <Route path='/todos/:id'>
                <div>todos page</div>
            </Route>
            <Route path='/todos'>
                <div>all todos page</div>
            </Route>
            <Route path='/users/:id'>
                <div>user page</div>
            </Route>
            <Route path='/users'>
                <div>all user page</div>
            </Route>
            </Switch>
    );
};

