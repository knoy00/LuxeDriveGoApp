const calculateBearing = (prevCoord, nextCoord) =>{
    const lat1 = (prevCoord.latitude * Math.PI) / 180;
    const lon1 = (prevCoord.longitude * Math.PI) / 180;
    const lat2 = (nextCoord.latitude * Math.PI) / 180;
    const lon2 = (nextCoord.longitude * Math.PI) / 180;

    const difference = lon2 - lon1;

    const y = Math.sin(difference) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(difference);

    let bearing = (Math.atan2(y, x) * 180) / Math.PI;
    bearing = (bearing + 360) % 360;
    return bearing;
    
}

export default calculateBearing;