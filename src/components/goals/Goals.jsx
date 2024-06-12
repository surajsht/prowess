import SectionHeader from "../sectionHeader/SectionHeader";
import { GoalsData } from "./GoalsData";
import "./goals.css";

const Goals = () => {
  return (
    <section className="goals section-spacing">
      <div className="wrapper">
        <SectionHeader
          title="SET HIGH FITNESS GOALS"
          desc="After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination."
        />

        <div className="section-body">
          {GoalsData.map((item) => {
            let { id, title, desc, img } = item;

            return (
              <div className="goals-item" key={id}>
                <img src={img} alt="goal-icon" />
                <h2 className="goal-title">{title}</h2>
                <p className="goal-desc">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Goals;
