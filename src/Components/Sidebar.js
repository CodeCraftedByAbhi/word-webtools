import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link className="nav-link" to="/home/word-analyzer">Word Analyzer</Link>
      <Link className="nav-link" to="/home/maths">Maths</Link>
      <p className="credit">Text-WebTool © Copyrights</p>
    </div>
  );
}
