import './SearchBar.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
   return (
    <form class= "serchbar" action="/" method="get">
        <input 
          type="text" 
          // placeholder="Let's see what you get!" 
          onChange={event => {
            setSearchTerm(event.target.value);
          }}
        />
        <button type="submit">Search</button>
        {JSONDATA.filter((val)=> {
          if(searchTerm == "") {
            return val
          } else if (val.word.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val,key) => {
          return (
            <div className="word" key={key}> 
              <p>{val.word}</p>
            </div>
          );
        })}
    </form>
  );
}

export default SearchBar;