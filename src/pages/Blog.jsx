import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Blog() {
  return (
    <div>
      <main>
        <section className="blog container">
          <h1 className="h1">Blog</h1>
          <div className="Blog-card_box1">
            <h3 className="Blog-card_box1_title">
              UI Interactions of the week
            </h3>
            <span className="Blog-card_box1_data">
              <span> 12 Feb 2019 |</span>
              <span className="Blog-card_box1_data_span">
                Express, Handlebars
              </span>
            </span>
            <p className="Blog-card_box1_text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="Blog-card_box1">
            <h3 className="Blog-card_box1_title">
              UI Interactions of the week
            </h3>
            <span className="Blog-card_box1_data">
              <span> 12 Feb 2019 |</span>
              <span className="Blog-card_box1_data_span">
                Express, Handlebars
              </span>
            </span>
            <p className="Blog-card_box1_text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="Blog-card_box1">
            <h3 className="Blog-card_box1_title">
              UI Interactions of the week
            </h3>
            <span className="Blog-card_box1_data">
              <span> 12 Feb 2019 |</span>
              <span className="Blog-card_box1_data_span">
                Express, Handlebars
              </span>
            </span>
            <p className="Blog-card_box1_text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="Blog-card_box1">
            <h3 className="Blog-card_box1_title">
              UI Interactions of the week
            </h3>
            <span className="Blog-card_box1_data">
              <span> 12 Feb 2019 |</span>
              <span className="Blog-card_box1_data_span">
                Express, Handlebars
              </span>
            </span>
            <p className="Blog-card_box1_text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
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
