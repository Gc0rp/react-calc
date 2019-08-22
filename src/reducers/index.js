import { combineReducers } from 'redux';

const defaultState = {
    number: '0'
};

const addNumberReducer = (state = defaultState, action) => {

    switch(action.type){
    case 'ADD_NUMBER':
        return {...state, number: state.number + action.number};

    default:
        return defaultState;
    }
};

const rootReducer = addNumberReducer;
export default rootReducer;
