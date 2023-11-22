import React from 'react';
import "../scss/MainCenter.scss"
import { Link } from 'react-router-dom';
import Foto from "../Foto/MainCenter/Foto.png";
import Foto2 from "../Foto/MainCenter/Foto2.png";
import Foto3 from "../Foto/MainCenter/Foto3.png";
import Foto4 from "../Foto/MainCenter/Foto4.png";
import Foto5 from "../Foto/MainCenter/Foto5.png";
import Foto6 from "../Foto/MainCenter/Foto6.png";
import Foto7 from "../Foto/MainCenter/Foto7.png";
import Foto8 from "../Foto/MainCenter/Foto8.png";


const MainCenter = () => {


  return (
    <div className="main-center">
      <h3>New collection</h3>
      <ul>
        <li>
          <Link to="/">
            <img src={Foto} alt="" />
            <p>
              Платье в полоску с запахом
            </p>
            <p>
              6 999 грн.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Foto2} alt="" />
            <p>
              Объемный пиджак
            </p>
            <p>
              12 499 грн.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Foto3} alt="" />
            <p>
              Комбинезон с принтом
            </p>
            <p>
              6 999 грн.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Foto4} alt="" />
            <p>
              Атласный топ-комбинация
            </p>
            <p>
              2 799 грн.
            </p>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">
            <img src={Foto5} alt="" />
            <p>
              Блейзер с декоративными пуговицами
            </p>
            <p>
              9 999 грн.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Foto6} alt="" />
            <p>
              Блейзер с декоративными пуговицами
            </p>
            <p>
              9 999 грн.
            </p>
          </Link>
        </li>
      </ul>
      <div className="main-fotter">
        <h3>Вдохновленные весной</h3>
        <div>
          <p>
            Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовки и реализации форм развития. С другой стороны реализация намеченных плановых 
          </p>
          <Link to="/">
            О бренде
          </Link>
        </div>
      </div>
      <ul>
        <li><img src={Foto7} alt="" /></li>
        <li><img src={Foto8} alt="" /></li>
      </ul>
      <h3>Успей купить</h3>
      <ul>
        <li>
          <Link to="/">
            <img src={Foto} alt="" />
            <p>
              Платье в полоску с запахом
            </p>
            <p>
              6 999 грн.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Foto2} alt="" />
            <p>
              Объемный пиджак
            </p>
            <p>
              12 499 грн.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Foto3} alt="" />
            <p>
              Комбинезон с принтом
            </p>
            <p>
              6 999 грн.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Foto4} alt="" />
            <p>
              Атласный топ-комбинация
            </p>
            <p>
              2 799 грн.
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { MainCenter };
