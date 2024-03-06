import React, { useContext, useState } from 'react';
import { ZoomIn, ZoomOut, RotateLeft, Explore, SupportAgent, ArrowBack } from '@mui/icons-material';
import { Context } from '../context'
import './styles.css';
import { Link } from 'react-router-dom';

export default function InsideNavigation() {
    const [showPopup, setShowPopup] = useState(false);
    const [accessibleMode, _] = useContext(Context);

    const handleClickVolunteer = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const [showPopup2, setShowPopup2] = useState(false);

    const handleDirections = () => {
        setShowPopup2(true);
    };

    const handleClosePopup2 = () => {
        setShowPopup2(false);
    };

    return (
        <div className='container'>
            {accessibleMode && <div style={{ height: "100px" }}></div>}
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Directions to Destination</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to="/airport-information" className="backButton">{'< Back'}</Link>
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

            {/* <div>
                <button className='mapButtons'>
                    <ZoomIn />
                </button>
                <button className='mapButtons'>
                    <ZoomOut />
                </button>
                <button className='mapButtons'>
                    <Explore />
                </button>
                <button className='mapButtons'>
                    <RotateLeft />
                </button>
            </div> */}

            <div className='mapContainer'>
                <ZoomIn style={{ color: '#B82B35', backgroundColor: 'white', borderRadius: '5px', marginTop: '170px', position: 'absolute', marginLeft: '345px', cursor: 'pointer', border: '1px solid black' }} />
                <ZoomOut style={{ color: '#B82B35', backgroundColor: 'white', borderRadius: '5px', marginTop: '170px', position: 'absolute', marginLeft: '315px', cursor: 'pointer', border: '1px solid black' }} />
                <Explore style={{ color: '#B82B35', backgroundColor: 'white', borderRadius: '5px', marginTop: '170px', position: 'absolute', marginLeft: '285px', cursor: 'pointer', border: '1px solid black' }} />
                <RotateLeft style={{ color: '#B82B35', backgroundColor: 'white', borderRadius: '5px', marginTop: '170px', position: 'absolute', marginLeft: '255px', cursor: 'pointer', border: '1px solid black' }} />
            </div>
            <p style={{ fontSize: '10px', marginLeft: '22px', fontWeight: 'bold', marginTop: '5px' }}>Open Hours: 8:00 AM-4:00 PM (MST) phone: (888) 888-8888.</p>

            <div className='d-flex justify-content-center pt-5'>
                <button onClick={handleDirections} className='directionsButton'>Send Directions to My Phone</button>
            </div>
            {showPopup2 && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={handleClosePopup2}></div>
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
                        <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={handleClosePopup2}>X</button>
                        <img className='qrImg' />
                    </div>
                </>
            )}
        </div >
    )
}
