import SectionHeader from "../sectionHeader/SectionHeader";
import { OurTeamData } from "./OurTeamData";

import "./ourTeam.css";

const OurTeam = () => {
  return (
    <section className="our-team">
      <div className="wrapper">
        <SectionHeader title="MEET OUR STRONGEST TEAM" />
      </div>

      <div className="section-body">
        {OurTeamData.map((item) => {
          let { id, name, social, position, img } = item;

          return (
            <div key={id} className="our-team-item">
              <img src={img} alt={name} />

              <div className="our-team-details">
                <h2 className="our-team-title">
                  <a href="">{name}</a>
                </h2>

                <span className="our-team-position">{position}</span>

                <div className="our-team-social-links">
                  {social.map((socialLink) => {
                    let { id, icon, link } = socialLink;

                    return (
                      <a href={link} key={id}>
                        {icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
