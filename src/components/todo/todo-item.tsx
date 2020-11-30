import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Checkbox from '@material-ui/core/Checkbox';
import {TodoI} from "../../store/types";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {ListItem, ListItemIcon} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {useDispatch} from "react-redux";
import {toggleTodoActionCreator} from "../../store/todos-reducer/todos-reducer";

const useStyles = makeStyles(theme=>({
    root: {
        marginBottom: theme.spacing(2),
        display: "flex",
        flexDirection : "row",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor :theme.palette.background.paper
    }

}));
export const TodoItem = (item:TodoI) => {
    const history=useHistory()
    const dispatch=useDispatch()
    const classes=useStyles()
    const handleClickItem=()=>{
        history.push(`/todos/${item.id}`)
    }
    const handleClickAvatar=()=>{
        history.push(`/users/${item.userId}`)
    }
    const handleToggle=()=>{
        dispatch(toggleTodoActionCreator(item.id))
    }
    return (
        <ListItem key={item.id} className={classes.root} button onClick={handleToggle} onDoubleClick={handleClickItem}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={item.completed}
                />
            </ListItemIcon>
            <ListItemText  primary={item.title} />
            <ListItemSecondaryAction onClick={handleClickAvatar}>
            <ListItemAvatar >
                <Avatar

                    alt={`Avatar n°${item.userId}`}
                    src={`https://picsum.photos/200/300`}
                />
            </ListItemAvatar>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

