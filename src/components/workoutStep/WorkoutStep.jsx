import SectionHeader from "../sectionHeader/SectionHeader";
import { WorkoutStepData } from "./WorkoutStepData";
import "./workoutStep.css";

const WorkoutStep = () => {
  return (
    <section className="workout-step">
      <div className="wrapper">
        <SectionHeader
          title="STOP WISHING. START DOING."
          desc="Lorem ipsum dolor sit amet, consectetuer adipiscing imperdiet elit nean commodo ligula eget dolor. Cum sociis Theme natoque penatibus et magnis dis."
        />

        <div className="section-body">
          {WorkoutStepData.map((item) => {
            let { id, img, title, desc } = item;

            return (
              <div className="workout-step-item image-hover" key={id}>
                <div className="workout-step-image image-hover-container">
                  <img src={img} alt="workout-step-image" />
                  <span> {id + 1} </span>
                </div>

                <h2 className="workout-step-title">{title}</h2>

                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkoutStep;
