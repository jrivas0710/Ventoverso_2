 import "./Carrusel.css"

export const Carrusel= () => {
  return (
    <section className="carrusel-grid">
      <div id="conteItemsCarrusel">
        <div className="carrusel-item " id="enlaceItem1">
          <div className="tarjetas-carrusel tarjeta-carrusel-1"></div>
          <div className="flechas-carrusel">
            <a href="#enlaceItem3">
             {/*  <i>
                <img
                  src="./images/flecha-izquierda.png"
                  alt="flecha-izquierda"
                  className="flecha"
                />
              </i> */}
            </a>
            <a href="#enlaceItem2">
              <i>
                <img
                  src="./images/flecha-derecha.png"
                  alt="flecha-derecha"
                  className="flecha"
                />
              </i>
            </a>
          </div>
        </div>
        <div className="carrusel-item" id="enlaceItem2">
          <div className="tarjetas-carrusel tarjeta-carrusel-3"></div>
          <div className="flechas-carrusel">
            <a href="#enlaceItem2">
              <i>
                <img
                  src="./images/flecha-izquierda.png"
                  alt="flecha-izquierda"
                  className="flecha"
                />
              </i>
            </a>
            <a href="#enlaceItem3">
              <i>
                <img
                  src="./images/flecha-derecha.png"
                  alt="flecha-derecha"
                  className="flecha"
                />
              </i>
            </a>
          </div>
        </div>
        <div className="carrusel-item " id="enlaceItem3">
          <div className="tarjetas-carrusel tarjeta-carrusel-3"></div>
          <div className="flechas-carrusel">
            <a href="#enlaceItem3">
              <i>
                <img
                  src="./images/flecha-izquierda.png"
                  alt="flecha-izquierda"
                  className="flecha"
                />
              </i>
            </a>
            <a href="#enlaceItem1">
              <i>
                <img
                  src="./images/flecha-derecha.png"
                  alt="flecha-derecha"
                  className="flecha"
                />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
 

 


//AQUI EMPIEZA EL COMPONENTE CARRUSEL. 

/* 
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  dataCarrusel: { image: string; text: string }[];
}

const Carrusel: React.FC<CarouselProps> = ({ dataCarrusel }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <Slider {...settings} slickGoTo={currentIndex}> 
        {dataCarrusel.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.image} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </Slider>
      <div className="navigation">
        <button onClick={() => goToSlide(currentIndex - 1)}>Anterior</button>
        <button onClick={() => goToSlide(currentIndex + 1)}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carrusel; */
