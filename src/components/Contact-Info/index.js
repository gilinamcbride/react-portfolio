import React from "react";

const ContactInfo = () => {
  const information = [
    {
      link: "mailto:gilinamcbride@gmail.com",
      icon: "email",
      name: "Email",
    },
    {
      link: "https://github.com/gilinamcbride",
      icon: "light-github",
      name: "Github",
    },
    {
      link: "https://www.linkedin.com/in/gilinamcbride/",
      icon: "linkedin",
      name: "LinkedIn",
    },
    {
      link: "https://www.instagram.com/gilinamcbride/",
      icon: "instagram",
      name: "Instagram",
    },
    {
      link: "https://twitter.com/GilinaMcBride",
      icon: "twitter",
      name: "Twitter",
    },
    {
      link: "https://www.facebook.com/gilina.mcbride",
      icon: "facebook",
      name: "Facebook",
    },
  ];

  return (
    <section id="contact" className="contact">
      <section className="links">
        <h1>Let's connect</h1>
        <div className="link-list">
          {information.map((link) => (
            <div className="link" key={link.name}>
              <a href={link.link} target="_blank" rel="noreferrer">
                <img
                  src={require(`../../assets/images/icons/${link.icon}.png`)}
                  alt={link.name}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="email">
        <h1>Want to work together?</h1>
        <p>
          I am open to new positions as a full stack developer. I would love to
          hear from you and your company. Reach out at gilinamcbride@gmail.com.
        </p>
      </section>
    </section>
  );
};

export default ContactInfo;
