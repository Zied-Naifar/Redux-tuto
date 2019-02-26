import { ADD_Movie } from "../constants/actionTypes";
import { SET_RATING_FILTER } from "../constants/actionTypes";
import { SET_SEARCHED_VALUE } from "../constants/actionTypes";

export function addMovie(payload) {
return { type: ADD_Movie, payload };
}

export function setRatingFilter(payload) {
return { type: SET_RATING_FILTER, payload };
}

export function setSearchedValue(payload) {
return { type: SET_SEARCHED_VALUE, payload };
}