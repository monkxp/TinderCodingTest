
export default (state = {} , action) => {

    switch (action.type) {
        case 'getFavoritesDone':
            return action.favorites;    
        default:
            return state;
    }

};