import React, { useState } from 'react';

const SearchComponent = () => {
    // State to hold the search term
    const [searchTerm, setSearchTerm] = useState('');

    // Function to handle the search action
    const handleSearch = () => {
        // Perform the search logic here
        console.log('Searching for:', searchTerm);
        // You can also call an API or filter a list based on the searchTerm
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchComponent;
