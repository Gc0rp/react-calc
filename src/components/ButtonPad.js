import React from 'react';
import OperationButton from './OperationButton';
import NumberButton from './NumberButton';
import ZeroButton from './ZeroButton';
import EqualButton from './EqualButton';

const ButtonPad = () => (
    <div>
        <OperationButton id="clear" operationType="AC" />
        <OperationButton operationType="+/-" />
        <OperationButton operationType="%" />
        <OperationButton operationType="÷" />
        
        <NumberButton number="7" />
        <NumberButton number="8" />
        <NumberButton number="9" />
        <OperationButton operationType="x" />

        <NumberButton number="4" />
        <NumberButton number="5" />
        <NumberButton number="6" />
        <OperationButton operationType="+" />
        
        <NumberButton number="1" />
        <NumberButton number="2" />
        <NumberButton number="3" />
        <OperationButton operationType="-" />

        <ZeroButton/>
        <NumberButton number="." />
        <EqualButton />
       
    </div>
);

export default ButtonPad;