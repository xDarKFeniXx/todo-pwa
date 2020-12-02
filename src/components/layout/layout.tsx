import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {ThemeProvider} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import theme from '../../theme';
import {Routes} from '../../routes';
import {Copyright} from "./copyright";
import {Typography} from "@material-ui/core";
import {MenuList} from './menu-list';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        height: "100vh",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "20% 1fr",
        gridTemplateAreas: " \"header header\" \"menu content\" \"footer footer\"",
        [theme.breakpoints.down('sm')]: {
            gridTemplateAreas: " \"header header\" \"content content\" \"menu menu\"",
        }
    },
    header: {
        gridArea: "header",
    },
    menu: {
        gridArea: "menu",
        height: "100%",
    },
    footer: {
        gridArea: "footer",
        top: 'auto',
        bottom: 0,
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    content: {
        gridArea: "content",
        padding: theme.spacing(2),
        height: "100%"
    },
    scrollComponent:{
        height: "79vh",
        overflow: 'auto',
    },
    containerHeader: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerFooter:{
        flexGrow: 1
    }
}))
export const Layout = () => {
    const location=useLocation()
    const classes = useStyles()
    const [darkState, setDarkState] = useState(true);
    const palletType = darkState ? "dark" : "light";
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };
    const darkTheme = createMuiTheme({
        ...theme,
        palette: {
            type: palletType,
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <div className={classes.root}>
                <AppBar
                    className={classes.header}
                    position="sticky"
                    color={darkState ? "inherit" : "primary"}
                >
                    <Toolbar>
                        <div className={classes.containerHeader}>
                            <Typography component="h1" variant="h6">{ location.pathname.split('/')[1].toUpperCase()||"HOME"}</Typography>
                            <IconButton color="inherit" aria-label="switch theme" component="div"
                                        onClick={handleThemeChange}>
                                {darkState ? <BrightnessHighIcon/> : <Brightness4Icon/>}
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className={classes.menu}><MenuList/></div>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.scrollComponent}>

                        <Routes/>

                    </Container>
                </main>


                <AppBar className={classes.footer}
                        component="footer"
                        position="sticky"
                        color={darkState ? "inherit" : "primary"}>
                    <Toolbar>
                        <div className={classes.containerFooter}>
                            <Copyright/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>
    );
};

