import logo from "../images/tyreplex.webp";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-light box-shadow">
      <div className="container">
        <img src={logo} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Car Tyres
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    MRF Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CEAT Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    GoodYear Tyres
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bike Tyres
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    MRF Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CEAT Tyres
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    GoodYear Tyres
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tyre Pressure
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Commercial Plans
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    All Commercial Tyres
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accessories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Accessories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Batteries
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Alloys Wheels
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Cashback Offers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Find Tyre Dealers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Compare Tyres
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
