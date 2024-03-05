import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./slider.css"

const Slider = ({ imageDataGroup1, imageDataGroup2, destination }) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const currentImageData = currentGroupIndex === 0 ? imageDataGroup1 : imageDataGroup2;

  const handlePrevGroup = () => {
    setCurrentGroupIndex(currentGroupIndex === 0 ? 1 : 0);
  };

  const handleNextGroup = () => {
    setCurrentGroupIndex(currentGroupIndex === 0 ? 1 : 0);
  };

  return (
    <div className="slider">
      <button className='img-slider-btn' style={{ left: 0 }} onClick={handlePrevGroup}><IoIosArrowBack /></button>
      <button className='img-slider-btn' style={{ right: 0 }} onClick={handleNextGroup}><IoIosArrowForward /></button>
      {currentImageData.map((row, rowIndex) => (
        <div key={rowIndex} className="slider-row">
          {row.map((item, index) => (
            <div key={index} className="slider-item" onClick={() => { window.location.href = destination }}>
              <img src={item.image} alt={item.alt} className="img-slider-img" />
              <p className='img-slider-text'>{item.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};



export default Slider