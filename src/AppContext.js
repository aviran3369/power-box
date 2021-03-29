import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const MODULES = {
  menu: {
    title: 'תפריט'
  }, 
  timer: {
    title: 'טיימר'
  }, 
  stopper: {
    title: 'סטופר'
  }, 
  tabata: {
    title: 'אימון מחזורי'
  }
}

export const AppProvider = (props) => {
  const [module, setModule] = useState('menu');
  const [moduleName, setModuleName] = useState('תפריט');

  useEffect(() => {
    console.log("Module:", module);
    setModuleName(MODULES[module].title);
  }, [module]);

  return (<AppContext.Provider value={{ module, setModule, moduleName }}>
    {props.children}
  </AppContext.Provider>)
};