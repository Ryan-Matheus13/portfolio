import React from "react";
import "./styles.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>HOME</li>
        <li>SERVICES</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
        <div>
          <button>DOWNLOAD CV</button>
        </div>
      </ul>
    </div>
  );
}
