import React from 'react';

const ContactInfo = () => {
    return(
        <section id="contact" className="contact">
            <section className="links">
                <h1>Let's connect</h1>
                <div className="link-list">
                <ul>
                    <li><a href="mailto:gilinamcbride@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
                    <li><a href="https://github.com/gilinamcbride" target="_blank" rel="noreferrer"
                    >Github</a></li>
                    <li><a href="https://www.linkedin.com/in/gilinamcbride/" target="_blank" rel="noreferrer"
                    >LinkedIn</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.instagram.com/gilinamcbride/" target="_blank" rel="noreferrer"
                    >Instagram</a></li>
                    <li><a href="https://twitter.com/GilinaMcBride" target="_blank" rel="noreferrer"
                    >Twitter</a></li>
                    <li><a href="https://www.facebook.com/gilina.mcbride" target="_blank" rel="noreferrer"
                    >Facebook</a></li>
                </ul>
                </div>
            </section>
            <section className="email">
                <h1>Want to work together?</h1>
                <p>
                I am open to new positions as a full stack developer. I would love to hear from you and your company. Reach out at gilinamcbride@gmail.com.
                </p>
            </section>
        </section>
    )
};

export default ContactInfo;