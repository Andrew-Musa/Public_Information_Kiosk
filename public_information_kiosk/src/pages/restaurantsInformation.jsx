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

    const [showPopupText, setShowPopupText] = useState(false);

    const handleYesCall = () => {
        setShowPopupText(true);
    };

    const handleClickVolunteer = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setShowPopupText(false);
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
            {showPopup && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={handleClosePopup}></div>
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
                        {showPopupText && <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={handleClosePopup}>X</button>}
                        <p style={{ marginTop: '15px' }}>{!showPopupText ? "Are you sure you want to call a volunteer to your kiosk?" : "A white-hat volunteer is on their way to assist you. The volunteer will be there in approximately 2 minutes."}</p>
                        <div className='d-flex justify-content-center'>
                            {!showPopupText && <button className='backButton' style={{marginRight: 5}} onClick={handleClosePopup}>No, Don't</button>}
                            {!showPopupText && <button className='backButton' onClick={handleYesCall}>Yes, Call</button>}
                        </div>
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