import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footerMainContainer">
        <footer className="footerBodyContainer">
          <div className="col footerLogoSection">
            <a
              href="#"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32">
                {/* <use xlink:href="#bootstrap" /> */}
              </svg>
            </a>
            <p className="text-muted">&copy; 2022</p>
          </div>

          <div className="footerRightSection">
            <div className="footerRightOne">
              <div className="col footerSection">
                <h5>Popular Areas</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link href="#" className="nav-link p-0 customLinks">
                      Home
                    </Link>
                    <hr />
                    <Link href="#" className="nav-link p-0  customLinks">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col footerSection">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footerRightTwo">
              <div className="col footerSection">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col footerSection">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
