import React from "react";
import "./Welcome.css";

const Page = () => {
  return (
    <div>
      {/* Fullscreen Title Section */}
      <section className="fullscreen-title">
        <h1 className="subtitle-text1">Welcome to</h1>
        <h1 className="title-text">Sarah Chan's</h1>
        <h1 className="subtitle-text2">portfolio!</h1>
        <a href="#about" className="v-arrow">
        </a>
      </section>
    </div>
  );
};

export default Page;
