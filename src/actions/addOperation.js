import React from 'react';

const addOperation = "ADD_OPERATION";

export const AddOperation = (operator) => {
    return {
        type: addOperation,
        operator
    };
};

