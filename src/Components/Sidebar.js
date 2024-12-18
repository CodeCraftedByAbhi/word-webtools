import React from "react";
import{Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <>  
    <div className="sidebar">
        <Link className="nav-link my-2" to="/home/word-analyzer">Word Analyzer</Link>
        <Link className="nav-link my-2" to="/home/maths">Maths</Link>
        <p className="credit">Text-WebTool©copyrights</p>
    </div>
    </>
  );
}
