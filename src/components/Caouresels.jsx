import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Body from "../Foto/NavPanel/Body.png";
import Asdf from "../Foto/NavPanel/Asdf.jpeg";
import BackMain from "../Foto/NavPanel/BackMain.png";


export default class Caouresels extends Component {
  render() {
    return (
      <div>
        <Carousel interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100 fullscreen-image" src={Body} alt="Foto" />
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
            <img className="d-block w-100" src={Asdf} alt="Foto" />
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
}