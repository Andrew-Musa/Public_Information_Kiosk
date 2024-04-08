import React from 'react';
import { useIdleTimer } from 'react-idle-timer/legacy';


export default function TimeoutPop({ setShowIdlePopup }) {
    const onIdle = () => {
        window.location.href = "/Public_Information_Kiosk";
    }

    useIdleTimer({
        onIdle,
        timeout: 10_000,
        throttle: 500
    })
    return (
        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={() => { setShowIdlePopup(false) }}></div>
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
                <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={() => { setShowIdlePopup(false) }}>X</button>
                <p style={{ marginTop: '15px' }}>Are you still using the kiosk?</p>
                <div className='d-flex justify-content-center'>
                    <button className='backButton' style={{ marginRight: 5 }} onClick={() => { setShowIdlePopup(false) }}>Keep using</button>
                </div>
            </div>
        </>
    )
}
