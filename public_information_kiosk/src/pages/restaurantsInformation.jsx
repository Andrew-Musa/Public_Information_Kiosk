import React from 'react';
import "./ServiceSelection.css";
import Slider from '../components/slider';
import SearchBar from '../components/searchBar';
import Chinese from '../img/Chinese.png';
import Pizza from '../img/Pizza.png';
import Japanese from '../img/Japanese.png';
import Indian from '../img/Indian.png';
import Maxican from '../img/Maxican.jpeg';
import Thai from '../img/Thai.png';
import French from '../img/French.png';
import Greek from '../img/Greek.png';


export default function RestaurantsInformation() {
    const imageDataGroup1 = [
        [{ image: Chinese, alt: 'Image 1_1', text: 'Chinese' }, { image: Pizza, alt: 'Image 1_2', text: 'Italian' }, { image: Japanese, alt: 'Ima', text: 'Japanese' }, { image: Indian, alt: 'Image 1_4', text: 'Indian' }],
        [{ image: Maxican, alt: 'Image 1_5', text: 'Maxican' }, { image: Thai, alt: 'Image 1_6', text: 'Thai' },
        { image: French, alt: 'Image 1_3', text: 'French' }, { image: Greek, alt: 'Image 1_4', text: 'Greek' }]
    ];

    const imageDataGroup2 = []
    return (
        <div>

            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Choose a Cuisine</h2>

            <div className="search-bar-container">
                <SearchBar />
            </div>


            <div className="slider-container"></div>
            <Slider imageDataGroup1={imageDataGroup1} imageDataGroup2={imageDataGroup2} />




        </div>
    )
}