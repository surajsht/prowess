import "./pageBanner.css";

const PageBanner = ({ title }) => {
  return (
    <section className="page-banner section-spacing">
      <div className="wrapper">
        <h2 className="page-banner-title">{title}</h2>
      </div>
    </section>
  );
};

export default PageBanner;
