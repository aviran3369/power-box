
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Menu from '../Components/Modules/Menu';
import Stopper from '../Components/Modules/Stopper';
import Tabata from '../Components/Modules/Tabata';
import Timer from '../Components/Modules/Timer';


export default function AppModules() {
  const { module } = useContext(AppContext)

  const renderModule = () => {
    switch (module) {
      case 'menu':
        return <Menu />;
      case 'timer':
        return <Timer />;
      case 'stopper':
        return <Stopper />;
      case 'tabata':
        return <Tabata />;
      default:
        return <Menu />;
    }
  };

  return (
    <main>
      {renderModule()}
    </main>
  );
}
