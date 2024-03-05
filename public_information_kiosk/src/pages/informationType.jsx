import React, { useState, useEffect } from 'react';
import './styles.css';

export default function InformationType() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle search logic here, e.g., filtering data based on the search term
        console.log('Search term:', searchTerm);
    };

    const handleClick = () => {
        window.location.href = "/";
    }

    const handleAirportInfoClick = () => {
        // Handle airport information button click logic here
        window.location.href = "/airportInformation";
    }

    const handleCalgaryInfoClick = () => {
        // Handle Calgary information button click logic here
    }

    return (
        <div>
            <h3 style={{textAlign: 'center', marginTop: '70px', marginBottom: '0'}}>Select the Type of Information</h3>
            <h3 style={{textAlign: 'center', marginTop: '0'}}>You're Looking For</h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <button onClick={handleClick} className="backButton">{'< Back'}</button>
                <button className="volunteerButton">Call a Volunteer</button>
            </div>

            <form onSubmit={handleSubmit} style={{textAlign: 'center', marginTop: '20px'}}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                style={{width: '300px', height: '20px', borderRadius: '5px'}}
            />
            {/* <button type="submit">Search</button> */}
            <div style={{marginTop: '10px', display: 'flex', justifyContent: 'center'}}>
                    <button onClick={handleAirportInfoClick} className="infoButton">Airport Information</button>
                    <button onClick={handleCalgaryInfoClick} className="infoButton">Calgary Information</button>
                </div>
            </form>

            
        </div>
    );
}

