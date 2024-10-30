import React from 'react';
import './HomePage.css'; // Import a CSS file for styling (optional)

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Bytemeuh!</h1>
        <p>Your one-stop destination for byte-sized fun!</p>
      </header>

      <main>
        <section className="fun-facts">
          <h2>Fun Facts</h2>
          <ul>
            <li>Did you know that the average person spends 6 hours a day online?</li>
            <li>More than 4.5 billion people use the internet!</li>
            <li>There are over 1.7 billion websites on the World Wide Web!</li>
            <li>Every minute, 500 hours of video are uploaded to YouTube!</li>
          </ul>
        </section>

        <section className="call-to-action">
          <h2>Join the Bytemeuh Community!</h2>
          <p>Sign up now and never miss a byte of fun!</p>
          <button onClick={() => alert('Join us today!')}>Join Now</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Bytemeuh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
