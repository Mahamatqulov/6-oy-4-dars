import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Home() {
  return (
    <div className="header-div">
      <main>
        <section className="container">
          <div className="main-card">
            <div className="main-card_body">
              <h1>
                Hi, I am John,
                <br /> Creative Technologist
              </h1>
              <p className="main-card_text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="main-card_buttun">Download Resume</button>
            </div>
            <div className="main-card_img">
              <picture>
                <source
                  className="img-main"
                  srcSet="./images/user-img.png"
                  media="(min-width: 768px)"
                />
                <img
                  className="Featured-img"
                  src="./images/Group-3.png"
                  alt="Responsive Image"
                />
              </picture>
            </div>
          </div>
        </section>
        <section className="Recent-card">
          <div className="container">
            <div className="Recent-card_info">
              <span className="Recent-posts">Recent posts</span>
              <span className="View-all">View all</span>
            </div>
            <div className="Recent-card_department">
              <div className="Recent-card_box1">
                <h3 className="Recent-card_box1_title">
                  Making a design system from scratch
                </h3>
                <span className="Recent-card_box1_data">
                  12 Feb 2020 | Design, Pattern
                </span>
                <p className="Recent-card_box1_text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="Recent-card_box1">
                <h3 className="Recent-card_box1_title">
                  Creating pixel perfect icons in Figma
                </h3>
                <span className="Recent-card_box1_data">
                  12 Feb 2020 | Figma, Icon Design
                </span>
                <p className="Recent-card_box1_text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="Featured-card container">
          <h4 className="Featured-card_title">Featured works</h4>
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
