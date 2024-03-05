
// Create a map object.
let myMap = L.map("map", {
  center: [0, 0], // Set center to [0, 0] to focus on the world
  zoom: 3 // Zoom out to show the entire globe
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Add a title to the map.
let titleControl = L.control({ position: 'topleft' });

titleControl.onAdd = function (map) {
  let div = L.DomUtil.create('div', 'map-title');
  div.innerHTML = '<h2>Countries with AQI Category "Very Unhealthy"</h2>';
  return div;
};

titleControl.addTo(myMap);

// Loop through the countries array, and create one marker for each city.
for (let i = 0; i < countries.length; i++) {
  // Get the city's name and location.
  let cityName = countries[i].name;
  let cityLocation = countries[i].location;
  
  let customIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: orange; width: 30px; height: 30px; border-radius: 50%; text-align: center; font-weight: bold;">!</div>`
  });

  // Create a circle marker with the custom icon.
  L.marker(cityLocation, { icon: customIcon })
      .bindPopup(`<h1>${cityName}</h1>`)
      .addTo(myMap);
}

