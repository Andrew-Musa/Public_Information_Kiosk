import React from 'react';
import { Link } from 'react-router-dom';

export default function AccessInfoLanding2() {
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
                <h1>Accessible curbside drop-off and pick-up zones</h1>
                <p>We offer mobility or guidance assistance from vehicle drop-off on Departures Level to your airline check-in or special assistance counter. Mobility or guidance assistance is also available upon arrival of your flight at YYC from the general public area to the curbside zone on the Arrivals Level.</p>
                <p>There are several accessible curbside zones with line painting, signage and curb ramps along departures and arrivals curb. Signage located at each accessible curbside zone also indicates contact information to request mobility or guidance assistance to or from the curb. To request assistance, contact (403) 735-1234 or email infocentre@yyc.com.</p>
                <p>On the departures level, there are accessible curbside zones for drop-off across from Doors 5, 12, 15, and 16. On the arrivals curb, there are accessible curbside zones for pick-up across from Doors 4, 6, 9 and 16.</p>
                <h2>Baggage Assistance Service</h2>
                <p>Assistance with your baggage can be requested through our Accessible Support Request Form or by calling our InfoCentre at 403-735-1234.</p>
            </div>
        </div>
    );
}
