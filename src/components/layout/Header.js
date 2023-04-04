import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <ul>
      <li>
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
      </li>
      <li>
        {/* <a href="/about">About</a> */}
        <Link to="/about">About</Link>
      </li>
      <li>
        {/* <a href="/feature">Feature</a> */}
        <Link to="/feature">Feature</Link>
      </li>
    </ul>
  );
}
