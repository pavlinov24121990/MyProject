import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Body from "../Foto/NavPanel/Body.png";
import Asdf from "../Foto/NavPanel/Asdf.jpeg";
import BackMain from "../Foto/NavPanel/BackMain.png";



  
const Caouresels = ({ setIsFirstPage, isFirstPage }) => {

  const handleSelect = (selectedIndex) => {
    setIsFirstPage(selectedIndex === 0);
  };

    return (
      <div>
        <Carousel onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100 fullscreen-image" src={Asdf} alt="Foto" />
            <Carousel.Caption className="first-page">
              <h3 className="first-page-caruosel">hello spring<br />
                2024
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={Body} alt="Foto" />
            <Carousel.Caption>
              <p>Весна — лето 2024</p>
              <h3>with love,<br />
                to you
              </h3>
              <button>
                Перейти в каталог
              </button>
            </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={BackMain} alt="Foto" />
            <Carousel.Caption>
              <p>Весна — лето 2024</p>
              <h3>with love,<br />
                to you
              </h3>
              <button>
                Перейти в каталог
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
}

export {Caouresels}