import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#1b1a1a';
      showAlert("Dark mode has been enabled", "success")

    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "success")
    }
  }
  return (
    <Router>
      <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className={`container my 3 text-${mode==="light"?"dark":"light"}`}>
        <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
