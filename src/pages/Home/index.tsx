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
            description={"Lorem ashduiasghdiu asbdygyugvd asdbuysbcnc"}
          />
          <ServiceCard
            Icon={() => <img src={IconMobile} className="service-card-icon" />}
            title={"Mobile Developer"}
            description={"Lorem ashduiasghdiu asbdygyugvd asdbuysbcnc"}
          />
          <ServiceCard
            Icon={() => <img src={IconWebsite} className="service-card-icon" />}
            title={"Back-end Developer"}
            description={"Lorem ashduiasghdiu asbdygyugvd asdbuysbcnc"}
          />
          <ServiceCard
            Icon={() => (
              <img src={IconWebdesign} className="service-card-icon" />
            )}
            title={"Website Design"}
            description={"Lorem ashduiasghdiu asbdygyugvd asdbuysbcnc"}
          />
        </div>
      </section>
      <section className="about">
        <div className="about-image">
          <img className="about-perfil" src={Perfil} alt="" />
        </div>
        <div className="about-content">
          <p>About Me</p>
          <h2>ABOUT ME IN 10 SECONDS</h2>
        </div>
      </section>
      <section>{/* projetos */}</section>
      <section>{/* contate me */}</section>
    </div>
  );
}
