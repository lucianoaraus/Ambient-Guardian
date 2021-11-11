import "./App.css";
import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Map from "../components/Map";
import Loader from "../components/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <Layout>
      <div className="container-map mb-4">
        {!loading ? (
          <Map
            eventData={eventData}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
          />
        ) : (
          <Loader />
        )}
      </div>

      <div className="container-data p-3 mb-4">
        <h1>Event location info</h1>
        <hr />
        <h2>ID: </h2>
        <h2>Title: </h2>
      </div>
    </Layout>
  );
}

export default App;
