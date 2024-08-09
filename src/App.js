
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar1 from './Components/Navbar1';
import Textformat from './Components/Textformat';
import Alert from './Components/Alert';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
//   } from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light");
  const [alert,setalert]=useState(null);
  const showalert=(message)=>{
    setalert({
      message : message
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='#02022c';
      showalert('Dark Mode ON');
    }else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      showalert('Light Mode ON');
    }
  }
  return (
   <>
   {/* <Router> */}
   <Navbar1 togglemode={togglemode} mode={mode}/>
   <Alert alert={alert}/>
   <Textformat showalert={showalert} mode={mode} />
   {/* <About /> */}
   {/* <Routes>
   <Route path="/" element={<Textformat showalert={showalert} mode={mode} />} />
  <Route path="/about" element={<About />} />
   </Routes>
   </Router> */}
   </>
  );
}

export default App;
