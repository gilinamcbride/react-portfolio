import React from 'react';
import ProjectCard from '../Project-Card';
import travel_blog from '../../assets/images/travel_blog.png';
import pregame from '../../assets/images/pregame_image.png';
import weather from '../../assets/images/weather_image.png';
import tech_blog from '../../assets/images/tech_blog.png';
import social_network from '../../assets/images/social_network_image.png';
import code_quiz from '../../assets/images/code_quiz_image.png';
import footsteps from '../../assets/images/carbon-footsteps.png';

const Projects = () => {
  const projects = [
    {
      title: 'Carbon Footsteps',
      subtitle: 'React.js, GraphQL, MongoDB',
      description:
        "This MERN stack application is for an environmentally conscious user who wants to calculate their carbon footprint and learn more about how to offset their emissions in order to positively impact the world's climate. Simply log into Carbon Footsteps, use the calculator to see your carbon footprint, and make your pledge of simple steps to offset your carbon emissions.",
      link: 'https://carbon-footsteps.herokuapp.com/',
      githubLink: 'https://github.com/nmsiegel1/carbon-footprint.git',
      photo: footsteps,
    },
    {
      title: 'Out Of Office',
      subtitle: 'Node.js, Sequelize, Heroku, Express-Session',
      description:
        'This traveler friendly application allows users to write about their experiences and read about other users vacations and explorations. When you arrive at the Out Of Office homepage, login or sign up for the blog. Users can write their own blog posts about the destinations they traveled, or search the blog for specific cities they want to explore. Out of Office is a travel blog deployed to Heroku. This application follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
      link: 'https://sheltered-cliffs-36049.herokuapp.com/',
      githubLink: 'https://github.com/gilinamcbride/travel-blog.git',
      photo: travel_blog,
    },
    {
      title: 'Pregame',
      subtitle: 'Tailwind, Javascript & Third Party APIs',
      description:
        'Pregame is an application that helps you search for breweries, concerts, and other events in any major U.S. city. Discover new events and brews while traveling, or even in your home town. When you arrive at the Pregame homepage, enter a major US city in the search bar and a list of live events and breweries will display on the page. This application was built with the help of the following languages and APIs: HTML, CSS, JavaScript, Open Brewery DB, TicketMaster API.',
      link: 'https://gilinamcbride.github.io/pregame/',
      githubLink: 'https://github.com/gilinamcbride/pregame.git',
      photo: pregame,
    },
    {
      title: 'Weather Dashboard',
      subtitle: 'HTML, CSS & Third Party APIs',
      description:
        'Weather Dashboard is an application that allows you to search for weather in any city. When you arrive at the Weather Dashboard, enter a city in the search bar and a list the current forecast, and the five day forecast will be shown. This application runs in the browser and features dynamically updated HTML and CSS, and the use of Open Weather API.',
      link: 'https://gilinamcbride.github.io/weather-dashboard/',
      githubLink: 'https://github.com/gilinamcbride/weather-dashboard.git',
      photo: weather,
    },
    {
      title: 'Tech Blog',
      subtitle: 'Node.js, MySQL, Sequelize, Express.js',
      description:
        'Tech blog is a user friendly blog site where users can write blog posts about the tech industry. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. When users arrive at the homepage, they can sign up for the blog, write, edit, and delete their own blog posts, read other users blog posts and comment on them, and log out of the site.',
      link: 'https://guarded-plains-27828.herokuapp.com/',
      githubLink: 'https://github.com/gilinamcbride/tech-blog.git',
      photo: tech_blog,
    },
    {
      title: 'Social Network API',
      subtitle: 'MongoDB',
      description:
        "This application is the back-end for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.",
      link: 'https://github.com/gilinamcbride/social-network-API.git',
      githubLink: 'https://github.com/gilinamcbride/social-network-API.git',
      photo: social_network,
    },
    {
      title: 'Code Quiz',
      subtitle: 'HTML, CSS & Javascript',
      description:
        'Coding Quiz is a javascript application that runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript. Test your coding skills by taking the Code Quiz!',
      link: 'https://gilinamcbride.github.io/code-quiz/',
      githubLink: 'https://github.com/gilinamcbride/code-quiz.git',
      photo: code_quiz,
    },
  ];

  return (
    <main>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </main>
  );
};

export default Projects;
