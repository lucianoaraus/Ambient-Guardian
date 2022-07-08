import CancelIcon from '@mui/icons-material/Cancel';

export default function LocationInfoBox({ info, callback }) {
  const { title, url, magnitudeUnit, magnitudeValue, updated } = info;


  return (
    <div className="location-info">
      <div className="location-info-title">
        <h2 className="title">Event Location Info</h2>
        <button className='close-button' onClick={() => callback(null)}>
          <CancelIcon sx={{ color: "#BEBEBE", fontSize: 32 }}/>
        </button>
      </div>
      <p>
        <b>Title :</b> {title}
        <br />
        <b>URL :</b>{" "}
        <a href={url} target="blank">
          {url}
        </a>
        <br />
        <b>Magnitude :</b> {magnitudeValue ? magnitudeValue : "?"}{" "}
        {magnitudeUnit}
        <br />
        <b>Updated :</b> {updated}
      </p>
      
    </div>
  );
}
