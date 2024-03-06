import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateLeft, Explore, SupportAgent, ArrowBack } from '@mui/icons-material';

export default function InsideNavigation() {

    const handleClick = () => {
        window.location.href = "/airport-information";
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
                <div className="col-10">
                    <small style={{ fontSize: "10px" }}><b>Open: </b>8:00-17:00 <b>Phone Number: </b>(888)888-8888</small>
                    <div style={{ height: "200px" }} className='border d-flex'>Map</div>
                </div>
                <div className="col-2 d-flex flex-column">
                    <button className='btn mt-5 p-1'>
                        <ZoomIn />
                    </button>
                    <button className='btn mt-1 p-1'>
                        <ZoomOut />
                    </button>
                    <button className='btn mt-1 p-1'>
                        <Explore />
                    </button>
                    <button className='btn mt-1 p-1'>
                        <RotateLeft />
                    </button>
                </div>
            </div>
            <div className='d-flex justify-content-center pt-5'>
                <button className='btn btn-outline-dark'>Send Directions to My Phone</button>
            </div>
        </div >
    )
}
