import spinner from "../assets/img/spinner.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" className="spinner" />
    </div>
  );
}

export default Loader;
