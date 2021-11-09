import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

function Map({ eventData, center, zoom }) {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]} //0 -> longitud ; 1 -> latitud
          lng={ev.geometries[0].coordinates[0]}
        />
      );
    }
    return null;
  });

  return (
    <div class="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCoaFg3XMANXdGCDpkqgl0F9DFSl00U7I8" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: -34.63950833473169,
    lng: -58.63203050779171,
  },
  zoom: 6,
};

export default Map;
