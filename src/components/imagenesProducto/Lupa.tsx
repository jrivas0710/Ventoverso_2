// Lupa.js
import React, { useState, useEffect } from 'react';

const Lupa = ({ image, position }) => {
  const [style, setStyle] = useState({
    backgroundImage: `url(${image})`,
    backgroundSize: '800% 800%',
    backgroundPosition: '50% 50%',
    width: '200px',
    height: '200px',
    position: 'absolute',
    border: '2px solid #000',
    zIndex: 9999,
  });

  useEffect(() => {
    const updateStyle = () => {
      setStyle((prevStyle) => ({
        ...prevStyle,
        backgroundPosition: `${position.x}% ${position.y}%`,
      }));
    };

    window.addEventListener('mousemove', updateStyle);

    return () => {
      window.removeEventListener('mousemove', updateStyle);
    };
  }, [position]);

  return <div style={style}></div>;
};

export default Lupa;
