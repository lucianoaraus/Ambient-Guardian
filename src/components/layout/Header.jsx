import logo from "../../assets/img/ambientguardianlogo.png";

function Header() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto py-4">
          <img src={logo} alt="logo" width="40" />
        </div>
      </div>
    </div>
  );
}

export default Header;
