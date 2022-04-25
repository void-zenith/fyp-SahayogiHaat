import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Maps = () => {
  return (
    <MapContainer
      style={{
        height: "35vh",
        minWidth: "230px",
        borderRadius: "5px",
      }}
      center={[27.7085171, 85.3260183]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[27.7085171, 85.3260183]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
