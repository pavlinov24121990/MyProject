import React from 'react';
import "../scss/MainCenter.scss"
import { Link } from 'react-router-dom';
import Foto from "../Foto/MainCenter/Foto.png";
import Foto2 from "../Foto/MainCenter/Foto2.png";
import Foto3 from "../Foto/MainCenter/Foto3.png";
import Foto4 from "../Foto/MainCenter/Foto4.png";
import Foto5 from "../Foto/MainCenter/Foto5.png";
import Foto6 from "../Foto/MainCenter/Foto6.png";


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
          <Link>
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
          <Link>
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
    </div>
  );
}

export { MainCenter };
