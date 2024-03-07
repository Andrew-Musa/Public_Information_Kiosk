import React, { useContext, useState } from 'react';
import "./ServiceSelection.css";
import Slider from '../components/slider';
import SearchBar from '../components/searchBar';
import baggageClaim from '../img/baggageClaim.jpeg';
import currencyExchange from '../img/currencyExchange.png';
import flightInformation from '../img/flightInformation.png';
import airportDirections from '../img/airportDirections.png';
import airportHotels from '../img/airportHotel.png';
import groundTransportations from '../img/groundTransportations.png';
import parking from '../img/Parking.jpeg';
import lounges from '../img/Lounges.png';
import { Context } from '../context';
import { Link } from 'react-router-dom';

export default function AirportInformation() {
    const [accessibleMode, _] = useContext(Context)
    const imageDataGroup1 = [
        [
            { image: baggageClaim, alt: 'Image 1_1', text: 'Baggage Claim', href: "/inside-navigation" },
            { image: currencyExchange, alt: 'Image 1_2', text: 'Currency Exchange', href: "/inside-navigation" },
            { image: flightInformation, alt: 'Ima', text: 'Flight Information', href: "/inside-navigation" },
            { image: airportDirections, alt: 'Image 1_4', text: 'Airport Directions', href: "/inside-navigation" }
        ],
        [
            { image: airportHotels, alt: 'Image 1_5', text: 'Airport Hotels', href: "/inside-navigation" },
            { image: groundTransportations, alt: 'Image 1_6', text: 'Ground Transports', href: "/inside-navigation" },
            { image: parking, alt: 'Image 1_3', text: 'Parking', href: "/inside-navigation" },
            { image: lounges, alt: 'Image 1_4', text: 'Lounges', href: "/inside-navigation" }
        ]
    ];

    const imageDataGroup2 = []

    const [showPopup, setShowPopup] = useState(false);

    const handleClickVolunteer = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            {accessibleMode && <div style={{ height: "100px" }}></div>}
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>What are you Looking For?</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to={"/information-type"} className="backButton" style={{textDecoration: 'none'}}>{'< Back'}</Link>
                <button onClick={handleClickVolunteer} className="volunteerButton">Call a Volunteer</button>
            </div>
            {showPopup && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={handleClosePopup}></div>
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
                        <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={handleClosePopup}>X</button>
                        <p style={{ marginTop: '15px' }}>A white-hat volunteer is on their way to give assistance.</p>
                    </div>
                </>
            )}

            <div className="search-bar-container">
                <SearchBar />
            </div>


            <div className="slider-container"></div>
            <Slider imageDataGroup1={imageDataGroup1} imageDataGroup2={imageDataGroup2} />




        </div>
    )
}