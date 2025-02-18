"use client";

import SocialMedia from "../(icons)/SocialMedia";
import PeopleCircle from "../(icons)/ionIcons/PeopleCircle";
import Chatbubbles from "../(icons)/ionIcons/Chatbubbles";
import styles from "../src/contact.css";
const Contact = () => {
  return (
    <>
      <title>Contact</title>
      <meta charSet="UTF-8" />
      <nav className="index">
        <div className="icon-container">
          <Chatbubbles />
        </div>
        <li>
          <a className="webicon" href="intro">
            Oasis
          </a>
        </li>
      </nav>
      <section>
        <h2 className="contact">We&apos;d love to hear from you</h2>
        <br />
        <hr />
        <p className="curious">
          Whether you are curious about the latest discussions or looking to
          join a specific topic, our forum website has got you covered.
        </p>
        <br />
        <div className="container">
          <div className="block">
            <div className="icon">
              <PeopleCircle />
            </div>
            <h3 className="username">Admin</h3>
            <p className="email">lqn458@gmail.com</p>
          </div>
          <div className="block">
            <div className="icon">
              <PeopleCircle />
            </div>
            <h3 className="username">Admin1</h3>
            <p className="email">aiercroft2007@gmail.com</p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <SocialMedia />
    </>
  );
};

export default Contact;
