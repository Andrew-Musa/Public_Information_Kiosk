import React, { useEffect, useState } from 'react'

const Slider = ({ imageDataGroup1, imageDataGroup2 }) => {
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
        <button onClick={handlePrevGroup}>Previous Group</button>
        <button onClick={handleNextGroup}>Next Group</button>
        {currentImageData.map((row, rowIndex) => (
          <div key={rowIndex} className="slider-row">
            {row.map((item, index) => (
              <div key={index} className="slider-item">
                <img src={item.image} alt={item.alt} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  


export default Slider