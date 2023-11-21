import React from 'react';
import Caouresels from "../components/Caouresels";
import '../scss/Header.scss';
import { NavPanel } from "../components/NavPanel";


const Header = () => {
  return (
    <div className="header_conteiner">
      <NavPanel />
      <Caouresels />
    </div>
  );
}

export { Header };
