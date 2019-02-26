import React from 'react'
import {setRatingFilter} from '../../actions/action'
import Rating from './Rating'
import {connect} from 'react-redux'


const RatingFilter = ({rating, setRatingFilter}) => (

      <Rating
        rating={rating}
        triggerRating={(newRating) =>{
            setRatingFilter(newRating)
      }} />
)

const mapStateToProps = state => {
    return {
      rating: state.minRatingFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setRatingFilter: (newRating) => { dispatch(setRatingFilter(newRating))
        }
    }
}

const RatingFilterContainer = 
    connect(mapStateToProps, mapDispatchToProps)(RatingFilter)

export default RatingFilterContainer