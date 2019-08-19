import React from 'react';
import OperationButton from './OperationButton';

const ButtonPad = () => (
    <div>
        <OperationButton operationType="AC" />
        <OperationButton operationType="+/-" />
        <OperationButton operationType="%" />
        <OperationButton operationType="÷" />
    </div>
);

export default ButtonPad;