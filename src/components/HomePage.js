import React from "react";
import { Link } from "react-router-dom";
import '../styles/HomePage.css'; // External CSS file for styles

function HomePage() {
  return (
    <div className="homepage-container">
      <h2 className="homepage-title">Welcome to the Privacy Checklist!</h2>
      <p className="homepage-intro">
        In today’s digital age, privacy is not just a personal choice but a
        critical aspect of responsible digital citizenship. Our lives are
        increasingly shaped by technology, and understanding how to protect your
        personal information has never been more important. This application is
        designed to help you take charge of your digital privacy by exploring
        key areas where privacy matters most.
      </p>
      <p className="homepage-categories">
        You’ll evaluate your practices across five important categories:
        <ul>
          <li>
            <strong>Password Security:</strong> Learn about creating strong,
            unique passwords and securing your accounts.
          </li>
          <li>
            <strong>Device and App Privacy:</strong> Ensure your devices and
            apps are configured to protect your data.
          </li>
          <li>
            <strong>Social Media Privacy:</strong> Manage your online presence
            and reduce risks of oversharing.
          </li>
          <li>
            <strong>Data Sharing Awareness:</strong> Understand how your data is
            collected, shared, and safeguarded.
          </li>
          <li>
            <strong>Surveillance Awareness:</strong> Recognize and minimize
            risks from modern surveillance technologies.
          </li>
        </ul>
      </p>
      <p className="homepage-conclusion">
        Privacy is power, as it gives you control over your own life and
        decisions. By understanding your privacy habits and improving where
        necessary, you’re not only protecting yourself but also contributing to
        a more informed and empowered digital society. Start your journey now
        and take the first step towards reclaiming your digital freedom.
      </p>
      <Link to="/categories">
        <button className="homepage-button">Start</button>
      </Link>
    </div>
  );
}

export default HomePage;
