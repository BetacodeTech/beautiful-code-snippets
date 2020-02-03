import React from 'react';
import logo from './logo.svg';
import './App.css';
import Console from "./components/console";
import Footer from "./components/footer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Provider} from "react-redux";
import store from "./store";
import FormDialog from "./components/form";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div>
                    <Console/>
                    <Footer/>
                    <FormDialog/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
