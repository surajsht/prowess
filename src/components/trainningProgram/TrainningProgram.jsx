import SectionHeader from "../sectionHeader/SectionHeader";
import { TrainningProgramData } from "./TrainningProgramData";
import { FaArrowRightLong } from "react-icons/fa6";
import "./trainningProgram.css";

const TrainningProgram = () => {
  return (
    <section className="trainning-program section-spacing">
      <div className="wrapper">
        <SectionHeader
          title="TRAINING PROGRAMS"
          desc="Let us take your workout routines to the next level with our full-body programs and intensity challenges. Find a training that matches your needs."
        />
      </div>

      <div className="section-body">
        {TrainningProgramData.map((item) => {
          let { id, eventCategory, title, desc, img } = item;

          return (
            <div className="trainning-program-item" key={id}>
              <div className="trainning-program-image">
                <img src={img} alt="trainning-program-image" />
              </div>

              <div className="trainning-program-details">
                <span>{eventCategory}</span>

                <h2 className="trainning-program-title">{title}</h2>

                <p className="trainning-program-desc">{desc}</p>

                <a href="">
                  Read More <FaArrowRightLong />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrainningProgram;
