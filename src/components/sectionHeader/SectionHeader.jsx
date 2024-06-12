import "./sectionHeader.css";

const SectionHeader = ({ title, desc }) => {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-desc">{desc}</p>
    </div>
  );
};

export default SectionHeader;
