import React from 'react';
import {connect} from 'react-redux';
import {setSearchedValue} from '../../actions/action'
import './searchBar.css';

const SearchBar = ({setSearchedValue}) => {

  return (
    <div>
        <input
          type="text"
          className="searchBar"
          onChange={(event)=>setSearchedValue(event.target.value)}
          placeholder="Search..."
        />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchedValue: (value) => {dispatch(setSearchedValue(value))
      }
  }
}

const SearchBarContainer = 
    connect(null ,mapDispatchToProps)(SearchBar)

export default SearchBarContainer