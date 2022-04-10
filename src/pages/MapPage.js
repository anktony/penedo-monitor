import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import "./MapPage.css";
import MapStarter from "../local/MapStartingConfigs.js";

const mapLoader = MapStarter();

const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: mapLoader.id,
    googleMapsApiKey: mapLoader.key,
  });

  //
  
  return (
    <div className="mapMajorContainer">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={mapLoader.position}
          zoom={mapLoader.zoom}
        ></GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MapPage;
