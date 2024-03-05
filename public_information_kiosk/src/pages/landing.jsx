import React, { useState, useEffect } from 'react';
import './styles.css';

const languages = ['Please Select Language', '请选择语言', 'Por favor seleccione idioma', 'Veuillez sélectionner la langue', 'الرجاء اختيار اللغة', 'براہ کرم زبان منتخب کریں', '言語を選択してください', 'ਕਿਰਪਾ ਕਰਕੇ ਭਾਸ਼ਾ ਚੁਣੋ'];

export default function Landing() {
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
        window.location.href = "/InformationType";
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '70px' }}>Welcome to the City of Calgary!</h2>

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
        </div>
    );
}




