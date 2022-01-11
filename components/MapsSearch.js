
import React from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

    // const trial = news.map((item) => (
//     [item.longitude, item.latitude, item.tagline]
        // ))
        // console.log(trial)

const DashboardMap = () => {
    const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBd5KA4-PTQyrluDSxMwJgwlTQ-hpNmn08",
    })

    const containerStyle = {
    width: "100%",
    height: "51vh",
    }

    const center = {
    lat: 51.3343471,
    lng: 0.7162378,
    }

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    }, [])


    return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
    >
        <Marker
            position={{
            lat: 51.3343471,
            lng: 0.7162378,
            }}
        />
        <></>
    </GoogleMap>
    ) : (
    <></>
    )
}

export default React.memo(DashboardMap)