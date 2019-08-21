import React from 'react';
import ButtonStyle from '../constants/css/ButtonStyle';

const EqualButton = () => (
    <button className="btn" type="button" style={{...ButtonStyle, 
        background: "linear-gradient(93deg, rgba(238,9,121,1) 0%, rgba(255,106,0,1) 96%, rgba(255,106,0,1) 100%)"
    }}>=</button>
);

export default EqualButton;