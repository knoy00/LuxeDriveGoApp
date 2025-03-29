import React, { useState, createContext } from 'react';

export const ScreenContext = createContext(); // No need for {children} here

const ScreenProvider = ({ children }) => { // Accept children as a prop
  const [locateDriver, setLocateDriver] = useState(false);

  return (
    <ScreenContext.Provider value={{ locateDriver, setLocateDriver }}>
      {children} {/* Render children inside provider */}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
