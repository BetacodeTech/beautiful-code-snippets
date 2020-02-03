import React from 'react';
import "./style.css"
import Highlight from 'react-highlight'
import {useSelector} from "react-redux";

const language = "javascript";


const Console = () => {

    const code = useSelector(state => state.snipet.code);
    const codeType = useSelector(state => state.snipet.codeType);

    return (
        <div class="console">
            <div class="header">
                <div class="dot dot-red"></div>
                <div class="dot dot-yellow"></div>
                <div class="dot dot-green"></div>
            </div>
            <div class="content">
                <Highlight className={codeType}>
                    {code}
                </Highlight>
            </div>
        </div>
    )
};

export default Console;

