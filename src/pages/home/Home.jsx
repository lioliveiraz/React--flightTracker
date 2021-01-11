import React, { useState } from 'react';
import getAPIData from '../../api/httpRequest';
import SearchBar from '../../components/SearchBar';

export default function Home() {
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [flightNumber, setFlightNumber] = useState("");

    const handleSearch = async () => {
        const flightsData = await getAPIData();
        setFilteredFlights(flightsData.filter(({ flight }) =>
            flight.iata.includes(flightNumber.toUpperCase())
        ));


    };

    return (
        <div>
            <h1>Home</h1>
            <SearchBar handleSearch={handleSearch} flightNumber={flightNumber} setFlightNumber={setFlightNumber} />
            <ul>
                {filteredFlights.map((flight, index) =>
                    <li key={index} >{flight.flight.iata}</li>
                )
                }
            </ul>
        </div>
    );
}

