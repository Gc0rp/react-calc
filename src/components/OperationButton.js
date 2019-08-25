import React from 'react';
import {connect} from 'react-redux';
import ButtonStyle from '../constants/css/ButtonStyle';
import ADD_OPERATION from '../actions/addOperation';
import CLEAR_SCREEN from '../actions/clearScreen';

class OperationButton extends React.Component {
   
    constructor(props){
        super(props);
        
        this.operation = this.operation.bind(this);
    }

    operation(){
        if(this.props.operationType !== 'AC') {
            this.props.pushOperator(this.props.operationType);
        } else {
            this.props.clearScreen();
        }
    }

    render(){
        return(
            <button className="btn" id={this.props.id} type="button" style={this.props.style} onClick={this.operation}>{this.props.operationType}</button> 
        );
    };
};

OperationButton.defaultProps = {
    style: {...ButtonStyle, backgroundColor: "#E8E8E8"}
};

const mapStateToProps = (state) => {
    return {
        screenNumber: state.number
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        pushOperator: (operator) => {
            dispatch(ADD_OPERATION(operator));
        },
        clearScreen: () => {
            dispatch(CLEAR_SCREEN());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationButton);