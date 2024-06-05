const SearchBar = () => {
  return (
    <div className="tile search-tile row1">
      <img src='/assets/search.svg' alt='search' />
      <input type="text" placeholder="Search here..." />
      <img src='/assets/filter.svg' alt='filter' />
      <span>Filter</span>
    </div>
  );
};

export default SearchBar;