import React from "react";

const Skills = () => {
    const photos = [
        {photo: "icons8-html-5-50",
        name: "html logo"},
        {photo: "icons8-css3-50",
        name: "css logo"},
        {photo: "icons8-javascript-logo-50",
        name: "javascript logo"},
        {photo: "icons8-nodejs-50",
        name: "node logo"},
        {photo: "icons8-npm-50",
        name: "npm logo"},
        {photo: "icons8-mysql-logo-50",
        name: "mysql logo"},
        {photo: "icons8-github-50",
        name: "github logo"},
        {photo: "icons8-react-50",
        name: "react logo"},
        {photo: "icons8-mongodb-50",
        name: "mongo logo"}
]
    return(
        <section className="skills">
            <h2>Skills</h2>
            <div className="icons">
                {photos.map((photo) => (
                    <div><img
                    src={require(`../../assets/images/icons/${photo.photo}.png`)}
                    alt={photo.name} 
                    key={photo.name}/></div>
                ))}
            </div>
        </section>
    )
};

export default Skills;