const initialState = [
]
const EmployeeReducer = ((state = initialState, action) => {
    console.log(action, state);
    if (action.type === 'FETCH_DATA') {
        let newState = [...action.payload];
        return newState;
    }
    return state;
});
export default EmployeeReducer;