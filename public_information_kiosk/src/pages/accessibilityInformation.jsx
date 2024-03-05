import React from 'react';
import './styles.css';

export default function AccessibilityInformation() {

    const handleClick = () => {
        window.location.href = "/";
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Information About Topic</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 50px 0' }}>
                <button onClick={handleClick} className="backButton">{'< Back'}</button>
                <button className="volunteerButton">Call a Volunteer</button>
            </div>

            <p style={{ marginTop: '40px', marginLeft: '50px' }}>Information Informaiton Information Information Informaiton Information Information Informaiton Information Information Informaiton Information.</p>
            <p style={{ marginLeft: '50px' }}>Information Informaiton Information Information Informaiton Information Information Informaiton Information Information Informaiton Information.</p>
            <p style={{ marginLeft: '50px' }}>(888) 888-8888</p>
        </div>
    );
}