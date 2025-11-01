import React, { useState } from 'react';

function WebSearch() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      window.open(`https://www.google.com/search?q=${query}`, '_blank');
    }
  };

  return (
    <div>
      <h2>Web Search</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Google"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default WebSearch;