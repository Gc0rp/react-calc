import React from 'react';
import {connect} from 'react-redux';
import ButtonStyle from '../constants/css/ButtonStyle';
import ADD_OPERATION from '../actions/addOperation';
import CLEAR_SCREEN from '../actions/clearScreen';
import CALCULATE_SOLUTION from '../actions/calculateSolution';

class OperationButton extends React.Component {
   
    constructor(props){
        super(props);
        
        this.operation = this.operation.bind(this);
    }

    operation(){
        if(this.props.operationType === 'AC') {
            this.props.clearScreen();
            
        } else if(this.props.operationType === '='){
            
            this.props.calculateSolution(this.props.screenNumber);

        } else if (this.props.operationType === '÷'){
            
            this.props.pushOperator('/');
        } else if (this.props.operationType === 'x'){
            
            this.props.pushOperator('*');
        }else {
            this.props.pushOperator(this.props.operationType);
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
        },
        calculateSolution: (equation) => {
            dispatch(CALCULATE_SOLUTION(equation));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationButton);