import React from "react";

const Nav = (props) => {
  const {
    projectsSelected,
    setProjectsSelected,
    contactSelected,
    setContactSelected,
  } = props;
  return (
    <div className="nav-list">
      <p className={`${projectsSelected && "nav-active"}`}>
        <span
          onClick={() => {
            setProjectsSelected(true);
            setContactSelected(false);
          }}
        >
          My Work
        </span>
      </p>
      <a href="#about">About</a>
      <p className={`${contactSelected && "nav-active"}`}>
        <span
          onClick={() => {
            setContactSelected(true);
            setProjectsSelected(false);
          }}
        >
          Contact
        </span>
      </p>
      <a download="gilina_mcbride_resume" href="../../assets/resume.pdf">
        Resume
      </a>
    </div>
  );
};

export default Nav;
