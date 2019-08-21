import React from 'react';
import ButtonStyle from '../constants/css/ButtonStyle';

const ZeroButton = () => (
    <button className="btn" type="button" style={{...ButtonStyle, backgroundColor: "white", minWidth: "200px"}}>0</button>
);

export default ZeroButton;
