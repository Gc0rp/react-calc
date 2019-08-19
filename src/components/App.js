import React from 'react';
import styled from 'styled-components';
import Screen from './Screen';
import ButtonPad from './ButtonPad';

const Container = styled.div `
    width: 400px;
    min-height: 550px;
    border-radius: 5px;
    margin: 30px auto auto auto;
    box-shadow: 5px 5px 8px #888888;
`;

const App = () => (
    <Container>
        <Screen />
        <ButtonPad />
    </Container>
);

export default App;
