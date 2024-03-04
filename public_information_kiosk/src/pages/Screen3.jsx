import React from 'react';
import "./Screen3.css";
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

export default function Screen3() {
    const imageDataGroup1 = [
        [{ image: baggageClaim, alt: 'Image 1_1', text: 'Baggage Claim' }, { image: currencyExchange, alt: 'Image 1_2', text: 'Currency Exchange' }, { image: flightInformation, alt: 'Ima', text: 'Flight Information' }, { image: airportDirections, alt: 'Image 1_4', text: 'Airport Directions' }],
        [{ image: airportHotels, alt: 'Image 1_5', text: 'Airport Hotels' }, { image: groundTransportations, alt: 'Image 1_6', text: 'Ground Transports' },
        {image: parking, alt: 'Image 1_3', text: 'Parking' }, { image: lounges, alt: 'Image 1_4', text: 'Lounges' }]
      ];

      const imageDataGroup2 = []
    return (
        <div>
            
        <h2 style={{textAlign: 'center', marginTop: '70px'}}>Select one of the bittons below, or search</h2>

        <div className="search-bar-container">
            <SearchBar/>
        </div>


        <div className="slider-container"></div>
        <Slider imageDataGroup1={imageDataGroup1} imageDataGroup2={imageDataGroup2} />
            
            
            
            
        </div>
    )
}