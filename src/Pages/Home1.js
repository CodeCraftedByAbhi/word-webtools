import React from "react";
import Sidebar from "../Components/Sidebar";
import MainContent1 from "../Components/MainContent1";

export default function Home() {
  return (
    <div>
      <div className="content">
        <div className="left">
          <Sidebar></Sidebar>
        </div>
        <div className="right">
          <MainContent1></MainContent1>
        </div>
      </div>
    </div>
  );
}
