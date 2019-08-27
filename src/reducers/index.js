import { combineReducers } from 'redux';

const defaultState = {
    number: '0'
};

const screenReducer = (state = defaultState, action) => {

    switch(action.type){
    case 'ADD_NUMBER':
        if(state.number[0] === '0') {
            state.number = '';
        }

        if(Number.isInteger(Number(state.number[state.number.length - 1])) === false && action.number === '.') {
            action.number = '';
        }
        return {...state, number: state.number + action.number};

    case 'ADD_OPERATION':
        if(Number.isInteger(Number(state.number[state.number.length - 1]))) {
            state.number += action.operator;
        }
        return {...state, number: state.number};

    case 'CLEAR_SCREEN':
        state.number = '0';
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
