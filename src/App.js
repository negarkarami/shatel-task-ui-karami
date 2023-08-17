
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
