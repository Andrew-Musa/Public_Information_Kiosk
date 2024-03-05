import React from 'react';
import { Link } from 'react-router-dom';


export default function AccessInfo1() {
    return (
        <div style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '50px', left: '10px' }}>
                <Link to="/accessInfoLanding">
                    <button style={{ border: 'none', background: 'none', fontSize: '20px', padding: '5px 10px', display: 'flex', alignItems: 'center' }}>
                        <span>{'<'}</span>
                        <span style={{ marginLeft: '5px' }}>Back</span>
                    </button>
                </Link>
            </div>
            <div style={{ marginTop: '0px', marginLeft: '50px', textAlign: 'center' }}>
                <h1>Accessible Transportation</h1>
                <p>
                    Many of the taxi operators at Calgary International Airport offer accessible vehicles and accept the Access Calgary Extra Card. Please contact one of the taxi companies operating from YYC for more information.
                </p>
                <h2>Calgary Transit Access</h2>
                <p>
                    Non-folding / non-collapsible mobility aids can be accommodated by Care Calgary, Southland, and Calgary Access Buses.
                    Please visit Calgary Transit’s Accessibility page for more information on planning ahead, and riding the bus or CTrain.
                    <a href="https://www.yyc.com/en-us/travellerinfo/transportation/transit/Pages/default.aspx">Click here</a> for general transit info at YYC.
                </p>
                <h2>Wheelchair Accessible Vehicle (WAV) Calgary</h2>
                <p>
                    Non-folding / non-collapsible mobility aids can be accommodated by all WAV vehicles. They can also accommodate scooters.
                </p>
                <h2>Rental Cars and Hotel Shuttles</h2>
                <p>
                    Rental car companies and hotel shuttles provide their own means of accessibility. To ensure availability of accessible modes of transportation, contact your ground transportation provider directly for more information.
                </p>
            </div>
        </div>
    );
}
