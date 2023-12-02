import React, { useState, useEffect } from 'react';

interface LupaProps {
  image: string;
  position: { x: number; y: number };
}

const Lupa: React.FC<LupaProps> = ({ image, position }) => {
  const [style, setStyle] = useState({
    backgroundImage: `url(${image})`,
    backgroundSize: '800% 800%',
    backgroundPosition: '50% 50%',
    width: '220px',
    height: '220px',
    position: 'absolute' as const,
    zIndex: 9999,
  });

  useEffect(() => {
    const updateStyle = () => {
      // Ajusta el valor del ratio para cambiar la velocidad del zoom
      const ratio = 0.3; // Ajusta este valor según tus necesidades

      setStyle((prevStyle) => ({
        ...prevStyle,
        backgroundPosition: `${position.x * ratio}% ${position.y * ratio}%`,
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
