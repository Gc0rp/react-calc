import React from 'react';
import OperationButton from './OperationButton';
import NumberButton from './NumberButton';
import EqualButton from './EqualButton';

import ButtonStyle from '../constants/css/ButtonStyle';

const style = {
    ...ButtonStyle
};

const ButtonPad = () => (
    <div>
        <OperationButton id="clear" operationType="AC" />
        <OperationButton operationType="+/-" />
        <OperationButton operationType="%" />
        <OperationButton operationType="÷" />
        
        <NumberButton number="7"/>
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

        <NumberButton number="0" style={{...ButtonStyle, backgroundColor: "white",  minWidth: "200px"}}/>
        <NumberButton number="." />
        <OperationButton operationType="=" style={{...ButtonStyle,  background: "linear-gradient(93deg, rgba(238,9,121,1) 0%, rgba(255,106,0,1) 96%, rgba(255,106,0,1) 100%)"}}/>
       
    </div>
);

export default ButtonPad;