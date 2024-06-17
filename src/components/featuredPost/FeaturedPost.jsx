import SectionHeader from "../sectionHeader/SectionHeader";
import { FeaturedPostData } from "./FeaturedPostData";
import { FaArrowRightLong } from "react-icons/fa6";
import "./featuredPost.css";

const FeaturedPost = () => {
  return (
    <section className="featured-post">
      <div className="wrapper">
        <SectionHeader
          title="take charge of your life"
          desc="Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec."
        />

        <div className="section-body">
          {FeaturedPostData.map((item) => {
            let { id, img, date, title, desc } = item;

            return (
              <div key={id} className="featured-post-item">
                <img src={img} alt={title} />

                <div className="featured-post-details">
                  <span className="featured-post-date">{date}</span>
                  <h2 className="featured-post-title">
                    <a href="">{title}</a>
                  </h2>
                  <p className="featured-post-desc">{desc}</p>
                  <a href="" className="link-with-icon">
                    read more
                    <FaArrowRightLong />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
