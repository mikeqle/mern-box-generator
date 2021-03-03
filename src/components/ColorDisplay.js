import React from 'react';

const ColorDisplay = (props) => {
    const { colorList, dimensionList } = props;

    const boxStyle = {
        height: "100px",
        width: "100px",
        margin: "10px",
        display: "inline-block"
    }

    const boxContainer = {
        minHeight: "200px",
        margin: "auto"
    }

    return(
        <div style={ boxContainer }>
            {
                colorList.map( (color, index) => 
                <p key={ index } style={ { ...boxStyle, backgroundColor: color, width: dimensionList[index]+"px", height: dimensionList[index]+"px" } } ></p>
                )
            }
        </div>
    );
};

export default ColorDisplay;

// Todo:
// Change the li into boxes
// Set colors to the boxes