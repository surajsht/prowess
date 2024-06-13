import { VscCallIncoming } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="wrapper">
          <div className="footer-top-content">
            <div className="footer-top-item">
              <div className="footer-item-heading">
                <img src="/logo-light.png" alt="site-logo" />
              </div>

              <div className="footer-item-body">
                <p className="footer-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat dolore quas esse.
                </p>

                <div className="prowess-info">
                  <div className="prowess-info-item">
                    <VscCallIncoming />
                    1-677225-124-44227-84
                  </div>

                  <div className="prowess-info-item">
                    <CiLocationOn />
                    84 Main Collins Street
                  </div>

                  <div className="prowess-info-item">
                    <IoMdTime />
                    Mon - Sat 8.00 - 18.00
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-top-item">
              <div className="footer-item-heading">
                <h2 className="footer-heading-title">latest news</h2>
              </div>

              <div className="footer-item-body">
                <article className="prowess-article">
                  <h2 className="article-title">
                    <a href="">FITNESS CLASS FOR YOU</a>
                  </h2>
                  <a href="" className="article-post-date">
                    OCTOBER 22, 2017
                  </a>
                </article>

                <article className="prowess-article">
                  <h2 className="article-title">
                    <a href="">GYM EXERCISES TO BOOST YOUR FOOTBALL</a>
                  </h2>
                  <a href="" className="article-post-date">
                    OCTOBER 22, 2017
                  </a>
                </article>

                <article className="prowess-article">
                  <h2 className="article-title">
                    <a href="">BOOST PERFORMANCE.</a>
                  </h2>
                  <a href="" className="article-post-date">
                    OCTOBER 22, 2017
                  </a>
                </article>
              </div>
            </div>

            <div className="footer-top-item">
              <div className="footer-item-heading">
                <h2 className="footer-heading-title">recent projects</h2>
              </div>

              <div className="footer-item-body">
                <ul className="projects-list">
                  <li>
                    <a href="">MARCH 2018</a>
                  </li>
                  <li>
                    <a href="">FEBRUARY 2018</a>
                  </li>
                  <li>
                    <a href="">JANUARY 2018</a>
                  </li>
                  <li>
                    <a href="">DECEMBER 2017</a>
                  </li>
                  <li>
                    <a href="">NOVEMBER 2017</a>
                  </li>
                  <li>
                    <a href="">OCTOBER 2017</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-top-item">
              <div className="footer-item-heading">
                <h2 className="footer-heading-title">contact</h2>
              </div>

              <div className="footer-item-body">
                <form action="" className="prowess-form">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="E-main" />
                  <textarea name="message-box" placeholder="Comment"></textarea>
                  <button className="primary-btn primary-btn-small">
                    send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-botom"></div>
    </footer>
  );
};

export default Footer;
