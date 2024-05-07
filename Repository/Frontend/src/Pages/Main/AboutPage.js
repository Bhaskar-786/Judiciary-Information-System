import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
     <div>
      <div className="about-page">
        <h1>About Us</h1>
        <p>
          This is a project for the course of Software Engineering. The project
          is about a court management system. The project is developed by a
          group of students from the department of Computer Science and
          Engineering of IIT(ISM) Dhanbad.
        </p>
        <h2>Developers</h2>
        <ul>
          <li>Bhaskar</li>
          <li>Ayush kumar</li>
          <li>Akshita</li>
          <li>Ayush Mishra</li>
          <li>balaji</li>
        </ul>
      </div>
     </div>
  );
};

export default AboutPage;
