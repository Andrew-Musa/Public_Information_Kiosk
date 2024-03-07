import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context';
import './styles.css';
import { Link } from 'react-router-dom';

const languages = ['Please Select Language', '请选择语言', 'Por favor seleccione idioma', 'Veuillez sélectionner la langue', 'الرجاء اختيار اللغة', 'براہ کرم زبان منتخب کریں', '言語を選択してください', 'ਕਿਰਪਾ ਕਰਕੇ ਭਾਸ਼ਾ ਚੁਣੋ'];

export default function Landing() {
    const [languageIndex, setLanguageIndex] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [selectLanguageText, setSelectLanguageText] = useState('Please Select Language');
    const [accesibleMode, setAccesibleMode] = useContext(Context);

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

    const accessibilityToggle = () => {
        setAccesibleMode(true);
    }

    const standardToggle = () => {
        setAccesibleMode(false);
    }

    return (
        <div>
            <h2 className="bounce-wave" style={{ textAlign: 'center', marginTop: '70px' }}>Welcome to the City of Calgary!</h2>

            {!accesibleMode && <div className="text-container">
                <h3>{selectLanguageText}</h3>
            </div>}

            {accesibleMode && <div>
                <div style={{ textAlign: 'center', marginTop: '70px' }}>
                    <button onClick={standardToggle} className="standardModeButton">Standard View</button>
                </div>

                <div className="text-container ">
                    <h3>{selectLanguageText}</h3>
                </div>
            </div>}
            <div className="oval-container">
                <div className="oval-row">
                    <Link to={"./information-type"} className="oval" style={{textDecoration: 'none'}}>English</Link>
                    <Link to={"./information-type"} className="oval" style={{textDecoration: 'none'}}>普通话</Link>
                    <Link to={"./information-type"} className="oval" style={{textDecoration: 'none'}}>Español</Link>
                    <Link to={"./information-type"} className="oval" style={{textDecoration: 'none'}}>Français</Link>
                </div>
                <div className="oval-row">
                    <Link to={"./information-type"} className="oval" style={{textDecoration: 'none'}}>العربية</Link>
                    <Link to={"./information-type"} className="oval" style={{textDecoration: 'none'}}>اردو</Link>
                    <Link to={"./information-type"} className="oval" style={{textDecoration: 'none'}}>日本語</Link>
                    <Link to={"./information-type"} className="oval" style={{textDecoration: 'none'}}>ਪੰਜਾਬੀ</Link>
                </div>
            </div>

            {!accesibleMode && <div style={{ textAlign: 'center', marginTop: '70px' }}>
                <button onClick={accessibilityToggle} className="accessModeButton"></button>
            </div>}

        </div>
    );
}




