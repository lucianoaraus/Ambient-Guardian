import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Map from "./Map";
import Loader from "./Loader";

function MainBox() {
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
    <div>
      Hola, soy el MAINBOX
      <Header></Header>
      <Sidebar></Sidebar>
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div> //Si no se carga la pagina, tira el Loader (spinner)
  );
}

export default MainBox;
