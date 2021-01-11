import React from 'react';

function FlightDetails(props) {
    const { selectedFlight } = props;

    const click = () => {
        console.log(selectedFlight);
    };



    return (
        <div>
            <h1> Flight Details</h1>
            <button onClick={click}> click</button>
        </div>
    );
}

export default FlightDetails;