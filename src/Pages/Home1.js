import React from "react";
import Sidebar from "../Components/Sidebar";
import MainContent1 from "../Components/MainContent1";

export default function Home() {
  return (
    <div className="con conr">
      <div className="content">
        <div className="">
          <Sidebar></Sidebar>
        </div>
        <div className="">
          <MainContent1></MainContent1>
        </div>
      </div>
    </div>
  );
}
