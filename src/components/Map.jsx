import React, { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

export default function Map() {
  const initialCoordinates = useMemo(
    () => ({ lat: 28.7041, lng: 77.1025 }),
    []
  );
  const getDraggedMarkerCoordinates = (coordinates) => {
    const { latLng } = coordinates;
    const lat = latLng.lat();
    const lng = latLng.lng();
    console.log("lat", lat, "long", lng);
  };
  return (
    <GoogleMap
      zoom={10}
      center={initialCoordinates}
      mapContainerClassName="map-container"
    >
      <MarkerF
        draggable={true}
        onDragEnd={(coordinates) => getDraggedMarkerCoordinates(coordinates)}
        position={initialCoordinates}
      />
    </GoogleMap>
  );
}
