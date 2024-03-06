import React, { useState } from 'react';
import { Map, Marker } from "pigeon-maps"
import { ZoomIn, ZoomOut, RotateLeft, Explore, SupportAgent, ArrowBack, Star, StarBorder } from '@mui/icons-material';
import './styles.css';

export default function OutsideNavigation() {

    const handleClick = () => {
        window.location.href = "/public-information";
    }

    const [showPopup, setShowPopup] = useState(false);

    const handleClickVolunteer = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='container'>
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Directions to Destination</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <button onClick={handleClick} className="backButton">{'< Back'}</button>
                <button onClick={handleClickVolunteer} className="volunteerButton">Call a Volunteer</button>
            </div>
            {showPopup && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={handleClosePopup}></div>
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
                        <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={handleClosePopup}>X</button>
                        <p style={{marginTop: '15px'}}>A white-hat volunteer is on their way to give assistance.</p>
                    </div>
                </>
            )}

            <div className="row px-5 mt-5">
                <div className='col-3 p-0'>
                    <div className='border' style={{ height: "70px" }}>pic</div>
                    <div className='border' style={{ fontSize: "6px", paddingTop: "5px", height: "130px" }}>
                        <div>Calgary Tower</div>
                        <div>Phone: (888)888-8888</div>
                        <div>Open: 8:00-20:00</div>
                        <div>All Days</div>
                        <div>Street, City, Province</div>
                        <div>Postal Code</div>
                        <Star style={{ fontSize: "8px" }} />
                        <Star style={{ fontSize: "8px" }} />
                        <Star style={{ fontSize: "8px" }} />
                        <Star style={{ fontSize: "8px" }} />
                        <StarBorder style={{ fontSize: "8px" }} />
                    </div>
                </div>
                <div className="col-8 p-0">
                    <div style={{ height: "200px" }} className='border d-flex'>Map</div>
                </div>
                <div className="col-1 d-flex flex-column">
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
                </div>
            </div>
            <div className='d-flex justify-content-center pt-5'>
                <button className='directionsButton'>Send Directions to My Phone</button>
            </div>
        </div >
    )
}
