'use client';
import { createContext } from 'react';

import * as React from 'react';

import { useState } from 'react';

//const [data, setData] = useState([]);

const url = "https://jsonplaceholder.typicode.com/users";





const Box = (props) => {
    const [fontSize, setFontSize] = useState('10px');
    const handleScroll = () => {
        setFontSize(window.scrollY + "px")
    }

return(
    <>
        <div className="testando" style={{ fontSize: fontSize }}>
            <h1>{props.qualquer}</h1>
            <p>Texto</p>
            <p>{console.log("Box - Log",props)}</p>
        </div>
    </>
)


}

export default Box;