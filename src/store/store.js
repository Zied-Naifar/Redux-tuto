import {createStore, combineReducers} from 'redux';
import RatingFilterReducer from '../reducers/RatingFilterReducer';
import SearchBarReducer from '../reducers/SearchBarReducer'
import AddMovieReducer from '../reducers/AddMovieReducer'

const store = createStore(combineReducers({
    searched_Value: SearchBarReducer,
    minRatingFilter: RatingFilterReducer,
    movieList: AddMovieReducer

}),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;