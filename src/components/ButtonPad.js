import React from 'react';
import OperationButton from './OperationButton';
import NumberButton from './NumberButton';
import EqualButton from './EqualButton';

import ButtonStyle from '../constants/css/ButtonStyle';

const ButtonPad = () => (
    <div>
        <OperationButton id="clear" operationType="AC" />
        <OperationButton operationType="+/-" />
        <OperationButton id="percentage" operationType="%" />
        <OperationButton id="divide" operationType="÷" />
        
        <NumberButton id="seven" number="7"/>
        <NumberButton id="eight" number="8" />
        <NumberButton id="nine" number="9" />
        <OperationButton id="multiply" operationType="x" />

        <NumberButton id="four" number="4" />
        <NumberButton id="five" number="5" />
        <NumberButton id="six" number="6" />
        <OperationButton id="add" operationType="+" />
        
        <NumberButton id="one" number="1" />
        <NumberButton id="two" number="2" />
        <NumberButton id="three" number="3" />
        <OperationButton id="subtract" operationType="-" />

        <NumberButton id="zero" number="0" style={{...ButtonStyle, backgroundColor: "white",  minWidth: "200px"}}/>
        <NumberButton id="decimal" number="." />
        <OperationButton id="equals" operationType="=" 
            style={{...ButtonStyle,  background: "linear-gradient(93deg, rgba(238,9,121,1) 0%, rgba(255,106,0,1) 96%, rgba(255,106,0,1) 100%)"}}/>
       
    </div>
);

export default ButtonPad;