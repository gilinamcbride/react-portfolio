import React from "react";
import Nav from "../Nav";
import logo from "../../assets/images/logo.svg";

const Header = (props) => {
  const {
    projectsSelected,
    setProjectsSelected,
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
  } = props;
  return (
    <header>
      <a href="/react-portfolio">
        <img src={logo} alt="gilina mcbride logo" key="gilina mcbride logo" />
      </a>
      <div className="nav">
        <Nav
          projectsSelected={projectsSelected}
          setProjectsSelected={setProjectsSelected}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
        />
      </div>
    </header>
  );
};

export default Header;
