import React, { useState } from 'react';

const ColorForm = (props) => {
    const { colorList, setColorList } = props;
    const [ color, setColor ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setColor(e.target.value);
        setColorList([ color, ...colorList ]);
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <label>Color</label>
            <input type="text" value={ color } onChange={ (e) => setColor(e.target.value) }/>
            <input type="submit" value="Add color"/>
        </form>
    );
};

export default ColorForm;