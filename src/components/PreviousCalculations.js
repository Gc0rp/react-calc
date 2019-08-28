import React from 'react';
import {connect} from 'react-redux';

const previousCalculationsStyle = {
    textAlign: 'right',
    padding: '20px 20px 0px 0px',
};

const PreviousCalculations = (props) => (
    <div style={previousCalculationsStyle}>
        <h4 style={{fontFamily: 'sans-serif', fontWeight: '400', fontSize: '20px', color: "white"}}>{props.pcalc}</h4>
    </div>
);

const mapStateToProps = (state) => {
    return {
        pcalc: state.calculations
    };
};

export default connect(mapStateToProps)(PreviousCalculations);