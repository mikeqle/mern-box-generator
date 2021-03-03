import React, { useState } from 'react';

const ColorForm = (props) => {
    const { colorList, setColorList, dimensionList, setDimensionList } = props;
    const [ color, setColor ] = useState("");
    const [ dimension, setDimension ] = useState(0);

    const inputStyle = {
        backgroundColor: "#EFEFEF",
        borderRadius: "3px",
        border: "0px",
        height: "30px",
        width: "300px",
        margin: "15px",
        paddingLeft: "10px",
        fontSize: "16px"
    }

    const buttonStyle = {
        backgroundColor: "white",
        border: "1px solid #DFDFDF",
        borderRadius: "3px",
        height: "30px",
        width: "60px",
        fontSize: "16px"
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setDimensionList( [ dimension, ...dimensionList ] )
        setColorList([ color, ...colorList ]);

        setColor("");
        setDimension(0);
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <label>Color</label>
            <input type="text" style={ inputStyle } value={ color } onChange={ (e) => setColor(e.target.value) }/>
            <label>Dimension</label>
            <input type="text" style={ inputStyle } value={ dimension } onChange={ (e) => setDimension(e.target.value) }/>
            <input type="submit" style={ buttonStyle } value="Add"/>
        </form>
    );
};

export default ColorForm;