import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import { Bento, Restaurant, RamenDining, SetMeal, RiceBowl, DinnerDining, Star, StarBorder } from '@mui/icons-material';
import { FaFilter } from 'react-icons/fa';

export default function Restaurants() {
    const [showPopup, setShowPopup] = useState(false);
    const [accessibleMode, _] = useContext(Context);
    const [activeButton, setActiveButton] = useState('topRated');
    const [restaurants, setRestaurants] = useState([
        { icon: <Bento fontSize="large" />, name: 'Restaurant 1', location: 'Street 1, City 1, Province 1' },
        { icon: <Restaurant fontSize="large" />, name: 'Restaurant 2', location: 'Street 2, City 2, Province 2' },
        { icon: <RamenDining fontSize="large" />, name: 'Restaurant 3', location: 'Street 3, City 3, Province 3' },
        { icon: <SetMeal fontSize="large" />, name: 'Restaurant 4', location: 'Street 4, City 4, Province 4' },
        { icon: <RiceBowl fontSize="large" />, name: 'Restaurant 5', location: 'Street 5, City 5, Province 5' }
    ]);

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

    const ratedClicked = () => {
        if (activeButton !== 'topRated') {
            setActiveButton('topRated');
            setRestaurants(prevRestaurants => [...prevRestaurants].reverse());
        }
    };

    const proximityClicked = () => {
        if (activeButton !== 'proximity') {
            setActiveButton('proximity');
            setRestaurants(prevRestaurants => [...prevRestaurants].reverse());
        }
    };

    const [showFilterPopup, setShowFilterPopup] = useState(false);

    const handleClickFilter = () => {
        setShowFilterPopup(true);
    };

    const handleCloseFilter = () => {
        setShowFilterPopup(false);
    };

    return (
        <div>
            {accessibleMode && <div style={{ height: "100px" }}></div>}
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Restaurants</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to='/restaurants-information' className="backButton" style={{textDecoration: 'none'}}>{'< Back'}</Link>
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

            <div className='m-4' style={{borderRadius: '5px', backgroundColor: '#EDEDED', border: '2px solid #000000'}}>
                <div className='d-flex align-items-stretch '>
                    <div onClick={ratedClicked} className='flex-fill text-center' style={{width: '50%', borderRadius: '3px', cursor: 'pointer', border: '1px solid #000000', backgroundColor: activeButton === 'topRated' ? '#B82B35' : 'transparent', color: activeButton === 'topRated' ? 'white' : 'black'}}>Top Rated</div>
                    <div onClick={proximityClicked} className='flex-fill text-center' style={{width: '50%', borderRadius: '3px', cursor: 'pointer', border: '1px solid #000000', backgroundColor: activeButton === 'proximity' ? '#B82B35' : 'transparent', color: activeButton === 'proximity' ? 'white' : 'black'}}>Closest Proximity</div>
                </div>
                <div className='p-2'>
                    <button className='filterButton' style={{display: 'flex', border: '2px solid #B82B35', borderRadius: '5px', backgroundColor: '#EDEDED', color: '#B82B35', paddingRight: '10px', paddingLeft: '10px', paddingTop: '7px'}} onClick={handleClickFilter}><FaFilter fontSize='small' /> <h1 style={{fontSize: '12px', marginLeft: '5px'}}>Filter</h1></button>
                    {showFilterPopup && (
                        <>
                            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={handleCloseFilter}></div>
                            <div style={{ position: 'fixed', top: '50%', left: '50%', width: '250px', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
                                <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={handleCloseFilter}>X</button>
                                <p style={{ marginTop: '15px' }}>Pricing</p>
                                <div className='d-flex justify-content-center'>
                                    <button className='backButton' style={{marginRight: 5}}>$</button>
                                    <button className='backButton'style={{marginRight: 5}}>$$</button>
                                    <button className='backButton'>$$$</button>
                                </div>
                                <p style={{ marginTop: '15px' }}>Neighbourhood</p>
                                <div className='d-flex justify-content-center'>
                                    <button className='backButton' style={{marginRight: 5}}>NW</button>
                                    <button className='backButton'style={{marginRight: 5}}>NE</button>
                                    <button className='backButton'style={{marginRight: 5}}>SW</button>
                                    <button className='backButton'>SE</button>
                                </div>
                                <p style={{ marginTop: '15px' }}>Availability</p>
                                <button className='backButton'style={{marginRight: 5, marginBottom: 20}}>Dine-in</button>
                                <button className='backButton'style={{marginRight: 5}}>Takeout</button>
                                <button className='backButton'>Delivery</button>
                            </div>
                        </>
                    )}
                    {restaurants.map((restaurant, index) => (
                        <Link key={index} className='card mt-1' to='/outside-navigation' style={{ textDecoration: "none" }}>
                            <div className='row p-2'>
                                <div className='col-2 d-flex justify-content-center align-items-center'>
                                    {restaurant.icon}
                                </div>
                                <div className='col-6' style={{ fontSize: "11px" }}>
                                    <b>{restaurant.name}</b>
                                    <div>{restaurant.location}</div>
                                </div>
                                <div className='col-4'>
                                    <Star fontSize='small' style={{marginTop: '5px', color: 'orange'}}/>
                                    <Star fontSize='small' style={{marginTop: '5px', color: 'orange'}} />
                                    <Star fontSize='small' style={{marginTop: '5px', color: 'orange'}} />
                                    <Star fontSize='small' style={{marginTop: '5px', color: 'orange'}} />
                                    <StarBorder fontSize='small' style={{marginTop: '5px', color: 'orange'}} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
