import "./App.css";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Home1 from "./Pages/Home1";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="appli">
      <Router>
         <Navbar />
         <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/home/maths" element={<Home1></Home1>}></Route>
          <Route path="/home/word-analyzer" element={<Home></Home>}></Route>
         </Routes>
      </Router>          
       </div>
  );
}

export default App;
