import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search country/city" />
      <button type="submit">Search</button> */}
      <div class="row">
        <div class="col-9 col-md-5 mx-auto">
            
            <div class="input-group">
                <span class="input-group-append ms-n5 search-bar">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                        {/* <button class="btn search-button btn-outline-secondary bg-white border-bottom-0  rounded-pill ms-n5" type="button">
                        
                        </button> */}
                </span>
                <input class="form-control border-end-0 border rounded-pill search-input" type="text" value={query} id="example-search-input" onChange={(e) => setQuery(e.target.value)} placeholder="Search country/city"/>
                <span class="material-symbols-outlined location">
                    my_location
                </span>
            </div>
        </div>
        </div>
    </form>
  );
}

export default SearchBar;
