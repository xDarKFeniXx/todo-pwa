import React, {useEffect} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Theme} from "@material-ui/core";
import {useHistory, useLocation} from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import PeopleIcon from '@material-ui/icons/People';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import InfoIcon from '@material-ui/icons/Info';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function a11yProps(index: any) {
    return {
        id: `${index}`,
        value: index,
        'aria-controls': `tabpanel-${index}`
    }
}
//TODO исправить цвет paper при изменении темы
//TODO добавить стили для выделенного элемента

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        marginTop: theme.spacing(2)

    },
    wrapper:{
        flexDirection: "column",
        [theme.breakpoints.up('sm')]:{
            flexDirection: "row",
            justifyContent: "space-evenly"
        }

    }
}));

export const MenuList = () => {
    const classes = useStyles();
    const history=useHistory()
    const location=useLocation()
    const theme=useTheme()
    const matchesQuery=useMediaQuery(theme.breakpoints.down('sm'))
    const [value, setValue] = React.useState("/todos");
    useEffect(()=>{
        if(location.pathname!==value){
            setValue(location.pathname)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        history.push(newValue)
        setValue(newValue);
    };
    return (
        <Paper className={classes.root}>
        <Tabs
            orientation={matchesQuery? "horizontal": "vertical"}
            variant="fullWidth"
            centered
            value={value}
            onChange={handleChange}
            aria-label="tabs"

        >
            <Tab
                label="todos"
                {...a11yProps("/todos")}
                icon={<FormatListBulletedIcon/>}
                classes={!matchesQuery? {wrapper:classes.wrapper}:{}}
            />
            <Tab label="users" {...a11yProps("/users")}  icon={<PeopleIcon />}
                 classes={!matchesQuery? {wrapper:classes.wrapper}:{}}
            />
            <Tab label="About" {...a11yProps("/about")} icon={<InfoIcon/>}
                 classes={!matchesQuery? {wrapper:classes.wrapper}:{}}
            />
        </Tabs>
        </Paper>
    );
};

