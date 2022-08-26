import React from "react";

const Skills = () => {
  const photos = [
    { photo: "html", name: "html logo" },
    { photo: "css", name: "css logo" },
    { photo: "javascript", name: "javascript logo" },
    { photo: "node", name: "node logo" },
    { photo: "npm", name: "npm logo" },
    { photo: "mysql", name: "mysql logo" },
    { photo: "github", name: "github logo" },
    { photo: "react", name: "react logo" },
    { photo: "mongodb", name: "mongo logo" },
  ];
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="icons">
        {photos.map((photo) => (
          <div className="icon" key={photo.name}>
            <img
              src={require(`../../assets/images/icons/${photo.photo}.png`)}
              alt={photo.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
