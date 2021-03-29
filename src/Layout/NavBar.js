
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Clock from '../Components/Clock';

export default function NavBar() {
  const { module, setModule, moduleName } = useContext(AppContext)

  const renderBackButton = () => {
    if (module === 'menu')
      return <></>;
    else
      return <a onClick={() => setModule('menu')} className="show-menu"> חזור </a>;
  };

  return (
    <>
    <div className="nav">
      <Clock />
      {renderBackButton()}
    </div>
      <h2 id="title">{moduleName}</h2>
    </>
  );
}