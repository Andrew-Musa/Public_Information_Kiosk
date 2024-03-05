import React from 'react';
import { Link } from 'react-router-dom';


export default function AccessInfoLanding() {
    return (
        <div style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '50px', left: '10px' }}>
                <Link to="/accessInfoLanding">
                    <button style={{ fontSize: '20px', padding: '5px 10px' }}>{'<-'}</button>
                </Link>
            </div>
            <div style={{ position: 'absolute', top: '50px', right: '10px' }}>
                <button style={{ fontSize: '20px', padding: '5px 10px' }}>Call Volunteer</button>
            </div>
            <p style={{ fontSize: '36px', textAlign: 'center' }}>Select the type of information you are looking for</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to="/accessInfo1">
                    <button style={{ margin: '10px 0', padding: '20px 40px', fontSize: '24px' }}>Accessible Transportation</button>
                </Link>
                <Link to="/accessInfo2">
                    <button style={{ margin: '10px 0', padding: '20px 40px', fontSize: '24px' }}>Airport Accessibility Services</button>
                </Link>
                <Link to="/page3">
                    <button style={{ margin: '10px 0', padding: '20px 40px', fontSize: '24px' }}>Button 3</button>
                </Link>
            </div>
        </div>
    );
}
