import React, { useContext, useState } from 'react';
import { Map, Marker } from "pigeon-maps"
import { ZoomIn, ZoomOut, RotateLeft, Explore, SupportAgent, ArrowBack, Star, StarBorder } from '@mui/icons-material';
import './styles.css';
import { Context } from '../context';
import { Link } from 'react-router-dom';

export default function OutsideNavigation() {
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
        <div>
            {accessibleMode && <div style={{ height: "100px" }}></div>}
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Directions to Destination</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to="/public-information" className="backButton" style={{textDecoration: 'none'}}>{'< Back'}</Link>
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

            <div className='mapContainer2'>
                <div className='destinationInfo'>
                    <img className='destinationImg' />
                    <h1 style={{ fontSize: '10px', marginLeft: '10px', marginBottom: '0', marginTop: '5px' }}>Restaurant Name</h1>
                    <Star style={{ fontSize: '10px', marginTop: '0px', marginLeft: '25px' }} />
                    <Star style={{ fontSize: '10px', marginTop: '0px' }} />
                    <Star style={{ fontSize: '10px', marginTop: '0px' }} />
                    <Star style={{ fontSize: '10px', marginTop: '0px' }} />
                    <Star style={{ fontSize: '10px', marginTop: '0px' }} />
                    <p style={{ fontSize: '8px', textAlign: 'left', marginLeft: '5px' }}>Description of how yummy, tasty, and delicious, the food is.</p>
                </div>
                <img className='outsideMap' />
                <ZoomIn style={{ color: '#B82B35', backgroundColor: 'white', borderRadius: '5px', marginTop: '170px', position: 'absolute', marginLeft: '345px', cursor: 'pointer', border: '1px solid black' }} />
                <ZoomOut style={{ color: '#B82B35', backgroundColor: 'white', borderRadius: '5px', marginTop: '170px', position: 'absolute', marginLeft: '315px', cursor: 'pointer', border: '1px solid black' }} />
                <Explore style={{ color: '#B82B35', backgroundColor: 'white', borderRadius: '5px', marginTop: '170px', position: 'absolute', marginLeft: '285px', cursor: 'pointer', border: '1px solid black' }} />
                <RotateLeft style={{ color: '#B82B35', backgroundColor: 'white', borderRadius: '5px', marginTop: '170px', position: 'absolute', marginLeft: '255px', cursor: 'pointer', border: '1px solid black' }} />
            </div>

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
