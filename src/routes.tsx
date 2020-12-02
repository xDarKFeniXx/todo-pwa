import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import {MainPage} from './pages/main-page/main-page';
import {AllTodosPage} from "./pages/todos-page/all-todos-page";
import {TodoPage} from "./pages/todos-page/todo-page";
import {AboutPage} from "./pages/about-page/about-page";
import {UserPage} from "./pages/users-page/user-page";
import {AllUsersPage} from "./pages/users-page/all-users-page";
import {useDispatch, useSelector} from "react-redux";
import {appErrorSelector, initializationSelector} from "./store/app-reducer/app-reducer-selectors";
import {ErrorPage} from "./pages/error-page/error-page";
import {LoadingEnum} from "./store/types";
import {FETCH_USERS} from "./store/users-reducer/users-reducer";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },

    })
);
export const Routes = () => {
    const classes=useStyles()
    const error=useSelector(appErrorSelector)
    const dispatch=useDispatch()
    const loading=useSelector(initializationSelector)
    useEffect(()=>{
        if(loading===LoadingEnum.NEVER){
            dispatch({type:FETCH_USERS})
        }
    }, [loading, dispatch])
    if(error.showError){
        return(
            <ErrorPage errorText={error.textError}/>
        )
    }
    if(loading===LoadingEnum.LOADING){
        return(
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop>
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

