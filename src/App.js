import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./components/Info.js";
import Portfolio from "./components/Portfolio.js";

import Scrolly from "./helpers/ScrollAnimation.js";

function App() {
  return (
    <div className='App bg-dark min-w-full min-h-screen h-[100%]'>
      <div className='mx-12 h-full'>
        <BrowserRouter basename='/portolio'>
          <Routes>
            <Route path='/' element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
