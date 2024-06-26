import React, { useContext, useState } from 'react';
import "./ServiceSelection.css";
import Slider from '../components/slider';
import SearchBar from '../components/searchBar';
import Attractions from '../img/Attractions.png';
import Restaurant from '../img/Restaurants.png';
import Entertainments from '../img/entertaments.png';
import Accommodations from '../img/Accomondations.png';
import Transportations from '../img/Transportation.jpeg';
import shopping from '../img/shopping.png';
import museum from '../img/museum.png';
import landmark_logo from '../img/landmark_logo.png';
import Housing from '../img/housing_final.png';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import { useIdleTimer } from 'react-idle-timer';
import TimeoutPop from '../components/timeoutPop';

export default function PublicInformation() {
    const imageDataGroup1 = [
        [
            { image: Attractions, alt: 'Image 1_1', text: 'Attractions', href: "./Attractions" },
            { image: Restaurant, alt: 'Image 1_2', text: 'Cuisines', href: "/restaurants-information" },
            { image: Entertainments, alt: 'Ima', text: 'Cinema', href: "./Enterntainment" },
            { image: Housing, alt: 'Image 1_4', text: 'Housing', href: "./Housing" }
        ],
        [
            { image: Transportations, alt: 'Image 1_5', text: 'Transit', href: "./Transportation" },
            { image: shopping, alt: 'Image 1_6', text: 'Shopping', href: "./Shopping" },
            { image: landmark_logo, alt: 'landmark_logo', text: 'Landmarks', href: "./Landmarks" },
            { image: museum, alt: 'Image 1_4', text: 'Museum', href: "./Museums" }
        ]
    ];

    const imageDataGroup2 = []

    const [showPopup, setShowPopup] = useState(false);
    const [accessibleMode, _] = useContext(Context);
    const [showSearchResults, setShowSearchResults] = useState(false);

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

    const [showIdlePopup, setShowIdlePopup] = useState(false);

    const onIdle = () => {
        setShowIdlePopup(true);
    }

    useIdleTimer({
        onIdle,
        timeout: 10_000,
        throttle: 500
    })

    return (
        <div>
            {accessibleMode && <div style={{ height: "100px" }}></div>}
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>What are you Looking For?</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to="/information-type" className="backButton" style={{ textDecoration: 'none' }}>{'< Back'}</Link>
                <button onClick={handleClickVolunteer} className="volunteerButton">Call a Volunteer</button>
            </div>

            {showIdlePopup && <TimeoutPop setShowIdlePopup={setShowIdlePopup} />}

            {showPopup && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={handleClosePopup}></div>
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
                        {showPopupText && <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={handleClosePopup}>X</button>}
                        <p style={{ marginTop: '15px' }}>{!showPopupText ? "Are you sure you want to call a volunteer to your kiosk?" : "A white-hat volunteer is on their way to assist you. The volunteer will be there in approximately 2 minutes."}</p>
                        <div className='d-flex justify-content-center'>
                            {!showPopupText && <button className='backButton' style={{ marginRight: 5 }} onClick={handleClosePopup}>No, Don't</button>}
                            {!showPopupText && <button className='backButton' onClick={handleYesCall}>Yes, Call</button>}
                        </div>
                    </div>
                </>
            )}

            <div className="search-bar-container">
                <SearchBar setShowSearchResults={setShowSearchResults} accessibleMode={accessibleMode} />
            </div>


            {!showSearchResults && <div className="slider-container">
                <Slider imageDataGroup1={imageDataGroup1} imageDataGroup2={imageDataGroup2} />
            </div>}

        </div>
    )
}