import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Apna Video Call</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/safgsagf");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            ones.
          </h1>
          <p>Cover a distance by Apna Video Call.</p>
          <div role="button">
            <Link to={"/auth"}>Get started</Link>
          </div>
        </div>
        <div>
          <img src="./mobile.png" alt="mobile pic" />
        </div>
      </div>
    </div>
  );
}
