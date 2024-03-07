// import React, { useContext, useState } from 'react'
// import { Bento, Restaurant, RamenDining, SetMeal, RiceBowl, DinnerDining, SupportAgent, ArrowBack, Star, StarBorder } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { Context } from '../context';


// export default function Restaurants() {
//     const [showPopup, setShowPopup] = useState(false);
//     const [accessibleMode, _] = useContext(Context);

//     const handleClickVolunteer = () => {
//         setShowPopup(true);
//     };

//     const handleClosePopup = () => {
//         setShowPopup(false);
//     };

//     const [activeButton, setActiveButton] = useState('topRated');

//     const ratedClicked = () => {
//         setActiveButton('topRated');
//     };

//     const proximityClicked = () => {
//         setActiveButton('proximity');
//     };
//     return (
//         <div>
//             {accessibleMode && <div style={{ height: "100px" }}></div>}
//             <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Restaurants</h2>
//             <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
//                 <Link to='/public-information' className="backButton" style={{textDecoration: 'none'}}>{'< Back'}</Link>
//                 <button onClick={handleClickVolunteer} className="volunteerButton">Call a Volunteer</button>
//             </div>
//             {showPopup && (
//                 <>
//                     <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={handleClosePopup}></div>
//                     <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
//                         <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={handleClosePopup}>X</button>
//                         <p style={{ marginTop: '15px' }}>A white-hat volunteer is on their way to give assistance.</p>
//                     </div>
//                 </>
//             )}

//             <div className='m-4' style={{borderRadius: '5px', backgroundColor: '#EDEDED', border: '2px solid #000000'}}>
//                 <div className='d-flex align-items-stretch '>
//                     <div onClick={ratedClicked} className='flex-fill text-center' style={{width: '50%', borderRadius: '3px', cursor: 'pointer', border: '1px solid #000000', backgroundColor: activeButton === 'topRated' ? '#B82B35' : 'transparent', color: activeButton === 'topRated' ? 'white' : 'black'}}>Top Rated</div>
//                     <div onClick={proximityClicked} className='flex-fill text-center' style={{width: '50%', borderRadius: '3px', cursor: 'pointer', border: '1px solid #000000', backgroundColor: activeButton === 'proximity' ? '#B82B35' : 'transparent', color: activeButton === 'proximity' ? 'white' : 'black'}}>Closest Proximity</div>
//                 </div>
//                 <div className='p-2'>
//                     <Link className='card mt-1' to='/outside-navigation' style={{ textDecoration: "none" }}>
//                         <div className='row p-2'>
//                             <div className='col-2 d-flex justify-content-center align-items-center'>
//                                 <Bento fontSize="large" />
//                             </div>
//                             <div className='col-6' style={{ fontSize: "11px" }}>
//                                 <b>Restaurants</b>
//                                 <div>Stree, City, Province, Country</div>
//                             </div>
//                             <div className='col-4'>
//                                 <Star fontSize='small' style={{marginTop: '7px'}}/>
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <StarBorder fontSize='small' style={{marginTop: '7px'}} />
//                             </div>
//                         </div>
//                     </Link>

//                     <Link className='card mt-1' to="/outside-navigation" style={{ textDecoration: "none" }}>
//                         <div className='row p-2'>
//                             <div className='col-2 d-flex justify-content-center align-items-center'>
//                                 <Restaurant fontSize="large" />
//                             </div>
//                             <div className='col-6' style={{ fontSize: "11px" }}>
//                                 <b>Restaurants</b>
//                                 <div>Stree, City, Province, Country</div>
//                             </div>
//                             <div className='col-4'>
//                                 <Star fontSize='small' style={{marginTop: '7px'}}/>
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <StarBorder fontSize='small' style={{marginTop: '7px'}} />
//                             </div>
//                         </div>
//                     </Link>

//                     <Link className='card mt-1' to='/outside-navigation' style={{ textDecoration: "none" }}>
//                         <div className='row p-2'>
//                             <div className='col-2 d-flex justify-content-center align-items-center'>
//                                 <RamenDining fontSize="large" />
//                             </div>
//                             <div className='col-6' style={{ fontSize: "11px" }}>
//                                 <b>Restaurants</b>
//                                 <div>Stree, City, Province, Country</div>
//                             </div>
//                             <div className='col-4'>
//                                 <Star fontSize='small' style={{marginTop: '7px'}}/>
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <StarBorder fontSize='small' style={{marginTop: '7px'}} />
//                             </div>
//                         </div>
//                     </Link>

//                     <Link className='card mt-1' to='/outside-navigation' style={{ textDecoration: "none" }}>
//                         <div className='row p-2'>
//                             <div className='col-2 d-flex justify-content-center align-items-center'>
//                                 <SetMeal fontSize="large" />
//                             </div>
//                             <div className='col-6' style={{ fontSize: "11px" }}>
//                                 <b>Restaurants</b>
//                                 <div>Stree, City, Province, Country</div>
//                             </div>
//                             <div className='col-4'>
//                                 <Star fontSize='small' style={{marginTop: '7px'}}/>
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <StarBorder fontSize='small' style={{marginTop: '7px'}} />
//                             </div>
//                         </div>
//                     </Link>

//                     <Link className='card mt-1' to='/outside-navigation' style={{ textDecoration: "none" }}>
//                         <div className='row p-2'>
//                             <div className='col-2 d-flex justify-content-center align-items-center'>
//                                 <RiceBowl fontSize="large" />
//                             </div>
//                             <div className='col-6' style={{ fontSize: "11px" }}>
//                                 <b>Restaurants</b>
//                                 <div>Stree, City, Province, Country</div>
//                             </div>
//                             <div className='col-4'>
//                                 <Star fontSize='small' style={{marginTop: '7px'}}/>
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <StarBorder fontSize='small' style={{marginTop: '7px'}} />
//                             </div>
//                         </div>
//                     </Link>

//                     <Link className='card mt-1' to='/outside-navigation' style={{ textDecoration: "none" }}>
//                         <div className='row p-2'>
//                             <div className='col-2 d-flex justify-content-center align-items-center'>
//                                 <DinnerDining fontSize="large" />
//                             </div>
//                             <div className='col-6' style={{ fontSize: "11px" }}>
//                                 <b>Restaurants</b>
//                                 <div>Stree, City, Province, Country</div>
//                             </div>
//                             <div className='col-4'>
//                                 <Star fontSize='small' style={{marginTop: '7px'}}/>
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <Star fontSize='small' style={{marginTop: '7px'}} />
//                                 <StarBorder fontSize='small' style={{marginTop: '7px'}} />
//                             </div>
//                         </div>
//                     </Link>
//                 </div>


//             </div>

//         </div >
//     )
// }







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

    const handleClickVolunteer = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
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

    return (
        <div>
            {accessibleMode && <div style={{ height: "100px" }}></div>}
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Restaurants</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <Link to='/public-information' className="backButton" style={{textDecoration: 'none'}}>{'< Back'}</Link>
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

            <div className='m-4' style={{borderRadius: '5px', backgroundColor: '#EDEDED', border: '2px solid #000000'}}>
                <div className='d-flex align-items-stretch '>
                    <div onClick={ratedClicked} className='flex-fill text-center' style={{width: '50%', borderRadius: '3px', cursor: 'pointer', border: '1px solid #000000', backgroundColor: activeButton === 'topRated' ? '#B82B35' : 'transparent', color: activeButton === 'topRated' ? 'white' : 'black'}}>Top Rated</div>
                    <div onClick={proximityClicked} className='flex-fill text-center' style={{width: '50%', borderRadius: '3px', cursor: 'pointer', border: '1px solid #000000', backgroundColor: activeButton === 'proximity' ? '#B82B35' : 'transparent', color: activeButton === 'proximity' ? 'white' : 'black'}}>Closest Proximity</div>
                </div>
                <div className='p-2'>
                    <button className='filterButton' style={{display: 'flex', border: '2px solid #B82B35', borderRadius: '5px', backgroundColor: '#EDEDED', color: '#B82B35', paddingRight: '10px', paddingLeft: '10px', paddingTop: '7px'}}><FaFilter fontSize='small' /> <h1 style={{fontSize: '12px', marginLeft: '5px'}}>Filter</h1></button>
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
