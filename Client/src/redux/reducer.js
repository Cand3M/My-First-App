import { ADD_FAV, REMOVE_FAV } from "./actions/actionsTypes";
import axios from 'axios';
const initialState = {
    myFavorites:[]
}

function reducer(state = initialState, { type, payload }){
    switch(type){
        case 'ADD_FAV':
            return { ...state, myFavorites: payload, allCharacters: payload };
            case 'REMOVE_FAV':
                return { ...state, myFavorites: payload };
        default:
            return {...state}
    }
}

export default reducer;