import React from 'react';
import ButtonStyle from '../constants/css/ButtonStyle';

class OperationButton extends React.Component {
   
    constructor(props){
        super(props);
        
        this.addOperation = this.addOperation.bind(this);
    }

    addOperation(){

    }

    render(){
        return(
            <button className="btn" id={this.props.id} type="button" style={this.props.style}>{this.props.operationType}</button> 
        );
    };
};

OperationButton.defaultProps = {
    style: {...ButtonStyle, backgroundColor: "#E8E8E8"}
};

export default OperationButton;