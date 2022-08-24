import React from "react";

const Nav = (props) => {
  const { projectsSelected, setProjectsSelected } = props;
  return (
    <div className="nav-list">
      <p className={`${projectsSelected && "nav-active"}`}>
        <span onClick={() => setProjectsSelected(true)}>My Work</span>
      </p>
      <a href="/about">About</a>
      <p>Contact</p>
      <a download="gilina_mcbride_resume" href="../../assets/resume.pdf">
        Resume
      </a>
    </div>
  );
};

export default Nav;
