import spinner from "./spinner.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
    </div>
  );
}

export default Loader;
