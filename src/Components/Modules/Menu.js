
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

import './Menu.scss';

export default function Menu() {
  const { setModule } = useContext(AppContext)

  return (
    <div id="menu" className="pb-module">
      <div className="nav-menu">
        <a onClick={() => { setModule('timer') }} className="nav-btn timer"> טיימר </a>
        <a onClick={() => { setModule('stopper') }} className="nav-btn stopper"> סטופר </a>
        <a onClick={() => { setModule('tabata') }} className="nav-btn tabata"> אימון מחזורי </a>
      </div>
    </div>

  );
}