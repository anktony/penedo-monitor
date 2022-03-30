import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import './MapPage.css'



// export interface MapPageProps{
// }

const MapPage = () => {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBSlpCVhIwAKkTdQUQ6ui5B4jXV9QTNof0"
    })

    const position =  { lat: -10.2800, lng: -36.5400}

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