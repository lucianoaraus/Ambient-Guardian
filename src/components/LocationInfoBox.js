export default function LocationInfoBox({ info }) {
  const { title, url, magnitudeUnit, magnitudeValue, updated } = info;

  return (
    <div className="location-info">
      <h2 className="title">Event Location Info</h2>
      <p>
        <b>Title:</b> {title}
        <br />
        <b>URL:</b>{" "}
        <a href={url} target="blank">
          {url}
        </a>
        <br />
        <b>Magnitude:</b> {magnitudeValue ? magnitudeValue : "?"}{" "}
        {magnitudeUnit}
        <br />
        <b>Updated:</b> {updated}
      </p>
    </div>
  );
}
