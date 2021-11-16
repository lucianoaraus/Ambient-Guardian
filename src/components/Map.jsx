import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

function Map({ callback, eventData, center, zoom }) {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      //comentar
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]} //0 -> longitud ; 1 -> latitud
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => handleClick({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });

  function handleClick(locationInfo) {
    callback(locationInfo);
  }

  return (
    <div class="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCoaFg3XMANXdGCDpkqgl0F9DFSl00U7I8" }}
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
//test
Map.defaultProps = {
  center: {
    lat: -34.63950833473169,
    lng: -58.63203050779171,
  },
  zoom: 4,
};

export default Map;
