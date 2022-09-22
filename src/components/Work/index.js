import React from 'react';

const Work = (props) => {
  const { setProjectsSelected } = props;
  return (
    <main id='work-section' className='work-section'>
      <div className='info'>
        <h1>Portfolio</h1>
      </div>
      <section className='new-work1'>
        <div className='work-photo'>
          <a
            href='https://carbon-footsteps.herokuapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <div className='work4'></div>
          </a>
        </div>
        <div className='work-text'>
          <h2>Carbon Footsteps</h2>
          <h3>React.js, GraphQL, MongoDB</h3>
          <p>
            This MERN stack application is for an environmentally conscious user
            who wants to calculate their carbon footprint and learn more about
            how to offset their emissions in order to positively impact the
            world's climate. Simply log into Carbon Footsteps, use the
            calculator to see your carbon footprint, and make your pledge of
            simple steps to offset your carbon emissions.
          </p>
          <div className='click'>
            <a
              href='https://github.com/nmsiegel1/carbon-footprint.git'
              target='_blank'
              rel='noreferrer'
            >
              <button type='button' className='button'>
                View Github Repository
              </button>{' '}
            </a>
          </div>
        </div>
      </section>
      <div className='recent-work-nav'>
        <div>
          <a
            href='https://github.com/gilinamcbride'
            target='_blank'
            rel='noreferrer'
          >
            &larr; More Work On Github
          </a>
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href='#'
            className='work-btn'
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
