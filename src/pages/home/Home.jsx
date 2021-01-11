import React, { useState } from 'react';
import getAPIData from '../../api/httpRequest';
import SearchBar from '../../components/SearchBar';
import FlightDetails from '../FlightDetails/FlightDetails';

export default function Home() {
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [flightNumber, setFlightNumber] = useState("");
    const [selectedFlight, setSelectedFlight] = useState("");
    const [isDetailsMounted, setIsDetailsMounted] = useState(false);
    const [APIData, setAPIDAta] = useState([]);

    const handleSearch = async () => {
        const flightsData = await getAPIData();
        setAPIDAta(flightsData);
        setFilteredFlights(APIData.filter(({ flight }) =>
            flight.iata.includes(flightNumber.toUpperCase())
        ));
    };

    const handleFlightSelection = (flight) => {

        setSelectedFlight(flight);
        setIsDetailsMounted(true);
    };

    return (
        <div>
            <h1>Home</h1>
            <SearchBar handleSearch={handleSearch} flightNumber={flightNumber} setFlightNumber={setFlightNumber} />
            <ul>
                {filteredFlights.map((flight, index) =>
                    <li onClick={() => handleFlightSelection(flight)} key={index} >{flight.flight.iata}</li>
                )
                }
            </ul>

            { isDetailsMounted ? <FlightDetails selectedFlight={selectedFlight} /> : null

            }
        </div>
    );
}

