import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrusel.css'; // Asegúrate de tener un archivo CSS para estilos personalizados

interface CarouselProps {
  images: string[];
}

const Carrusel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='container'>

    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="carousel-slide">
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>

    </div>
  );
};

export default Carrusel;