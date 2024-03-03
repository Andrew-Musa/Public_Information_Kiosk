import React from 'react';
import Slider from '../components/slider';
import baggageClaim from '../img/baggageClaim.png';
import currencyExchange from '../img/currencyExchange.png';
import flightInformation from '../img/flightInformation.png';
import airportDirections from '../img/airportDirections.png';
import airportHotels from '../img/airportHotels.png';
import groundTransportations from '../img/groundTransportations.png';


export default function Screen3() {
    const imageDataGroup1 = [
        [{ image: baggageClaim, alt: 'Image 1_1', text: 'Text 1_1' }, { image: currencyExchange, alt: 'Image 1_2', text: 'Text 1_2' }, { image: flightInformation, alt: 'Image 1_3', text: 'Text 1_3' }, { image: airportDirections, alt: 'Image 1_4', text: 'Text 1_4' }],
        [{ image: airportHotels, alt: 'Image 1_5', text: 'Text 1_5' }, { image: groundTransportations, alt: 'Image 1_6', text: 'Text 1_6' }]
      ];

      const imageDataGroup2 = []
    return (
        <div>
            
        <h2 style={{textAlign: 'center', marginTop: '70px'}}>Select one of the bittons below, or search</h2>

        <Slider imageDataGroup1={imageDataGroup1} imageDataGroup2={imageDataGroup2} />
            
            
            
            
        </div>
    )
}