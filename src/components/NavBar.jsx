import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header
      className="navigation"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <div className="header-top ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4">
              <div className="header-top-socials text-center text-lg-left text-md-left">
                <a href="https://www.linkedin.com/login" aria-label="linkedin">
                  <i className="fab fa-linkedin" style={{ fontSize: 24 }}></i>
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
              <div className="header-top-info mb-2 mb-md-0">
                <a href="tel:+23-345-67890">
                  Call Us : <span>+23-345-67890</span>
                </a>
                <a href="mailto:support@gmail.com">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>support@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg px-0 py-4">
                <Link className="navbar-brand" to="/">
                  <img src="/images/logo.png" alt="logo" />
                </Link>

                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample09"
                  aria-controls="navbarsExample09"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="fa fa-bars"></span>
                </button>

                <div
                  className="collapse navbar-collapse text-center"
                  id="navbarsExample09"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown @@about">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdown03"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        NF <i className="fas fa-chevron-down small"></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown03"
                      >
                        <li>
                          <Link
                            className="dropdown-item @@company"
                            style={{ textTransform: "none" }}
                            to="/over-mij"
                          >
                            Over Mij
                          </Link>
                          <Link
                            className="dropdown-item @@company"
                            style={{ textTransform: "none" }}
                            to="/dienstverlening"
                          >
                            Dienstverlening
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown @@about">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdown03"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Portefeuille{" "}
                        <i className="fas fa-chevron-down small"></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown03"
                      >
                        <li>
                          <Link
                            className="dropdown-item @@company"
                            to="/opdrachten"
                          >
                            Opdrachten
                          </Link>
                          <Link
                            className="dropdown-item @@company"
                            to="/referenties"
                          >
                            Referenties
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown @@blog">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="dropdown05"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog <i className="fas fa-chevron-down small"></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown05"
                      >
                        <li>
                          <Link className="dropdown-item @@company" to="/blogs">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item @@company"
                            to="/blogadmin"
                          >
                            Blog Login
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item @@contact">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
