import { combineReducers } from 'redux';
import personInfoReducer from './personInfoReducer.js';
import myFavoritesReducer from './myFavoritesReducer.js';

const rootReducer = combineReducers({
    personInfo: personInfoReducer,
    favorites: myFavoritesReducer
});

export default rootReducer;
