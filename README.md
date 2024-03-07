Global Air Pollution csv: https://www.kaggle.com/datasets/hasibalmuzdadid/global-air-pollution-dataset

WHO Air Quality csv: https://www.who.int/publications/m/item/who-ambient-air-quality-database-(update-jan-2024)

Presentation: https://docs.google.com/presentation/d/1NiEffSsOKQUGsT8hYK-jNS1UDmmweo96s2lirHPthAM/edit#slide=id.g2c05c541633_3_22
 
Dashboard View: https://github.com/AshleyJubilee/air-quality-project
- Toggle between the different tabs to view how the world map plots cities based on different AQI indexes and the corresponding categorizations of the AQI data.


This project aims to address the important aspects of raising awareness, conducting research, and developing solutions to improve air quality.

Ethical considerations and knowledge of biases are vital for ensuring the quality output and insights generated regarding data collection and usage. With the AQI data, although personally identifiable information is not collected, it is still essential for the data collection process to have transparency, accountability and integrity. When working with environmental data, it is crucial to be vigilant and aware that data and AQI rankings provided could be manipulated based on the location of the city, the station, the time of year, etc. These different variables can all be used by local governments to report hazardous air quality in cities as moderate to prevent global scrutiny from the WHO and alarming local citizens.

Reasons why exploring air quality is an important
Human Health Impact:
Poor air quality leads to respiratory and cardiovascular diseases, even premature death. Understanding it helps identify health risks and forms protective measures for public health.
Environmental Impact:
Air pollution contributes to smog, acid rain, and ecosystem damage. Monitoring helps assess human activities' environmental impact, guiding efforts to mitigate pollution and preserve natural habitats.
Quality of Life:
Clean air is vital for a high quality of life. Poor air quality affects well-being, reducing outdoor activities and productivity. Exploring air quality ensures communities access cleas air, fostering a healthier environment.
Economic Impact
Air pollution incurs economic costs, including healthcare expenses and lost productivity. By exploring air quality, policymakers and businesses can understand economic implications and make informed decisions to reduce pollution impact.
Climate Change:
Certain pollutants contribute to climate change. Understanding air quality is crucial to developing strategies for mitigating climate change effects.
Regulatory Compliance:
Government use air quality data to establish and enforce regulations. Monitoring ensures compliance and identifies areas needing additional measures for air quality goals.
Technological Innovation:
Advanced in sensor technology enable precise monitoring. Exploring air quality offers opportunities for innovation in developing new monitoring technologies and predictive models.


Dataset Overview:
For exploring we utilized open-source Global Air Pollution.csv data file
Global Air Pollution Dataset

In Data we have 23,462 locations in 175 countries.
For analysis we take most common air polluted categories:
-AQI Air Quality Index (shows how polluted the air currently);
-NO2 Nitrogen Dioxide;
- O3 Ozon;
-CO Carbon Monoxide;
-PM2.5 Particulate Matter


1. Preparing workplace with imported libraries
2. Setting up parameters and a base URL for a geocoding search using the Geoapify API
for making a request to the Geoapify API by appending specific query parameters to the base URL and sending requests.get() .
3. Loading the dataset from Global Air Pollution csv: https://www.kaggle.com/datasets/hasibalmuzdadid/global-air-pollution-dataset
4. Reading csv file
5. Cleaning Data with removing spaces, updated columns names, removing special characters, replacing missing values with unknown, filling gaps, droped entries with unknown.
6. Extract 'lat and 'lon' for each city in a DataFrame by looping through DataFrame Rows, constructing City String, making API Request, process API Response, Display output.
7. Displayed sample data to confirm that the coordinates appear
8. Exploring countries and cities having the most critical pollution level. Define the top
  25 polluted areas with maxim AQI index, and aqi_category : "Hazardous" with aqi_value '500.0'.
9.Defined top 15 the Most representative countries whithis dataset.
10. Using Seaborn library https://seaborn.pydata.org/generated/seaborn.heatmap.html
  created heatmap of cities per countries and categories.
11. Using pgAdmin created table from our aqi_data.csv file
12. Created tables top 15 countries with max values of: AQI, CO, NO2, OZ, PM2.5
13. Created table with all countries which have aqi_category "Very_unhealthy"
14. Data from csv table "Very_Unhealthy" was converted to file.js and map with "Very_Unhealthy" countiris was created.

In the Vincent Branch, an Excel file was used for the initial data analysis investigation to see what the overall data looked like. Then, in the Map Weather Jupiter notebook, the Excel file is imported and plotted with HV plots based on the AQI air quality categories that were the most important in the analysis. It shows the category data and the city name based on the hover over the points plotted via LAT and Lng.



