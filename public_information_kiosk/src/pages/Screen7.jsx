import React from 'react';
import "./ServiceSelection.css";
import Slider from '../components/slider';
import SearchBar from '../components/searchBar';
import Chinese from '../img/Chinese.png';
import Pizza from '../img/Pizza.png';
import Entertainments from '../img/entertaments.png';
import Accommodations from '../img/Accomondations.png';
import Transportations from '../img/Transportation.jpeg';
import shopping from '../img/shopping.png';
import cuisines from '../img/cuisines.png';
import museum from '../img/museum.png';

export default function Screen5() {
    const imageDataGroup1 = [
        [{ image: Chinese, alt: 'Image 1_1', text: 'Chinese' }, { image: Pizza, alt: 'Image 1_2', text: 'Italian' }, { image: Entertainments, alt: 'Ima', text: 'Flight Information' }, { image: Accommodations, alt: 'Image 1_4', text: 'Housing' }],
        [{ image: Transportations, alt: 'Image 1_5', text: 'Transit' }, { image: shopping, alt: 'Image 1_6', text: 'Shopping' },
        {image: cuisines, alt: 'Image 1_3', text: 'Cuisines' }, { image: museum, alt: 'Image 1_4', text: 'Museum' }]
      ];

      const imageDataGroup2 = []
    return (
        <div>
            
        <h2 style={{textAlign: 'center', marginTop: '70px'}}>Choose a Cuisine</h2>

        <div className="search-bar-container">
            <SearchBar/>
        </div>


        <div className="slider-container"></div>
        <Slider imageDataGroup1={imageDataGroup1} imageDataGroup2={imageDataGroup2} />
            
            
            
            
        </div>
    )
}