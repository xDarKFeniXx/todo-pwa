import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadingTodosSelector, todosSelector} from '../../store/todos-reducer/todos-reducer-selectors';
import {LoadingEnum, TodoI} from "../../store/types";
import {fetchTodosActionCreator} from "../../store/todos-reducer/todos-reducer";
import {TodoItem} from "../../components/todo/todo-item";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
const useStyles = makeStyles((theme: Theme) =>({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
);
export const AllTodosPage = () => {
    const classes=useStyles()
    const dispatch=useDispatch()
    const todosList=useSelector(todosSelector)
    const loading=useSelector(loadingTodosSelector)
    useEffect(()=>{
        if(loading===LoadingEnum.NEVER){
            dispatch(fetchTodosActionCreator())
        }
    }, [loading, dispatch])

    const todos=todosList.map((item: TodoI)=><TodoItem key={item.id} {...item}/>)
    if(loading===LoadingEnum.LOADING){
        //TODO сделать скелетон
        //TODO сдлеать пагинацию
        return(
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
    return (
        <List>
        {todos}
        </List>
    );
};

