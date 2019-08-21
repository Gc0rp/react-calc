import React from 'react';
import styled from 'styled-components';
import UserInput from './UserInput';
import PreviousCalculations from './PreviousCalculations';

const Display = styled.div `
    width: 400px;
    height: 200px;
    border-radius: 5px 5px 0px 0px;
    
    background: rgb(238,9,121);
    background: linear-gradient(93deg, rgba(238,9,121,1) 0%, rgba(255,106,0,1) 96%, rgba(255,106,0,1) 100%);    
    `;

const Screen = () => (
    <Display>
        <UserInput />
        <PreviousCalculations />
    </Display>
);

export default Screen;