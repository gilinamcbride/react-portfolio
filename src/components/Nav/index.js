import React from "react";
import resume from "../../assets/resume.pdf";

const Nav = (props) => {
  const {
    projectsSelected,
    setProjectsSelected,
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
  } = props;
  return (
    <div className="nav-list">
      <p className={`${projectsSelected && "nav-active"}`}>
        <span
          onClick={() => {
            setProjectsSelected(true);
            setContactSelected(false);
            setAboutSelected(false);
          }}
        >
          My Work
        </span>
      </p>
      <p className={`${aboutSelected && "nav-active"}`}>
        <span
          onClick={() => {
            setAboutSelected(true);
            setProjectsSelected(false);
            setContactSelected(false);
          }}
        >
          About
        </span>
      </p>
      <p className={`${contactSelected && "nav-active"}`}>
        <span
          onClick={() => {
            setContactSelected(true);
            setProjectsSelected(false);
            setAboutSelected(false);
          }}
        >
          Contact
        </span>
      </p>
      <a download="gilina_mcbride_resume" href={resume}>
        Resume
      </a>
    </div>
  );
};

export default Nav;
