import {useState, useEffect, useRef } from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrusel.css';
import { Carrusel } from './InterfaceCarrusel'; //este es el typo carrusel



const Carrusel= (props:{dataCarrusel: Carrusel[]}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 12000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(props)

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    initialSlide: currentSlide,
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
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {props.dataCarrusel.map((item) => (
          <div key={item.id} className="carousel-slide">
            <a href={item.linkDetalle}><img src={item.imagenUrl} alt={item.titulo} /></a>
            <h2 hidden>{item.titulo}</h2>
            <div hidden><p>{item.descripcion}</p></div>
          </div>
          
          
        ))}
      </Slider>
    </div>

    </div>

   

  );
};

export default Carrusel;