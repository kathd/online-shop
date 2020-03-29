import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="main homepage flex-column-center">
      <Header title="Hi there!" />
      <p>Welcome to Kathleen's version of TeeShirtz!</p>
      <p>
        For our after-bootcamp exercise, we were asked to create an online tee shop with a filter widget:
      </p>
      <div className="thumbnail flex-column-center">
        <img
          className="challenge"
          src="/images/challenge/challenge-0.png"
          alt="instructions"
        />
      </div>
      <div className="thumbnail flex-column-center">
        <img
          className="challenge"
          src="/images/challenge/challenge-1.png"
          alt="guide"
        />
      </div>
      <p>Click Shop on the upper right corner and check out how I did mine.</p>
      <p>Thanks for your time! :)</p>
    </div>
  );
};

export default Home;
