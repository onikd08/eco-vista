export const fetchLocationsList = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/location");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchLocationByName = async (location) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${location}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const resolveLocationInfo = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const info = await fetchLocationByName(location);
  if (info.latitude && info.longitude) {
    return { lat: info.latitude, lon: info.longitude };
  }
};
