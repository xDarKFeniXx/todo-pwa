import React from 'react';
import Backdrop from "@material-ui/core/Backdrop";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Theme} from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
);
export const ErrorPage = (props:any) => {
    const classes=useStyles()
    return (
        <Backdrop className={classes.backdrop} open>
            <div>{props.errorText}</div>
        </Backdrop>
    );
};

