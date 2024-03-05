CREATE TABLE air_quality (
    country VARCHAR(255),
    city VARCHAR(255),
    aqi_value INT,
    aqi_category VARCHAR(255),
    co_aqi_value INT,
    co_aqi_category VARCHAR(255),
    ozone_aqi_value INT,
    ozone_aqi_category VARCHAR(255),
    no2_aqi_value INT,
    no2_aqi_category VARCHAR(255),
    pm25_aqi_value INT,
    pm25_aqi_category VARCHAR(255),
    Lat FLOAT,
    Lon FLOAT
);

-- Now, select all rows from the table (which will return an empty result as the table has been dropped)
SELECT country, Lat, Lon, max_aqi_value
FROM (
    SELECT country, Lat, Lon, aqi_value AS max_aqi_value,
           ROW_NUMBER() OVER (ORDER BY aqi_value DESC) AS rn
    FROM air_quality
) AS subquery
WHERE rn <= 15;

SELECT air_quality.country, air_quality.Lat, air_quality.Lon, air_quality.co_aqi_value AS max_co_aqi_value
FROM air_quality
WHERE (air_quality.country, air_quality.co_aqi_value) IN (
    SELECT country, MAX(co_aqi_value)
    FROM air_quality
    GROUP BY country
    ORDER BY MAX(co_aqi_value) DESC
    LIMIT 15
);

SELECT air_quality.country, air_quality.Lat, air_quality.Lon, air_quality.ozone_aqi_value AS max_ozone_aqi_value
FROM air_quality
WHERE (air_quality.country, air_quality.ozone_aqi_value) IN (
    SELECT country, MAX(ozone_aqi_value)
    FROM air_quality
    GROUP BY country
    ORDER BY MAX(ozone_aqi_value) DESC
    LIMIT 15
);

SELECT air_quality.country, air_quality.Lat, air_quality.Lon, air_quality.no2_aqi_value AS max_no2_aqi_value
FROM air_quality
WHERE (air_quality.country, air_quality.no2_aqi_value) IN (
    SELECT country, MAX(no2_aqi_value)
    FROM air_quality
    GROUP BY country
    ORDER BY MAX(no2_aqi_value) DESC
    LIMIT 15
);

SELECT air_quality.country, air_quality.Lat, air_quality.Lon, air_quality.pm25_aqi_value AS max_pm25_aqi_value
FROM air_quality
WHERE (air_quality.country, air_quality.pm25_aqi_value) IN (
    SELECT country, MAX(pm25_aqi_value)
    FROM air_quality
    GROUP BY country
    ORDER BY MAX(pm25_aqi_value) DESC
    LIMIT 15
);

SELECT country, Lat, Lon, aqi_category
FROM air_quality
WHERE aqi_category IN ('Unhealthy', 'Unhealthy for Sensitive Groups');

SELECT country, Lat, Lon
FROM air_quality
WHERE aqi_category = 'Hazardous';

SELECT country, Lat, Lon
FROM air_quality
WHERE aqi_category = 'Hazardous'
GROUP BY country, Lat, Lon
ORDER BY MAX(aqi_value) DESC
LIMIT 25;

SELECT country, Lat, Lon
FROM air_quality
WHERE aqi_category = 'Very Unhealthy';

