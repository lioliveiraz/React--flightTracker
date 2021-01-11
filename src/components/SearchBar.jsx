import React, { useState } from 'react';
import Input from './Input';

function SearchBar(props) {
    const { handleSearch, flightNumber, setFlightNumber } = props;

    return (
        <div>
            <Input handleSearch={handleSearch} flightNumber={flightNumber} setFlightNumber={setFlightNumber} />
        </div>
    );
}

export default SearchBar;