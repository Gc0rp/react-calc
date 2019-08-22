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
        this.props.pushNumber(this.props.number);
    };

    render() {
        return (
            <button className="btn" type="button" style={{...ButtonStyle, backgroundColor: "white"}} 
                onClick={this.buttonClicked}>{this.props.number}</button> 
        );
    }
}

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