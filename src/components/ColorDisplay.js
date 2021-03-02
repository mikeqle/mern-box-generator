import React, { useState } from 'react';

const ColorDisplay = (props) => {
    return(
        <ul>
            {
                props.colorList.map( (color, index) => 
                <li key={ index } style={{backgroundColor: {color} }} ></li>
                )
            }
        </ul>
    );
};

export default ColorDisplay;

// Todo:
// Change the li into boxes
// Set colors to the boxes