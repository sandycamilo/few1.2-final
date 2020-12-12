import React from 'react';
import './song_search.css';
import SearchBar from './SearchBar.js';

function SongSearch() { 
  return (
    <div className="SongSearch">
      <div className="SongSearch-info">
        <small> Type in a word and get countless of songs!</small>
        <SearchBar />
      </div>
    </div>
  )
}

export default SongSearch
