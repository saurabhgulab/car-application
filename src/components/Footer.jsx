import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> चला
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:0987654321">
                  <i className="fa-solid fa-phone"></i> &nbsp; (+91) -8888-8888
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carchala@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carchala@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://saurabhgulab.com/"
                >
                  Design by Saurabh Krishan Gulab
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Overview</li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/models"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Vehicle Models
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
