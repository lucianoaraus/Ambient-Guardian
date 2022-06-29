import spinner from "../assets/spinner.gif";

export default function Loader() {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" className="spinner" />
    </div>
  );
}
