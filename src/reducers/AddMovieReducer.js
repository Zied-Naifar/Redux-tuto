import {ADD_Movie} from '../constants/actionTypes'

const initialMovie = [
    { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'beirut', description: '', rating : 3 },
    { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'bladerunner', description: '', rating : 4 },
    { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'starWars', description: '', rating : 3 },
    { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'tallengeHollywood', description: '', rating : 3 },
    { img: 'https://imgc.allpostersimages.com/img/print/posters/teen-wolf-official-movie-poster-print_a-G-8848874-0.jpg', name: 'teenwolf', description: '', rating : 5 }
  ];

const AddMovieReducer = (state = initialMovie, action) => {
    if(action.type === ADD_Movie) {
        return state.concat(action.payload)
    }
    return state
}

export default AddMovieReducer