import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about container">
        <div className="about-header">
          <h1>Developer</h1>
        </div>

        <div className="about-row">
          <div className="about-row-card">
            <a
              className="about-row-card-link"
              href="https://github.com/ahmedali-dev"
            >
              <div className="about-row-card-image">
                <img
                  src="https://avatars.githubusercontent.com/u/104825374?s=400&u=80dad9fa34d8014c2a51b3d773678bba21f6cb60&v=4"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="about-row-card-content">
                <h1 className="name">ahmedali-dev</h1>
              </div>
            </a>
          </div>

          <div className="about-row-card">
            <a
              className="about-row-card-link"
              href="https://github.com/Ahmedmsaber"
            >
              <div className="about-row-card-image">
                <img
                  src="https://avatars.githubusercontent.com/u/55560381?v=4"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="about-row-card-content">
                <h1 className="name">Ahmedmsaber</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
