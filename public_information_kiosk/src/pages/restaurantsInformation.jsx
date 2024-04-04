import React, { useState, useContext } from 'react';
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
import { Context } from '../context';
import { Link } from 'react-router-dom';


export default function RestaurantsInformation() {
    const imageDataGroup1 = [
        [
            { image: Chinese, alt: 'Image 1_1', text: 'Chinese', href: "/restaurants" }, { image: Pizza, alt: 'Image 1_2', text: 'Italian', href: "/restaurants" }, { image: Japanese, alt: 'Ima', text: 'Japanese', href: "/restaurants" }, { image: Indian, alt: 'Image 1_4', text: 'Indian', href: "/restaurants" }],
        [{ image: Maxican, alt: 'Image 1_5', text: 'Maxican', href: "/restaurants" }, { image: Thai, alt: 'Image 1_6', text: 'Thai', href: "/restaurants" },
        { image: French, alt: 'Image 1_3', text: 'French', href: "/restaurants" }, { image: Greek, alt: 'Image 1_4', text: 'Greek', href: "/restaurants" }],
    ];

    const [showPopup, setShowPopup] = useState(false);
    const [accessibleMode, _] = useContext(Context);

    const handleClickVolunteer = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const imageDataGroup2 = []
    return (
        <div>
            {accessibleMode && <div style={{ height: "100px" }}></div>}
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Choose a Cuisine</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to="/public-information" className="backButton" style={{ textDecoration: 'none' }}>{'< Back'}</Link>
                <button onClick={handleClickVolunteer} className="volunteerButton">Call a Volunteer</button>
            </div>

            <div className="search-bar-container">
                <SearchBar />
            </div>


            <div className="slider-container"></div>
            <Slider imageDataGroup1={imageDataGroup1} imageDataGroup2={imageDataGroup2} />




        </div>
    )
}