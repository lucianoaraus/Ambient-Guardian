import logo from "../../assets/img/ambientguardianlogobaner.png";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="col-auto">
          <img src={logo} className="imglogo" alt="logo" width="350" />
        </div>
      </div>
    </div>
  );
}

export default Header;
