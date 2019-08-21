import React from 'react';
import ButtonStyle from '../constants/css/ButtonStyle';

const OperationButton = (props) => (
    <button className="btn" id={props.id} type="button" style={ButtonStyle}>{props.operationType}</button> 
);

export default OperationButton;