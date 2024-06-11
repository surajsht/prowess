import { RowGridData } from "./RowGridData";
import "./rowGrid.css";

const RowGrid = () => {
  return (
    <section className="row-grid-container">
      <div className="wrapper">
        <div className="row-grid-content">
          {RowGridData.map((item) => {
            let { id, img, title, desc, btnTxt } = item;

            return (
              <div key={id} className="row-grid-item">
                <img src={img} alt="row-grid-image" />

                <div className="row-grid-details">
                  <span>{`0${id + 1}`}</span>
                  <h2 className="row-grid-title">{title}</h2>
                  <p>{desc}</p>

                  <a href="" className="primary-btn primary-btn-small">
                    {btnTxt}
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

export default RowGrid;
