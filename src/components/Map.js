import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

export default function Map({ callback, eventData, center, zoom }) {
  const markers = eventData.map((ev) => {
    return (
      <LocationMarker
        lat={ev.geometry[0].coordinates[1]}
        lng={ev.geometry[0].coordinates[0]}
        onClick={() => handleClick({ id: ev.id, title: ev.title })}
      />
    );
  });

  const handleClick = (locationInfo) => callback(locationInfo);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          styles: [{ stylers: [{ saturation: 30 }, { gamma: 0.5 }] }],
        }}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}

// Default location
Map.defaultProps = {
  center: {
    lat: -34.63950833473169,
    lng: -58.63203050779171,
  },
  zoom: 4,
};
