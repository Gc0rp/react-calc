import React from 'react';
import styled from 'styled-components';
import Screen from '../components/Screen'

const Container = styled.div `
    border: 1px solid black;
    width: 400px;
    min-height: 550px;
    border-radius: 5px;
    margin: 30px auto auto auto;
    box-shadow: 5px 5px 8px #888888;
`;


const App = () => (
    <Container>
        <Screen>
            
        </Screen>
    </Container>
);

export default App;
