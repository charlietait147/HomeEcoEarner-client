import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useMemo } from "react";
function MapContainer() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });
    const center = useMemo(() => ({
        lat: 51.51081,
        lng: -0.59356
    }), []);
    const mapStyles = {
        height: "400px",
        width: "100%",
    };
    return (
        // <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        // >
        <div className="map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={18}
                    center={center}
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