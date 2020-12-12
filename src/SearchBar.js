import './SearchBar.css';

const SearchBar = () => (
  <form class= "serchbar" action="/" method="get">
      <input
          type="text"
          id="header-search"
          placeholder="Let's see what you get!"
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
);

export default SearchBar;