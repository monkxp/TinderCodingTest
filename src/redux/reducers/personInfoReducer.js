
export default (state ={}, action) => {


    switch (action.type) {
        case 'doneRequest':
            return action.payload;  
        default:
            return state;
    }

};