import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    currentPageSelector,
    loadingTodosSelector,
    pagesCountSelector,
    todosSelector
} from '../../store/todos-reducer/todos-reducer-selectors';
import {LoadingEnum, TodoI} from "../../store/types";
import {todoReducerActions} from "../../store/todos-reducer/todos-reducer";
import {TodoItem} from "../../components/todo/todo-item";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Pagination from '@material-ui/lab/Pagination';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        bottom: "5rem",
        left: "auto",
        right: 20,
        margin: '0 auto',
    },
    })
);
export const AllTodosPage = () => {
    const classes=useStyles()
    const dispatch=useDispatch()
    const todosList=useSelector(todosSelector)
    const loading=useSelector(loadingTodosSelector)
    const currentPage=useSelector(currentPageSelector)
    const maxPagesTotalCount=useSelector(pagesCountSelector)
    useEffect(()=>{
        if(loading===LoadingEnum.NEVER){
            dispatch(todoReducerActions.fetchTodosAC(currentPage))
        }
    }, [currentPage, loading, dispatch])
    useEffect(()=>{
        dispatch(todoReducerActions.fetchTodosAC(currentPage))
    }, [dispatch, currentPage])
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [userId, setUserId] = useState(1)
    const todos=todosList.map((item: TodoI)=><TodoItem key={item.id} {...item}/>)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const handleChangeTitle=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    }
    const handleChangeCurrentPage=(event:any, value:number)=>{
        console.log(value)
        dispatch(todoReducerActions.changeCurrentPageAC(value))
    }
    //TODO select user
    const handleChangeUser=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setUserId(+e.target.value)
    }
    const handleAddNewTodo=()=>{
        dispatch(todoReducerActions.fetchAddTodoAC(title, userId))
        setUserId(1)
        setTitle('')
        setOpen(false)
    }
    if(loading===LoadingEnum.LOADING){
        //TODO сделать скелетон
        return(
            <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
    return (
        <>

        <List>

        {todos}
        </List>
            {currentPage ? <Pagination count={maxPagesTotalCount} page={currentPage} onChange={handleChangeCurrentPage}/> : null}
            {/*TODO разместить внизу и по центру*/}
            <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={handleOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавить задачу</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите новую задачу
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Задача"
                        type="text"

                        value={title}
                        onChange={handleChangeTitle}
                        fullWidth
                    />

                    <TextField
                        id="standard-select-currency"
                        select
                        label="Пользователь"
                        value={userId}
                        fullWidth
                        helperText="Выберите пользователя"
                        onChange={handleChangeUser}
                    >

                        <option value="1">Вы</option>
                        <option value="2">Кто-то</option>
                    </TextField>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отменить
                    </Button>
                    <Button onClick={handleAddNewTodo} color="primary">
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
            </>
    );
};

