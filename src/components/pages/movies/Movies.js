import React from 'react';
import * as FaIcons from 'react-icons/fa';

const Movies = () => {
  return (
    <div className="App">
      <h1>Movies</h1>

      <div class="search_wrap search_wrap_1">
        <div class="search_box">
          <input type="text" className="input" placeholder="search..." />
          <div class="searchbtn">
            <FaIcons.FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
