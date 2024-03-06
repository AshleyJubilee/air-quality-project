const aqiURL = './Resources/aqi_data.csv'
let aqiData

let polIndex = {
  aqi: ['aqi_value', 'aqi_category', 250],
  co: ['co_aqi_value', 'co_aqi_category', 15], 
  no2: ['no2_aqi_value', 'no2_aqi_category', 25],
  ozone: ['ozone_aqi_value', 'ozone_aqi_category', 100],
  pm25: ['pm25_aqi_value', 'pm25_aqi_category', 200]
}


function plotData(index) {
  Plotly.d3.csv(aqiURL, function(err, rows) {
    function unpack(rows, key) {
      return rows.map(function(row) {
        return row[key]
      })
    }

    let data = [
      {
        type: "scattermapbox",
        lon: unpack(rows, "Lon"),
        lat: unpack(rows, "Lat"),
        text: unpack(rows, 'city').map(i => `City: ${i}`),
        hoverinfo: 'text', 
        marker: { 
          color: "fuchsia", 
          size: unpack(rows, index[0]).map(i => (i/index[2])*10)
      }
      }
    ];

    let layout = {
      dragmodeL: 'zoom',
      showlegend: false,
      mapbox: {
        style: "open-street-map",
        zoom: 1,
        center: {lon: 10, lat: 20}
    },
      margin: { r: 0, t: 0, b: 0, l: 0 },
      height: 500,
      width: 900
  }

  Plotly.react('map', data, layout)

  let scatterData = [
    {
      type: "scatter",
      mode: 'markers',
      x: unpack(rows, index[0]),
      y: unpack(rows, index[1]),
   
    }
  ];

  let scatterLayout = {
    margin: { r: 50, t: 50, b: 50, l: 200 }, 
    height: 350,
    width: 900
  } 

  Plotly.react('scatter', scatterData, scatterLayout)

  // let barData = [
  //   {
  //     type: "bar",
  //     mode: 'markers',
  //     x: (unpack(rows, 'country')).slice(0, 10),
  //     y: (unpack(rows, index[0])).slice(0, 10),
   
  //   }
  // ]

  // let barLayout = {
  //   margin: { r: 50, t: 50, b: 50, l: 200 }, 
  //   height: 350,
  //   width: 900
  // } 

  // Plotly.react('bar', barData, barLayout)


 



})}

plotData(polIndex.aqi)
