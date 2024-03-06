import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context';
import './styles.css';
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';

export default function InformationType() {
    const [searchTerm, setSearchTerm] = useState('');
    const [accessibleMode, _] = useContext(Context);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle search logic here, e.g., filtering data based on the search term
        console.log('Search term:', searchTerm);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handleClickVolunteer = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            {accessibleMode && <div style={{ height: "101px" }}></div>}
            <h3 style={{ textAlign: 'center', marginTop: '70px', marginBottom: '0' }}>Select Type of Information</h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to="/" className="backButton" style={{textDecoration: 'none'}}>{'< Back'}</Link>
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

            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div><h1 style={{ fontSize: '12px', marginTop: '15px', fontWeight: 'bold' }}>Airport Information</h1></div>
                    <Link to={"/airport-information"} className="infoButton"></Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div><h1 style={{ fontSize: '12px', marginTop: '15px', fontWeight: 'bold' }}>Calgary Information</h1></div>
                    <Link to={"/public-information"} className="infoButton2"></Link>
                </div>
            </div>


        </div>
    );
}

