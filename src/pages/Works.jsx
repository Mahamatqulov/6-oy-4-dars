import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Works() {
  return (
    <div>
      <main>
        <section className="Featured-card container">
          <h1 className="h1">Works</h1>
          <div className="Featured-card_department">
            <img className="Featured-img" src="./images/rasm-1.png" alt="" />
            <div className="Featured-card_department_box">
              <h3 className="Featured-card_department_title">
                Designing Dashboards
              </h3>
              <div className="span">
                <span className="raqam">2020</span>
                <span className="Dashboard">Dashboard</span>
              </div>
              <p className="Featured-card_department_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="Featured-card_department">
            <img className="Featured-img" src="./images/rasm-2.png" alt="" />
            <div className="Featured-card_department_box">
              <h3 className="Featured-card_department_title">
                Vibrant Portraits of 2020
              </h3>
              <div className="span">
                <span className="raqam">2018</span>
                <span className="Dashboard">Illustration</span>
              </div>
              <p className="Featured-card_department_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="Featured-card_department">
            <img className="Featured-img" src="./images/rasm-3.png" alt="" />
            <div className="Featured-card_department_box">
              <h3 className="Featured-card_department_title">
                36 Days of Malayalam type
              </h3>
              <div className="span">
                <span className="raqam">2018</span>
                <span className="Dashboard">Typography</span>
              </div>
              <p className="Featured-card_department_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="Featured-card_department">
            <img className="Featured-img" src="./images/rasm-4.png" alt="" />
            <div className="Featured-card_department_box">
              <h3 className="Featured-card_department_title">
                36 Days of Malayalam type
              </h3>
              <div className="span">
                <span className="raqam">2018</span>
                <span className="Dashboard">Components, Design</span>
              </div>
              <p className="Featured-card_department_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer container">
          <ul className="footer-menu">
            <li>
              <a className="icon" href="https://www.facebook.com/">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a className="icon" href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a className="icon" href="https://x.com/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a className="icon" href="https://www.linkedin.com/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <p className="footer-text">Copyright ©2020 All rights reserved </p>
        </div>
      </footer>
    </div>
  );
}
