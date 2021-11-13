import "./App.css";
import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Map from "../components/Map";
import Loader from "../components/Loader";
import LocationInfoBox from "../components/LocationInfoBox";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [locationInfo, setLocationInfo] = useState(null); //state

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events" //🚀
      );
      const { events } = await res.json(); //promesa

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  function listenerMap(data) {
    setLocationInfo(data);
  }

  return (
    <Layout>
      <div className="container-map ">
        {!loading ? (
          <Map callback={listenerMap} eventData={eventData} />
        ) : (
          <Loader />
        )}
      </div>
      <div className="container-data ">
        {locationInfo && <LocationInfoBox info={locationInfo} />}
      </div>
    </Layout>
  );
}

export default App;
