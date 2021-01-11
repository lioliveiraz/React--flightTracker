import React from 'react';

function Input(props) {
    const { handleSearch, flightNumber, setFlightNumber } = props;

    const handleInput = (e) => {
        setFlightNumber(e.target.value);
        handleSearch();
    };

    return (
        <input

            value={flightNumber}
            onChange={handleInput}
            name="selectedFlightNumber"
            type="text"
            placeholder="NLF435"
            autoFocus


        />
    );
}

export default Input;