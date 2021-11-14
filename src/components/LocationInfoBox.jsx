function LocationInfoBox({ info }) {
  return (
    <div className="location-info">
      <h2 className="title">Event Location Info</h2>
      <p>
        <b>Id: </b> {info.id}
        <br />
        <b>Title:</b> {info.title}
      </p>
    </div>
  );
}

export default LocationInfoBox;
