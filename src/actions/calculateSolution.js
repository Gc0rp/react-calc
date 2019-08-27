const calculateSolution = "CALCULATE_SOLUTION";

const CALCULATE_SOLUTION = (equation) => {
    return {
        type: calculateSolution,
        equation
    };
};

export default CALCULATE_SOLUTION;

