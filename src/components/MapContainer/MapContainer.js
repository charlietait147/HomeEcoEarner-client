import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from "react";
import "./MapContainer.scss";
function MapContainer() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });
    const center = useMemo(() => ({
        lat: 51.51081,
        lng: -0.59356
    }), []);
    return (
        <div className="map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    zoom={18}
                    center={center}
                    mapContainerClassName="map__map"
                >
                    <Marker key="marker_1" position={{
                        lat: 51.51072,
                        lng: -0.59340
                    }} />
                </GoogleMap>
            )}
        </div>
    );
}

export default MapContainer;