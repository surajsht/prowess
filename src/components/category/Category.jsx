import { CategoryData } from "./CategoryData";
import "./category.css";

const Category = () => {
  return (
    <section className="category-cotainer">
      {CategoryData.map((item) => {
        let { id, icon, img, title, desc, btnTxt } = item;

        return (
          <div className="category-item" key={id}>
            <img src={img} alt="category-image" />

            <div className="category-details">
              <img src={icon} alt="category-icon" />
              <h2 className="category-title">{title}</h2>
              <p>{desc}</p>
              <a href="" className="category-item-link">
                {btnTxt}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Category;
