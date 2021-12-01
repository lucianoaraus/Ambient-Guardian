import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

function Map({ callback, eventData, center, zoom }) {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      //arreglar condicion y datos que se muestran
      return (
        <LocationMarker
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
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

Map.defaultProps = {
  center: {
    lat: 37.287338042358016,
    lng: -35.58304863137868,
  },
  zoom: 2,
};

export default Map;
