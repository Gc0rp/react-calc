import React from 'react';

const buttonStyles = {
    minWidth: "100px",
    backgroundColor: "#E8E8E8"
};

const OperationButton = (props) => (
    <button type="button" style={buttonStyles}>{props.operationType}</button> 
);

export default OperationButton;