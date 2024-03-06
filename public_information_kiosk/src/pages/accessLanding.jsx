import React, { useState, useEffect } from 'react';
import './styles.css';

const languages = ['Please Select Language', '请选择语言', 'Por favor seleccione idioma', 'Veuillez sélectionner la langue', 'الرجاء اختيار اللغة', 'براہ کرم زبان منتخب کریں', '言語を選択してください', 'ਕਿਰਪਾ ਕਰਕੇ ਭਾਸ਼ਾ ਚੁਣੋ'];

export default function AccessLanding() {
    const [languageIndex, setLanguageIndex] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [selectLanguageText, setSelectLanguageText] = useState('Please Select Language');

    useEffect(() => {
        const interval = setInterval(() => {
            setLanguageIndex(prevIndex => (prevIndex + 1) % languages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setSelectedLanguage(languages[languageIndex]);
        setSelectLanguageText(languages[languageIndex]);
    }, [languageIndex]);

    const handleClick = () => {
        window.location.href = "/information-type";
    }

    const standardToggle = () => {
        window.location.href = "/";
    }

    const [showPopup, setShowPopup] = useState(false);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 15000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (showPopup) {
                window.location.href = "/";
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [showPopup]);

    const handleStayHere = () => {
        setShowPopup(false);
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            setShowPopup(true);
        }, 15000);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <h2 className="bounce-wave" style={{ textAlign: 'center', marginTop: '70px' }}>Welcome to the City of Calgary!</h2>

            <div style={{ textAlign: 'center', marginTop: '70px' }}>
                <button onClick={standardToggle} className="standardModeButton">Standard View</button>
            </div>

            <div className="text-container">
                <h3>{selectLanguageText}</h3>
            </div>

            <div className="oval-container">
                <div className="oval-row">
                    <div onClick={handleClick} className="oval">English</div>
                    <div onClick={handleClick} className="oval">普通话</div>
                    <div onClick={handleClick} className="oval">Español</div>
                    <div onClick={handleClick} className="oval">Français</div>
                </div>
                <div className="oval-row">
                    <div onClick={handleClick} className="oval">العربية</div>
                    <div onClick={handleClick} className="oval">اردو</div>
                    <div onClick={handleClick} className="oval">日本語</div>
                    <div onClick={handleClick} className="oval">ਪੰਜਾਬੀ</div>
                </div>
            </div>

            
            {/* {showPopup && (
                <div className="popup">
                    <p>Are you still there?</p>
                    <button onClick={handleStayHere}>I'm still here</button>
                </div>
            )} */}

            {showPopup && (
                <>
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9998' }} onClick={handleClosePopup}></div>
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: '9999' }}>
                        {/* <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#B82B35' }} onClick={handleClosePopup}>X</button> */}
                        <div className="popup" style={{alignItems: 'center'}}>
                            <p>Are you still there?</p>
                            <button onClick={handleStayHere} style={{backgroundColor: '#EDEDED', color: '#B82B35', border: '2px solid #B82B35', borderRadius: '5px', marginLeft: '17px'}}>I'm still here</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}




