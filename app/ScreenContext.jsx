import React, { useState, createContext } from 'react';

export const ScreenContext = createContext();

const ScreenProvider = ({ children }) => { 
  const [locateDriver, setLocateDriver] = useState(false);
  const [driverEnroute, setDriverEnroute] = useState(false);
  

  return (
    <ScreenContext.Provider value={{ locateDriver, setLocateDriver, driverEnroute, setDriverEnroute }}>
      {children} 
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;


// const headingToPickup = () => {
//     if(driverEnroute){
//       navigator.geolocation.getCurrentPosition(async (position) => {
//         const { latitude, longitude } = position.coords;
//         setIsDestination({
//           latitude,
//           longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         });
//       });
//     }
//   }