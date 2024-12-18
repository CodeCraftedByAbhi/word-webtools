import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ theme }) {
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: theme === "dark" ? "var(--sidebar-bg-dark)" : "var(--sidebar-bg-light)",
        color: theme === "dark" ? "var(--sidebar-text-dark)" : "var(--sidebar-text-light)",
      }}
    >
      <Link className="nav-link" to="/home/word-analyzer">
        Word Analyzer
      </Link>
      <Link className="nav-link" to="/home/maths">
        Maths
      </Link>
      <p className="credit">Text-WebTool © Copyrights</p>
    </div>
  );
}
