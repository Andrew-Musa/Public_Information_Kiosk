import React, { useContext, useState, showPopup } from 'react';
import { Context } from '../context';
import './styles.css';
import { Link } from 'react-router-dom';

export default function AccessibilityInformation() {

    const [accessibleMode, _] = useContext(Context);

    const [showPopup, setShowPopup] = useState(false);
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

    return (
        
        <div>
            {accessibleMode && <div style={{ height: "100px" }}></div>}
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Accessibility Information</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to="/information-type" className="backButton" style={{ textDecoration: 'none' }}>{'< Back'}</Link>
                <button className="volunteerButton" onClick={handleClickVolunteer}>Call a Volunteer</button>
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

            <p style={{ marginTop: '40px', marginLeft: '50px' }}>Information Informaiton Information Information Informaiton Information Information Informaiton Information Information Informaiton Information.</p>
            <p style={{ marginLeft: '50px' }}>Information Informaiton Information Information Informaiton Information Information Informaiton Information Information Informaiton Information.</p>
            <p style={{ marginLeft: '50px' }}>(888) 888-8888</p>
        </div>
    );
}