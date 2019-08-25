const addOperation = "ADD_OPERATION";

const AddOperation = (operator) => {
    return {
        type: addOperation,
        operator
    };
};

export default AddOperation;

