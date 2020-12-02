import React from 'react';
import {Route, Switch} from "react-router-dom";
import { MainPage } from './pages/main-page/main-page';
import {AllTodosPage} from "./pages/todos-page/all-todos-page";
import {TodoPage} from "./pages/todos-page/todo-page";
import {AboutPage} from "./pages/about-page/about-page";
import {UserPage} from "./pages/users-page/user-page";
import {AllUsersPage} from "./pages/users-page/all-users-page";
import {useSelector} from "react-redux";
import {appErrorSelector} from "./store/app-reducer/app-reducer-selectors";
import {ErrorPage} from "./pages/error-page/error-page";

export const Routes = () => {
    const error=useSelector(appErrorSelector)
    if(error.showError){
        return(
            <ErrorPage errorText={error.textError}/>
        )
    }

    return (
        <Switch>
            <Route exact path='/'>
                <MainPage/>
            </Route>
            <Route path="/about">
               <AboutPage/>
            </Route>
            <Route path='/todos/:id'>
                <TodoPage/>
            </Route>
            <Route path='/todos'>
                <AllTodosPage/>
            </Route>
            <Route path='/users/:id'>
                <UserPage/>
            </Route>
            <Route path='/users'>
                <AllUsersPage/>
            </Route>
            </Switch>
    );
};

