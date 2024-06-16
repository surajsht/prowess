import "./pageBanner.css";

const PageBanner = ({ title }) => {
  return (
    <section className="page-banner">
      <div className="wrapper">
        <h2 className="page-banner-title">{title}</h2>
      </div>
    </section>
  );
};

export default PageBanner;
