import React from 'react';
import { Caouresels } from "../components/Caouresels";
import '../scss/Header.scss';
import { NavPanel } from "../components/NavPanel";
import { useState } from "react";


const Header = () => {

  const [isFirstPage, setIsFirstPage] = useState(true);

  return (
    <div className="header_conteiner">
      <NavPanel isFirstPage={ isFirstPage } />
      <Caouresels setIsFirstPage={ setIsFirstPage } isFirstPage={ isFirstPage }/>
    </div>
  );
}

export { Header };
