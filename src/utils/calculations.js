export const calculateDistance = (lat1,lon1,lat2,lon2) => {
    lat1 = +lat1;
    lon1 = +lon1;
    lat2 = +lat2;
    lon2 = +lon2;
    const R = 6371;
    const dLat = (lat2-lat1) * Math.PI / 180;
    const dLon = (lon2-lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return Math.round(d*1000)
    }


export const calculateTime = (time1, time2) => {
    time1 = new Date(time1*1000);
    time2 = new Date(time2*1000);
    const difference = time2.getTime() - time1.getTime();

    const secondsDifference = Math.floor(difference/1000);
    return secondsDifference;
}

export const calculateSpeed = (distance, time) => {
  return distance/time
}

export const toKilometersPerSecond = (speed) => {
  return speed/1000;
}

export const toKilometersPerHour = (speed) => {
  return speed*3.6;
}

export const toKilometers = (distance) => {
  return distance/1000;
}