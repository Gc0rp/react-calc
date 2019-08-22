import React from 'react';
import {connect} from 'react-redux';

const userInputStyle = {
    textAlign: 'right',
    padding: '80px 20px 0px 0px',
};

const UserInput = (props) => (
    <div style={userInputStyle}>
        <h1 style={{fontFamily: 'sans-serif', fontWeight: '400', fontSize: '50px', color: "white"}}>{props.screenNumber}</h1>
    </div>
); 

const mapStateToProps = (state) => {
    return {
        screenNumber: state.number
    };
};

export default connect(mapStateToProps)(UserInput);