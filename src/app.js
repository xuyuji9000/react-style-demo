import React from 'react';
import ReactDOM from 'react-dom';

import Letter from "./Letter";


const App = () => {
    return (
        <div>
            <Letter bgcolor={"#58B3FF"}>A</Letter>
            <Letter bgcolor={"#FF605F"}>E</Letter>
            <Letter bgcolor={"#FFD52E"}>I</Letter>
            <Letter bgcolor={"#49DD8E"}>O</Letter>
            <Letter bgcolor={"#AE99FF"}>U</Letter>
        </div>
    );
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);
