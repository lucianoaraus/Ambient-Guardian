import GoogleMapReact from "google-map-react";
import BasicModal from "./layout/Modal";
import LocationMarker from "./LocationMarker";

export default function Map({ children, callback, eventData, center, zoom }) {
  const markers = eventData.map((ev) => {
    return (
      <LocationMarker
        lat={ev.geometry[0].coordinates[1]}
        lng={ev.geometry[0].coordinates[0]}
        onClick={() =>
          handleClick({
            title: ev.title,
            url: ev.sources[0].url,
            magnitudeUnit: ev.geometry[0].magnitudeUnit,
            magnitudeValue: ev.geometry[0].magnitudeValue,
            updated: ev.geometry[0].date,
          })
        }
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
          fullscreenControl: false,
          zoomControl: false,
          styles: [{ stylers: [{ saturation: 30 }, { gamma: 0.7 }] }],
        }}
      >
        {markers}
      </GoogleMapReact>
      <>
        {children}
      </>
      <BasicModal />
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
