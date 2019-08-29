import { combineReducers } from 'redux';

const defaultState = {
    number: '0',
    calculations: '0'
};

const screenReducer = (state = defaultState, action) => {

    switch(action.type){
    case 'ADD_NUMBER':
        if(state.number[0] === '0') {
            state.number = '';
        }

        if(Number.isInteger(Number(state.number[state.number.length - 1])) === false && action.number === '.') {
            action.number = '';
        } else if(action.number === '.') {
            const split = String(state.number).split(/[-,+,/,*,%]+/);
            
            if (split[split.length - 1].includes('.')){
                action.number = '';
            }
        }
        return {...state, number: state.number + action.number, calculations: state.number + action.number};

    case 'ADD_OPERATION': {

        const lastEntered= state.number[state.number.length - 1];
        const operators = ['+', '-', '/', '%'];

        if(Number.isInteger(Number(lastEntered)) || (action.operator === '-' && 
            lastEntered !== '-')) {
            state.number += action.operator;
        } else if (String(action.operator).match(/[+,-,/,*,%]/)){
            let cuttoff;
            if(String(state.number[state.number.length - 2]).match(/[+,-,/,*,%]/)){
                cuttoff = state.number.length - 2;
            } else {
                cuttoff = state.number.length - 1;
            }
            state.number = state.number.split('').splice(0, cuttoff).join('');
            state.number += action.operator;
        }
        return {...state, number: state.number };
    }
    case 'CLEAR_SCREEN':
        state.number = '0';
        state.calculations = 0;
        return {...state};

    case 'CALCULATE_SOLUTION':
        state.number = String(eval(state.number));
        return {...state};

    default:
        return defaultState;
    }
};

const rootReducer = screenReducer;
export default rootReducer;
