import "./styles.css";

import { LuArrowUpRight } from "react-icons/lu";
import ServiceCard from "../../components/ServiceCard";

import IconMobile from "../../assets/icons/mobile.svg";
import IconWebsite from "../../assets/icons/webdeveloper.svg";
import IconWebdesign from "../../assets/icons/webdesign.svg";
import Perfil from "../../assets/images/perfil.jpeg";

export default function Home() {
  return (
    <div className="home">
      <section className="emphasis">
        <div className="header">
          <h2>Hey There!</h2>
          <h1>
            I'M RYAN, <span className="text-highlight">WEB DEVELOPER</span>
          </h1>
          <p>
            Full-fledged developer with experience in large projects in the
            professional, personal and academic environment. I started as a
            programmer in 2018, having my first contact with the Python language
            and since then I have become enthusiastic and passionate about
            technology, always seeking knowledge to improve my skills every day.
            I focus on programming with Javascript and its frameworks - ReactJs,
            VueJs, NextJs, React Native, among others - as well as Python aimed
            at web development and its technologies that I use to develop my web
            and mobile applications. I am focused and absorb knowledge easily
            and quickly, so I have no difficulty learning a new language or
            adapting to any type of change. I love a challenge! If I could
            choose 3 words that define me they would be: Intelligent, Resilient
            and hardworking.
          </p>
          <div className="header-action">
            <a href="#">
              <div className="header-icon">
                <LuArrowUpRight />
              </div>
              VIEW MY WORKS
            </a>
          </div>
        </div>
      </section>
      <section className="services">
        <p>My Services</p>
        <h2>I PROVIDE A WIDE RANGE OF DIGITAL SERVICES</h2>
        <div className="services-cards">
          <ServiceCard
            Icon={() => <img src={IconWebsite} className="service-card-icon" />}
            title={"Front-end Developer"}
            description={
              "Creating intuitive and responsive user interfaces, focusing on the best visual and interactive experience for your visitors."
            }
          />
          <ServiceCard
            Icon={() => <img src={IconMobile} className="service-card-icon" />}
            title={"Mobile Developer"}
            description={
              "Developing optimized and functional mobile applications, designed to provide a seamless user experience on any device."
            }
          />
          <ServiceCard
            Icon={() => <img src={IconWebsite} className="service-card-icon" />}
            title={"Back-end Developer"}
            description={
              "Building robust and scalable systems to ensure your data and functionalities are secure and efficient."
            }
          />
          <ServiceCard
            Icon={() => (
              <img src={IconWebdesign} className="service-card-icon" />
            )}
            title={"Website Design"}
            description={
              "Designing attractive and modern websites, blending aesthetics and functionality to enhance your online presence."
            }
          />
        </div>
      </section>
      <section className="about">
        <div className="about-image">
          <img className="about-perfil" src={Perfil} alt="" />
        </div>
        <div className="about-content">
          <p>About Me</p>
          <h2>Hi! My name is Ryan Matheus</h2>
          <p>
            A dedicated Fullstack Developer based in Teresina, PI. With a strong
            foundation in computer science, currently pursuing a Bachelor's
            degree at Estácio CEUT, I have developed a robust skill set in both
            front-end and back-end development. My professional journey has
            provided me with diverse experiences across various industries,
            allowing me to adapt quickly and deliver high-quality solutions.
          </p>
          <p>
            I'm in the final stages of completing my Bachelor's degree in
            Computer Science at Estácio CEUT, where I've gained in-depth
            knowledge of software development, data structures, algorithms, and
            more.
          </p>
          <p>
            I am proficient in a wide range of technologies including HTML, CSS,
            JavaScript, TypeScript, React, NextJs, and VueJs for front-end
            development. On the back end, I have experience with Node.js,
            Express, and NestJs, along with database management using SQL and
            NoSQL. I am well-versed in creating responsive and accessible web
            applications, implementing RESTful APIs, and integrating third-party
            services. My skills extend to DevOps, with knowledge in Docker,
            Kubernetes, and cloud platforms like AWS.
          </p>
          <p>
            My goal is to leverage my expertise in both front-end and back-end
            development to create impactful software solutions that enhance user
            experiences and streamline business processes. I aim to continuously
            grow my skill set, stay updated with the latest technologies, and
            contribute effectively to the success of innovative projects.
          </p>
        </div>
      </section>
      <section className="projects">
        <p>My Projects</p>
        <h2>MY RECENT PROJECTS</h2>
      </section>
      <section>{/* contate me */}</section>
    </div>
  );
}
