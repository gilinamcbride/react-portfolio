import React from 'react';
// import icon from '../../assets/images/icons/icons8-html-5-50.png'

const Skills = () => {
    const photos = [
        "icons8-html-5-50", "icons8-css3-50", "icons8-javascript-logo-50", "icons8-nodejs-50", "icons8-npm-50", "icons8-mysql-logo-50", "icons8-github-50"
]
    return(
        <section className="skills">
            <h2>Skills</h2>
            <div className="icons">
                <div>
                    {photos.map((photo) => (
                        <img
                        src={`../../assets/images/icons/${photo}.png`}
                        alt="pretty icon" />
                    ))}
                </div>
                {/* <div><img src={icon} alt="HTML logo" /></div> */}

            </div>
        </section>
    )
};

export default Skills;