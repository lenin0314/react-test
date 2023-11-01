// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import "./leaflet.css";
// <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

// const MapComponent = () => {
//   const position = [39.8283, -98.5795]; // Coordinates for the center of the USA

//   return (
//     <MapContainer center={position} zoom={4} style={{ height: "100vh", width: "100%" }}>
//       <TileLayer
//         url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=pEoIx5oTSKsATcnTvPC2	"
//         attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//       />
//       <Marker position={position}>
//         <Popup>
//           Center of the USA. <br /> Lebanon, Kansas.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// export default MapComponent;

import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as geojsonData from "./map.json";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

const MapComponent = () => {
  const [data, setData] = useState([]);
  const position = [39.8283, -98.5795]; // Coordinates for the center of the USA

  useEffect(() => {
    setData(geojsonData);
    console.log("data", geojsonData);
  }, []);

  // Fetch data from the endpoint
  useEffect(() => {
    fetch("http://127.0.0.1:5000/obesity")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log('first feature', data.features[0]);
        setData(data);
      })
      .catch((error) => {
        // console.error('There has been a problem with your fetch operation:', error);
        alert(
          "Failed to fetch data. Please check your network connection /Server API and try again."
        );
        window.location.reload();
      });
  }, []);

  // Function to determine the color based on the "Obesity" value
  const getColor = (obesity) => {
    const color = obesity > 21 ? "red" : obesity > 10 ? "yellow" : "green";
    console.log(`Obesity: ${obesity}, Color: ${color}`);
    return color;
  };

  // Function to set the style of the GeoJSON layer
  const style = (feature) => {
    const styles = {
      fillColor: getColor(feature.properties.Obesity),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
    console.log(`Feature: ${feature.properties.NAME}, Style:`, styles);
    return styles;
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        alert(
          `State: ${feature.properties.NAME}, Obesity rate: ${feature.properties.Obesity}`
        );
      },
    });
  };

  return (
    <Card style={{ margin: "auto", width: "80%", marginTop: "10px" }}>
      <CardHeader
        title="Obesity rate per state in USA"
        titleTypographyProps={{ align: "center" }}
      />
      <CardContent>
        <MapContainer
          center={position}
          zoom={4}
          style={{ height: "50vh", width: "100%" }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=pEoIx5oTSKsATcnTvPC2"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          <GeoJSON
            key={data.length}
            data={data}
            style={(feature) => style(feature)}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </CardContent>
    </Card>
  );
};

export default MapComponent;
