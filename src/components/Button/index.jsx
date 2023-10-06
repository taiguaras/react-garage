'use client';
import * as React from 'react'

const Button = (props) => {

return(
    <>
        <div>
            <h1>{props.seliga}</h1>
            <p>Textows</p>
            <p>{console.log("Button - Log",props)}</p>
        </div>
    </>
)


}

export default Button;