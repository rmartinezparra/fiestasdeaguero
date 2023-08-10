import './App.css'
import Navbar from "./navbar/Navbar.jsx";
import DayContent from "./Content/DayContent.jsx";
import {Fragment, useState } from "react";
import InfoDaysList from './data/Data.js';

//fonts
import "./assets/fonts/Brixton-Book.ttf";
import "./assets/fonts/BodoniModa-Regular.ttf";

function App() {

  const [infoDays, setInfoDays] = useState(InfoDaysList);

  return (
    <Fragment>
      <div className="w-full h-screen bg-slate-800 flex flex-col scroll-smooth">
        <header>
          <Navbar />
        </header>
        <main className="overflow-y-scroll no-scrollbar">
          {
            infoDays.map((info, index) => <DayContent key={index} infoDay={info} /> )
          }
        </main>
      </div>
    </Fragment>
  );
}

export default App
