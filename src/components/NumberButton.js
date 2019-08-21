import React from 'react';
import ButtonStyle from '../constants/css/ButtonStyle';

const NumberButton = (props) => (
    <button className="btn" type="button" style={{...ButtonStyle, backgroundColor: "white"}}>{props.number}</button> 
);

export default NumberButton;