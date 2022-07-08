import { useState, useEffect } from "react";
import Layout from "./components/layout";
import Map from "./components/Map";
import Loader from "./components/Loader";
import LocationInfoBox from "./components/LocationInfoBox";
import "./App.css";

export default function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [locationInfo, setLocationInfo] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    const data = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events"); // up to date: 28/06/2022
    const dataJSON = await data.json();
    const events = await dataJSON.events;
    setEventData(events);
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  function listenerMap(data) {
    setLocationInfo(data);
  }

  return (
    <Layout>
        {!loading ? (
          <Map callback={listenerMap} eventData={eventData} >
            {locationInfo && <LocationInfoBox info={locationInfo} />}
          </Map>
        ) : (
          <Loader />
        )}
    </Layout>
  );
}
