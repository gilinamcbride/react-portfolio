import React from "react";

const Work = (props) => {
  const { setProjectsSelected } = props;
  return (
    <main id="work-section" className="work-section">
      <div className="info">
        <h1>Portfolio</h1>
      </div>
      <section className="new-work1">
        <div className="work-photo">
          <a
            href="https://sheltered-cliffs-36049.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <div className="work4"></div>
          </a>
        </div>
        <div className="work-text">
          <h2>Out Of Office</h2>
          <h3>Node.js, Sequelize, Heroku, Express-Session</h3>
          <p>
            This traveler friendly application allows users to write about their
            experiences and read about other users vacations and explorations.
            When you arrive at the Out Of Office homepage, login or sign up for
            the blog. Users can write their own blog posts about the
            destinations they traveled, or search the blog for specific cities
            they want to explore. Out of Office is a travel blog deployed to
            Heroku. This application follows the MVC paradigm in its
            architectural structure, uses Handlebars.js as the templating
            language, Sequelize as the ORM, and the express-session npm package
            for authentication.
          </p>
          <div className="click">
            <a
              href="https://github.com/gilinamcbride/travel-blog.git"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="button">
                View Github Repository
              </button>{" "}
            </a>
          </div>
        </div>
      </section>
      <div className="recent-work-nav">
        <div>
          <a
            href="https://github.com/gilinamcbride"
            target="_blank"
            rel="noreferrer"
          >
            &larr; More Work On Github
          </a>
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="work-btn"
            onClick={() => setProjectsSelected(true)}
          >
            View All Work &rarr;
          </a>
        </div>
      </div>
    </main>
  );
};

export default Work;
