import React from 'react';
import {connect} from 'react-redux';
import {ADDNUMBER} from '../actions/addNumber';
import ButtonStyle from '../constants/css/ButtonStyle';

class NumberButton extends React.Component{

    constructor(props){
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        if(this.props.screenNumber.length < 11) {
            this.props.pushNumber(this.props.number);
        }
        
    };

    render() {
        return (
            <button className="btn" type="button" style={this.props.style} 
                onClick={this.buttonClicked}>{this.props.number}</button> 
        );
    }
}

NumberButton.defaultProps = {
    style: {...ButtonStyle}
};

const mapStateToProps = (state) => {
    return {
        screenNumber: state.number
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        pushNumber: (number) => {
            dispatch(ADDNUMBER(number));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberButton);