import React from "react";
import {connect} from 'react-redux'
import MovieCard from "./movie-card/MovieCard";
import AddCard from "./add-card/AddCard";
import SearchBar from "./searchBar/SearchBar";
import StarRating from "./starRating/StarRating";
import "./Main.css";


const Main = ({searched, minRatingFilter, movieList}) => {
    return (
      <div className="main-container">
        <div className="header">
          <SearchBar />
          <StarRating />
        </div>
        <div className="movie-container"> 
          {movieList
            .filter(
              el =>
                el.name.toLowerCase().includes(searched.toLowerCase().trim()) &&
                el.rating >= minRatingFilter
            )
            .map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          <AddCard />
         </div>
      </div>
    )
  }


const mapStateToProps = state => {
  return {
    searched: state.searched_Value,
    minRatingFilter: state.minRatingFilter,
    movieList: state.movieList
  }
}

const MainContainer = 
    connect(mapStateToProps, null)(Main)

export default MainContainer;
