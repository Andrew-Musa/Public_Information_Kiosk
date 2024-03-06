import React, { useState } from 'react';
import "./ServiceSelection.css";
import Slider from '../components/slider';
import SearchBar from '../components/searchBar';
import Attractions from '../img/Attractions.png';
import Restaurant from '../img/Restaurants.png';
import Entertainments from '../img/entertaments.png';
import Accommodations from '../img/Accomondations.png';
import Transportations from '../img/Transportation.jpeg';
import shopping from '../img/shopping.png';
import cuisines from '../img/cuisines.png';
import museum from '../img/museum.png';

export default function PublicInformation() {
    const imageDataGroup1 = [
        [
            { image: Attractions, alt: 'Image 1_1', text: 'Attractions', href: "./inside-navigation" },
            { image: Restaurant, alt: 'Image 1_2', text: 'Restaurants', href: "./restaurants" },
            { image: Entertainments, alt: 'Ima', text: 'Flight Information', href: "./inside-navigation" },
            { image: Accommodations, alt: 'Image 1_4', text: 'Housing', href: "./inside-navigation" }
        ],
        [
            { image: Transportations, alt: 'Image 1_5', text: 'Transit', href: "./inside-navigation" },
            { image: shopping, alt: 'Image 1_6', text: 'Shopping', href: "./inside-navigation" },
            { image: cuisines, alt: 'Image 1_3', text: 'Cuisines', href: "./inside-navigation" },
            { image: museum, alt: 'Image 1_4', text: 'Museum', href: "./inside-navigation" }
        ]
    ];

    const handleClick = () => {
        window.location.href = "/information-type";
    }

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

            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>What are you Looking For?</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <button onClick={handleClick} className="backButton">{'< Back'}</button>
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