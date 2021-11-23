import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div
      className="text-center container rounded mt-5 pt-5 abt-img"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1578659360996-38d62c6bec50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover" style={{ color: "white" }}>
          <h1 className="cover-heading fontlink">About Us</h1>
          <p className="lead p-4 fontlink2 text-left">
            As they say life will always come circles, but what we can do is
            draw it better than the last time. With this belief we present you
            the Ask_IIITM, your one stop solution to every college and life
            related problems. Write, Read, Help, Grow. and find the light that
            takes you and your peers far somewhere close to your world of
            dreams. So, come and join us at your very own especially designed
            college social media.
          </p>
          <p className="lead">
            <a href="https://github.com/Sarthakjain211001/ASK_IIITM-frontend" className="btn btn-lg btn-secondary mb-5 ">
              Learn more
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
