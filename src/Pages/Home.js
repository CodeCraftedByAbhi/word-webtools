import React from "react";
import Sidebar from "../Components/Sidebar";
import Body from "../Components/MainContent";

export default function Home() {
  return (
    <div>
      <div className="content">
        <div className="left">
          <Sidebar></Sidebar>
        </div>
        <div className="right">
          <Body></Body>
        </div>
      </div>
    </div>
  );
}
