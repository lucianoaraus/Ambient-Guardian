import logo from "../../assets/ambientguardianlogobaner.png";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="col-auto">
          <img src={logo} className="img-logo" alt="logo" width="350" />
        </div>
      </div>
    </div>
  );
}
