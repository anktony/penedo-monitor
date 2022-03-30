import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import './MapPage.css'
import MapStarter from "../components/MapStarter.js"



// export interface MapPageProps{
// }

const MapPage = () => {


    const mapLoader = MapStarter();
    const position =  { lat: -10.2800, lng: -36.5400}


    
    const {isLoaded} = useJsApiLoader({
         id: mapLoader.id,
         googleMapsApiKey: mapLoader.googleMapsApiKey,
     })
  
    return  (
          <div className="mapMajorContainer">
            {
                isLoaded? (
                    <GoogleMap
                        mapContainerStyle={{width: '100%', height: '100%'}}
                        center = {position}
                        zoom = {15}>

                        <Marker
                            position={position} 
                            options={{
                                label: {
                                    text: "Posição Teste (center)",
                                    className: "map-marker"
                                },
                            }}
                        />
                    </GoogleMap>
                ):(<></>)
            }
        </div>
    )
}

export default MapPage