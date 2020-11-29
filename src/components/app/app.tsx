import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import store from "../../store";
import theme from "../../theme";
import { Layout } from '../layout/layout';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Layout/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
