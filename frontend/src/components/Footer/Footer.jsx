import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="upper-foot">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row align-items-start">
                <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                  <div className="foot-side">
                    <h5> LINKS</h5>
                    <ul>
                      <li>
                        <a >Home</a>
                      </li>
                      <li>
                        <a >About Us</a>
                      </li>
                      <li>
                        <a >Policy &amp; Privacy</a>
                      </li>
                      <li>
                        <a >Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="foot-social-links">
                    <div>
                      <p>
                        Enjoy our seasonal menu and experience the beauty of
                        aesthetics
                      </p>
                    </div>
                    <ul>
                      <li>
                        <a href="javacript:;">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="javacript:;">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="javacript:;">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                  <div className="foot-side">
                    <h5>CATEGORIES</h5>
                    <ul>
                      <li>
                        <a >Hardware</a>
                      </li>
                      <li>
                        <a  className="cate-food">
                          Elctrical
                        </a>
                      </li>
                      <li>
                        <a  className="cate-drink">
                          Decor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Copyrights-sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="Copyrights-main">
                <p>Copyright © 2023. All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
