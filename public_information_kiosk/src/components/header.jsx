import React, { useEffect, useState } from 'react'

export default function Header() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => { setTime(new Date()) }, 60000)
    }, []);
    return (
        <div className='header'>
            <div className='header-info'>
                <div>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <div>{time.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</div>
                <div>Weather: -30°C ⛅</div>
            </div>
            <div className='header-logo'>
                YYC
            </div>

        </div>
    )
}
