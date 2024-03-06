import React, { useState } from 'react'
import { Bento, Restaurant, RamenDining, SetMeal, RiceBowl, DinnerDining, SupportAgent, ArrowBack, Star, StarBorder } from '@mui/icons-material';


export default function Restaurants() {
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
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Restaurants</h2>
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

            <div className='border m-4'>
                <div className='d-flex align-items-stretch '>
                    <div className='bg-danger text-white flex-fill text-center'>Top Rated</div>
                    <div className='flex-fill text-center'>Closest Proximity</div>
                </div>
                <div className='p-2'>
                    <div className='card mt-1' onClick={() => { window.location.href = "./outside-navigation" }}>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <Bento fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1' onClick={() => { window.location.href = "./outside-navigation" }}>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <Restaurant fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1' onClick={() => { window.location.href = "./outside-navigation" }}>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <RamenDining fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1' onClick={() => { window.location.href = "./outside-navigation" }}>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <SetMeal fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1' onClick={() => { window.location.href = "./outside-navigation" }}>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <RiceBowl fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>

                    <div className='card mt-1' onClick={() => { window.location.href = "./outside-navigation" }}>
                        <div className='row p-2'>
                            <div className='col-2 d-flex justify-content-center align-items-center'>
                                <DinnerDining fontSize="large" />
                            </div>
                            <div className='col-6' style={{ fontSize: "11px" }}>
                                <b>Restaurants</b>
                                <div>Stree, City, Province, Country</div>
                            </div>
                            <div className='col-4'>
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <Star fontSize='small' />
                                <StarBorder fontSize='small' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    )
}
